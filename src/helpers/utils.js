const jwt = require('jsonwebtoken')
const dayjs = require('dayjs')

const createToken = (user) => {
    const obj = {
        name: user.name,
        user_id: user.id,
        exp: dayjs().add(5, 'minutes').unix()
    }

    return jwt.sign(obj, process.env.SECRET_KEY)
}

module.exports = {
    createToken
}