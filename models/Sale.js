const connection = require('./config/connection');

const selectSalesQuery = `SELECT * FROM 
StoreManager.sales`;

const saleModel = {
  // ::TODO pegar todas as vendas
  getSales: async () => {
    const [result] = await connection.execute(selectSalesQuery);
    return result;
  },
  // ::TODO pegar veda pelo id
};

module.exports = saleModel;
