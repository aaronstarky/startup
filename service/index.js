

const { MongoClient } = require('mongodb');
const cookieParser = require('cookie-parser');
const config = require('./dbConfig.json');
const bcrypt = require('bcrypt');
const express = require('express');
const uuid = require('uuid');
const cors = require('cors');
const allowedOrigins = ['https://localhost:5173', 'https://startup.picklematch.click', '*', '0.0.0.0', 'http://localhost:5173'];
const connection_str = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=startup-cluster`;
const client = new MongoClient(connection_str);

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            console.log(origin);
            return callback(new Error('CORS policy violation'), false);
        }
        return callback(null, true);
    }
}));
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


// AUTH //////////////////////////////////////////////////////////////////
// CREATE USER PROFILE //////////////////////////////////////////////////
app.post('/api/auth/create', async (req, res) => {
    console.log("/auth/create");
    try {
        if (await getUser(req.body.email)) {
            res.status(409).send({ msg: 'User already exists' });
            console.log("User already exists");
            return;
        }
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
        res.send({
            id: user._id,
        });
        console.log("User created");
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ msg: 'Error creating user' });
    }
});

function setAuthCookie(res, token) {
    res.cookie('auth', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
    });
}

app.post('/api/auth/login', async (req, res) => {
    try {
        const user = await getUser(req.body.email);
        console.log(user);
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            res.status(401).send({ msg: 'Unauthorized' });
            console.log("Unauthorized");
            return;
        }
        setAuthCookie(res, user.token);
        res.send({
            id: user._id,
        });
        console.log("User logged in");
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send({ msg: 'Error logging in' });
    }   
});

app.get('/api/user/me', async (req, res) => {
    const authToken = req.cookies['token'];
    const user = await client.db('paddlematch').collection('users').findOne({ token: authToken });
    if (!user) {
        res.status(401).send({ msg: 'Unauthorized' });
        return;
    }
    res.send({
        id: user._id,
        email: user.email,
    });
});
// MATCHES //////////////////////////////////////////////////////////////
let matches = {};
class Match {
    constructor(player1, player2, score1, score2) {
        this.uuid = uuid.v4();
        this.player1 = player1;
        this.player2 = player2;
        this.score1 = score1;
        this.score2 = score2;
        this.date = new Date();
        this.live = true;
    }
}
// SUBMIT MATCH
apiRouter.post('/match/submit/:uuid', async (req, res) => {
    console.log("/api/match/submit");
    const match = client.db('paddlematch').collection('matches').findOne({ uuid: req.params.uuid });
    if (match) {
        client.db('paddlematch').collection('matches').updateOne({ uuid: req.params.uuid }, { $set: { live: false } });
        res.status(200).send({ msg: 'Match submitted successfully' });
        return;
    }
    res.status(400).send({ msg: 'Match not found' });
    console.log(matches);
});
// GET MATCHES FOR USER
apiRouter.post('/match/:user_id', async (_req, res) => {
    console.log("/api/match/:user_id");
    try {
        const user_matches = await client.db('paddlematch').collection('matches').find({
            $or: [
                { player1: _req.params.user_id },
                { player2: _req.params.user_id }
            ]
        }).toArray(); 
        res.status(200).send({
            matches: user_matches
        });
        return;
    } catch (error) {
        console.error('Error fetching matches:', error);
        res.status(500).send({ msg: 'Error fetching matches' });
        return;
    }
});
// GET MATCH BY ID
apiRouter.post('/match/get/:match_id', async (_req, res) => {
    console.log("/api/match/get/:match_id");
    try {
        const match = await client.db('paddlematch').collection('matches').findOne({ uuid: _req.params.match_id });
        if (match) {
            res.status(200).send({ matches: [match] });
            return;
        }
        res.status(400).send({ msg: 'Match not found' });
    } catch (error) {
        console.error('Error fetching match:', error);
        res.status(500).send({ msg: 'Error fetching match' });
        return;
    }
});
// START MATCH
apiRouter.post('/match/start/:player1/:player2/:score1/:score2', async (_req, res) => {
    console.log("/api/match/start/:player1/:player2/:score1/:score2");
    const match = new Match(_req.params.player1, _req.params.player2, _req.params.score1, _req.params.score2);
    try {
        await client.db('paddlematch').collection('matches').insertOne(match);
    } catch (error) {
        console.error('Error inserting match:', error);
        res.status(500).send({ msg: 'Error inserting match' });
        return;
    }
    res.status(200).send({ msg: 'Match started', match_id: match.uuid });
    return;
});
// UPDATE SCORE
apiRouter.post('/match/update/:match_id/:score1/:score2', async (req, res) => {
    console.log("/api/match/update/:match_id/:score1/:score2");
    try {
        client.db('paddlematch').collection('matches').updateOne({ uuid: req.params.match_id }, { $set: { score1: req.params.score1, score2: req.params.score2 } });
        res.status(200).send({ msg: 'Score updated' });
        return;
    } catch (error) {
        console.error('Error updating match:', error);
        res.status(500).send({ msg: 'Error updating match' });
        return;
    }
});
// DEFAULT ///////////////////////////////////////////////////////////////
app.get('/', (_req, res) => {
    res.send({ msg: 'Picklematch services baby 🎉' });
});

app.get('/weather', async (_req, res) => {
    console.log("/weather");
    const response = await fetch('http://goweather.herokuapp.com/weather/Denver');
    const data = await response.json();
    console.log(data);
    res.send(data);
});
// MONGO FUNCTIONS //////////////////////////////////////////////////////
async function getUser(email) {
    console.log("getUser");
    return client.db('paddlematch').collection('users').findOne({ email });
}

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await client.db('paddlematch').collection('users').insertOne(user);
    return user;
}
// FINALLY BEGIN THE SERVER /////////////////////////////////////////////
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});