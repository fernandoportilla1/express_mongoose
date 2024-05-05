const router = require('express').Router();

const ProductController = require('../../controllers/products.controller');

router.get('/', ProductController.getAllProduct);
router.get('/tax/:tax', ProductController.getByTax);
router.post('/', ProductController.createProduct);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;