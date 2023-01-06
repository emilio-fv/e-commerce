const jwt = require('jsonwebtoken'); // Import JSON Web Token

const authenticate = (req, res, next) => { // Authentication function
    jwt.verify(req.cookies.userToken, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false});
        } else {
            next();
        }
    })

}

module.exports = { authenticate: authenticate }; // Export Authenticate function