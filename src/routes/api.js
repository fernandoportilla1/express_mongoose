const router = require('express').Router();

const { verifyToken } = require('../helpers/middlewares')

router.use('/users', require('./api/users'))
router.use('/products', verifyToken, require('./api/products'))


module.exports = router;