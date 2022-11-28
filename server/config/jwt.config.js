const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userToken, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false});
        } else {
            next();
        }
    })

}

module.exports = { authenticate: authenticate };