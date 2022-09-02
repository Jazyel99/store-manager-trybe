const { Router } = require('express');
const { productController } = require('../controllers/product.controller');
const { productMiddleware } = require('../middlewares/productValidation');
const rescue = require('../utils/rescue');

const router = Router();

router.get('/', productController.getProducts);
router.post('/', [productMiddleware, rescue(productController.addProduct)]);
router.get('/:id', productController.getProductByID);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
