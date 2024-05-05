const Product = require("../models/product.model")

const getAllProduct = async (req, res) => {
    try {
        const rows = await Product.find()
        res.json(rows)
    } catch (error) {
        res.status(503).json(error.message)
    }
}

const getByTax = async (req, res) => {
    try {
        const { tax } = req.params;
        const rows = await Product.productTax(tax);
        res.json(rows)
    } catch (error) {
        res.status(503).json(error.message)
    }
}

const createProduct = async (req, res) => {
    try {
        const rows = await Product.create(req.body)
        res.json(rows)
    } catch (error) {
        res.status(503).json(error.message)
    }
}

const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const rows = await Product.findByIdAndUpdate(productId, req.body)
        res.json(rows)
    } catch (error) {
        res.status(503).json(error.message)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const rows = await Product.findByIdAndDelete(productId)
        res.json(rows)
    } catch (error) {
        res.status(503).json(error.message)
    }
}

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getByTax
}