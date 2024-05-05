const bcrypt = require('bcrypt')

const { createToken } = require('../helpers/utils')

const User = require("../models/user.model")

const getAllUser = async (req, res) => {
    try {
        const rows = await User.find().populate('cart')
        res.json(rows)
    } catch (error) {
        res.status(503).json(error.message)
    }
}

const registerUser = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 8);

        const savedUser = await User.create(req.body);
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(503).json(error.message)
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email })
        if (user.length === 0) {
            return res.status(404).json({ error: 'El email y/o contraseña son inválidos' })
        }
        const equals = bcrypt.compareSync(password, user.password);
        if (!equals) {
            return res.status(404).json({ error: 'El email y/o contraseña son inválidos' })
        }

        res.json({
            success: 'login',
            token: createToken(user)
        })
    } catch (error) {
        res.status(503).json(error.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params
        const rows = await User.findByIdAndUpdate(userId, req.body)
        res.json(rows)
    } catch (error) {
        res.status(503).json(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params
        const rows = await User.findByIdAndDelete(userId)
        res.json(rows)
    } catch (error) {
        res.status(503).json(error.message)
    }
}

const addProduct = async (req, res) => {
    try {
        const { userId } = req.params
        const user = await User.findById(userId)
        user.cart.push(req.body.productId)
        await user.save()

        res.json(user)
    } catch (error) {
        res.status(503).json(error.message)
    }
}

module.exports = {
    getAllUser,
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    addProduct
}