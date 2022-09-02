const { saleService } = require('../services/sale.service');

module.exports.saleController = {
  getSaleById: async (req, res) => {
    const { id } = req.params;
    const result = await saleService.getSaleById(id);
    if (result === null) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(result);
  },
  getSales: async (req, res) => {
    const result = await saleService.getSales();
    if (result === null) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(result);
  },
};
