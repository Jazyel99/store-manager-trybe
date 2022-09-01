const { productService } = require('../services/product.service');

module.exports.productController = {
  getProductByID: async (req, res) => {
    const { id } = req.params;
    const result = await productService.getProductByID(id);
    if (result === null) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(result);
  },
  getProducts: async (req, res) => {
    const result = await productService.getProducts();
    if (result === null) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(result);
  },
};
