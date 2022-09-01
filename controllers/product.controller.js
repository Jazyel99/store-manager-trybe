const { productService } = require('../services/product.service');

module.exports.productController = {
  getProductByID: async (req, res) => {
    const { id } = req.params;
    const response = await productService.getProductByID(id);
    if (response === null) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(response);
  },
};
