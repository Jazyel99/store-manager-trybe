const { Router } = require('express');
const { saleController } = require('../controllers/sale.controller');

const router = Router();

router.get('/', saleController.getSales);
router.get('/:id', saleController.getSaleById);
router.delete('/:id', saleController.deleteSale);

module.exports = router;
