const jwt = require('jsonwebtoken');

const isLogin = (req, res, next) => {
    if (req.session.user == null || req.session.user == undefined) {
        res.redirect('/login');
    } else {
        next();
    }
}

const tokenJWT = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");
        const user = await decodedToken;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Maaf Token Anda Tidak Valid !"
        });
    }
}

module.exports = { isLogin, tokenJWT };