const { productService } = require('../services/product.service');

module.exports.productController = {
  getProductByID: async (req, res) => {
    const { id } = req.params;
    const result = await productService.getProductByID(id);
    if (result === null) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(result[0]);
  },
  getProducts: async (req, res) => {
    const result = await productService.getProducts();
    if (result === null) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(result);
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;

    const result = await productService.deleteProduct(id);

    if (result === null) return res.status(404).json({ message: 'Product not found' });
    return res.status(204).send();
  },
  addProduct: async (req, res) => {
    const result = await productService.addProduct(req.body.name);
    return res.status(201).json(result);
  },
};
