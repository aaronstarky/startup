const express = require('express');
const uuid = require('uuid');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// AUTH //////////////////////////////////////////////////////////////////
let users = {};
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.token = null;
    }
}
// REGISTER
apiRouter.post('/auth/register', async (req, res) => {
    console.log("/api/auth/register");
    if (users[req.email]) {
        res.status(400).send({ msg: 'User already exists' });
        return;
    }
    users[req.email] = new User(req.email, req.password);
    res.send({ msg: 'User created' });
});
// LOGIN
apiRouter.post('/auth/login', async (req, res) => {
    console.log("/api/auth/login");
    const user = users[req.email];
    if (user) {
        if (req.password === user.password) {
            user.token = uuid.v4();
            res.send({ token: user.token });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});
// MATCHES //////////////////////////////////////////////////////////////
let matches = {};
class Match {
    constructor(uuid, player1, player2, score1, score2) {
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
    const user = users[_req.params.user_id];
    if (!user) {
        res.status(400).send({ msg: 'User not found' });
        return;
    }
    let user_matches = [];
    for (let match of matches) {
        if (match.player1 === _req.params.user_id || match.player2 === _req.params.user_id) {
            user_matches.push(match);
        }
    }
    res.status(200).send({
        matches: user_matches
    });
    return;
});
// START MATCH
apiRouter.post('/match/start/:match_id/:player1/:player2/:score1/:score2', async (_req, res) => {
    console.log("/api/match/start/:match_id");
    const match = new Match(_req.params.match_id, _req.params.player1, _req.params.player2, _req.params.score1, _req.params.score2);
    matches[_req.params.match_id] = match;
    res.status(200).send({ msg: 'Match started' });
    return;
});

// GAME INVITES /////////////////////////////////////////////////////////
let invites = [];
class Invite {
    constructor(from, to) {
        this.uuid = uuid.v4();
        this.match_uuid = null;
        this.from = from;
        this.to = to;
    }
}
// GET INVITES
apiRouter.post('/invite', (_req, res) => {
    console.log("/api/invite");
    return;
});
// SEND INVITE
apiRouter.post('/invite/:match_id/:from_user_id/:to_user_id', (req, res) => {
    console.log("/api/invite/:match_id/:from_user_id/:to_user_id");
    return;
});

app.get('/', (_req, res) => {
    res.send({ msg: 'Picklematch services baby 🎉' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});