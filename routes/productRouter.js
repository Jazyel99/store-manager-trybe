const { Router } = require('express');
const { productController } = require('../controllers/product.controller');

const router = Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductByID);

module.exports = router;
