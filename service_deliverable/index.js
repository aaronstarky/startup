const express = require('express');
const uuid = require('uuid');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;




app.use(express.static('public'));
app.use(`/api`, apiRouter);

// AUTH //////////////////////////////////////////////////////////////////
let users = {};
// REGISTER
apiRouter.post('/auth/register', async (req, res) => {
    if (users[req.body.email]) {
        res.status(400).send({ msg: 'User already exists' });
        return;
    }
    users[req.body.email] = { password: req.body.password };
    res.send({ msg: 'User created' });
});
// LOGIN
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
        if (req.body.password === user.password) {
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
apiRouter.post('/match', (_req, res) => {
    return;
});
// SUBMIT MATCH
apiRouter.post('/score', (req, res) => {
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
    return;
});
// SEND INVITE
apiRouter.post('/invite', (req, res) => {
    return;
});

app.get('*', (_req, res) => {
    res.send({ msg: 'Picklematch services baby 🎉' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});