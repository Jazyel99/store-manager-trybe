const productModel = require('../models/Product');

// ::DOING adicinonar a função getProductByID
module.exports.productService = {
  getProductByID: async (prooductID) => {
    const result = await productModel.getProductByID(prooductID);
    if (!result.length) return null;
    return result;
  },
  // ::DOING adicionar a função getProducts
  getProducts: async () => {
    const result = await productModel.getProducts();
    if (!result.length) return null;
    return result;
  },
  deleteProduct: async (productId) => {
    const result = await productModel.deleteProduct(productId);
    if (result === 0) return null;
    return 204;
  },
  addProduct: async (productName) => {
    const result = await productModel.addProduct(productName);
    return result;
  },
};
