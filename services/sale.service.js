const saleModel = require('../models/Sale');

// ::DOING adicinonar a função getProductByID
module.exports.saleService = {
  getSaleById: async (saleId) => {
    const result = await saleModel.getSaleById(saleId);
    if (!result.length) return null;
    return result;
  },
  // ::DONE adicionar a função getSales
  getSales: async () => {
    const result = await saleModel.getSales();
    if (!result.length) return null;
    return result;
  },
  deleteSale: async (saleId) => {
    const result = await saleModel.deleteSale(saleId);
    if (result === 0) return null;
    return 204;
  },
};
