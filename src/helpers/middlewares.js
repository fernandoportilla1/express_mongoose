const jwt = require('jsonwebtoken')

const User = require('../models/user.model')

const verifyToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({ fatal: 'debes incluid la cabecera de autorización' });
    }

    try {
        const token = req.headers['authorization']
        const verified = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findById(verified.user_id);
        req.user = user
        next();
    } catch (error) {
        res.status(400).json({ error: `token no es válido, ${error.message}` })
    }
}

module.exports = {
    verifyToken
}