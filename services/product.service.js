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
};
