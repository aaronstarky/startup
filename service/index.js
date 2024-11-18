const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const express = require('express');
const uuid = require('uuid');
const cors = require('cors');

const app = express();
app.use(express.static('public'));

const allowedOrigins = ['https://localhost:5173', 'https://startup.picklematch.click', '*', '0.0.0.0'];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS policy violation'), false);
    }
    return callback(null, true);
  }
}));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);
// AUTH //////////////////////////////////////////////////////////////////
let users = {};
let tokens = new Set();
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.first_name = null;
        this.last_name = null;
        this.token = null;
    }
}
// REGISTER
apiRouter.post('/auth/register/:email/:password', async (req, res) => {
    console.log("/api/auth/register");
    if (users[req.params.email]) {
        res.status(400).send({ msg: 'User already exists' });
        return;
    }
    users[req.params.email] = new User(req.params.email, req.params.password);
    res.send({ msg: 'User created' });
});
// LOGIN
apiRouter.post('/auth/login/:email/:password', async (req, res) => {
    console.log("/api/auth/login");
    const user = users[req.params.email];
    if (user) {
        if (req.params.password === user.password) {
            user.token = uuid.v4();
            tokens.add(user.token);
            res.send({ token: user.token });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});
// VERIFY
apiRouter.post('/auth/verify/:token', async (req, res) => {
    console.log("/api/auth/verify");
    if (tokens.has(req.params.token)) {
        res.status(200).send({ msg: 'Authorized' });
        return;
    }
    res.status(401).send({ msg: 'Unauthorized' });
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
    const match = matches[req.params.uuid];
    if (match) {
        matches[req.params.uuid].live = false;
        res.status(200).send({ msg: 'Match submitted successfully' });
        return;
    }
    res.status(400).send({ msg: 'Match not found' });
    console.log(matches);
});
// GET MATCHES
apiRouter.post('/match/:user_id', async (_req, res) => {
    console.log("/api/match/:user_id");
    let user_matches = [];
    for (const [match_id, match] of Object.entries(matches)) {
        if (match.player1 === _req.params.user_id || match.player2 === _req.params.user_id) {
            user_matches.push(match);
        }
    }
    res.status(200).send({
        matches: user_matches
    });
    return;
});
apiRouter.post('/match/get/:match_id', async (_req, res) => {
    console.log("/api/match/get/:match_id");
    const match = matches[_req.params.match_id];
    if (match) {
        res.status(200).send({
            matches: [match]
        });
        return;
    }
    res.status(400).send({ msg: 'Match not found' });
});
// START MATCH
apiRouter.post('/match/start/:player1/:player2/:score1/:score2', async (_req, res) => {
    console.log("/api/match/start/:player1/:player2/:score1/:score2");
    const match = new Match(_req.params.player1, _req.params.player2, _req.params.score1, _req.params.score2);
    matches[match.uuid] = match;
    res.status(200).send({ msg: 'Match started', match_id: match.uuid });
    return;
});
// UPDATE SCORE
apiRouter.post('/match/update/:match_id/:score1/:score2', async (req, res) => {
    console.log("/api/match/update/:match_id/:score1/:score2");
    let match = matches[req.params.match_id];
    console.log(req.params.match_id, req.params.score1, req.params.score2);
    if (match) {
        const newMatch = new Match(match.player1, match.player2, req.params.score1, req.params.score2);
        matches[req.params.match_id] = newMatch;
        res.status(200).send({ msg: 'Score updated' });
        return;
    }
    res.status(401).send({ msg: 'Cannot find match to update' });
});
// DEFAULT ///////////////////////////////////////////////////////////////
app.get('/', (_req, res) => {
    res.send({ msg: 'Picklematch services baby 🎉' });
});

app.get('/weather', async (_req, res) => {
    console.log("/weather");
    const response = await fetch('https://goweather.herokuapp.com/weather/Denver');
    const data = await response.json();
    res.send(data);
});


const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});