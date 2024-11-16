const express = require('express');
const uuid = require('uuid');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// AUTH //////////////////////////////////////////////////////////////////
let users = {};
// REGISTER
apiRouter.post('/auth/register', async (req, res) => {
    console.log("/api/auth/register");
    if (users[req.email]) {
        res.status(400).send({ msg: 'User already exists' });
        return;
    }
    users[req.email] = { password: req.password };
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
let matches = [];
class Match {
    constructor(player1, player2, score1, score2) {
        this.uuid = uuid.v4();
        this.player1 = player1;
        this.player2 = player2;
        this.score1 = score1;
        this.score2 = score2;
    }
}
// GET MATCHES
apiRouter.post('/match/:user_id', (_req, res) => {
    res.send({ msg: `matches hit for user_id ${_req.params.user_id}` });
    console.log("/api/match/:user_id");
    return;
});
// SUBMIT MATCH
apiRouter.post('/match/submit', (req, res) => {
    res.send({ msg: `submit match hit`});
    console.log("/api/match/submit");
    return;
});

// GAME INVITES /////////////////////////////////////////////////////////
let invites = [];
class Invite {
    constructor(from, to) {
        this.uuid = uuid.v4();
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