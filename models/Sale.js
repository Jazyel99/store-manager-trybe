const connection = require('./config/connection');

const selectSalesQuery = `SELECT id, date FROM 
StoreManager.sales`;

const selectSaleByIdQuery = `SELECT date FROM 
StoreManager.sales WHERE id = ?`;

const saleModel = {
  // ::DONE pegar todas as vendas
  getSales: async () => {
    const [result] = await connection.execute(selectSalesQuery);
    return result;
  },
  // ::DONE pegar veda pelo id
  getSaleById: async (saleId) => {
    const [result] = await connection.execute(selectSaleByIdQuery, saleId);
    return result;
  },
};

module.exports = saleModel;
