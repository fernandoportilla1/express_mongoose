const router = require('express').Router();

const UserController = require('../../controllers/users.controller');

router.get('/', UserController.getAllUser);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.put('/:userId', UserController.updateUser);
router.put('/add_product/:userId', UserController.addProduct);
router.delete('/:userId', UserController.deleteUser);

module.exports = router;