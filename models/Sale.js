const connection = require('./config/connection');

const selectSalesQuery = `SELECT sale_id AS saleId, StoreManager.sales.date AS date, 
product_id AS productId, quantity
FROM StoreManager.sales_products
INNER JOIN StoreManager.sales ON sale_id=StoreManager.sales.id`;

const selectSaleByIdQuery = `SELECT StoreManager.sales.date AS date, 
product_id AS productId, quantity
FROM StoreManager.sales_products
INNER JOIN StoreManager.sales ON sale_id=StoreManager.sales.id WHERE id = ?;`;

const saleModel = {
  // ::DONE pegar todas as vendas
  getSales: async () => {
    const [result] = await connection.execute(selectSalesQuery);
    return result;
  },
  // ::DONE pegar veda pelo id
  getSaleById: async (saleId) => {
    const [result] = await connection.execute(selectSaleByIdQuery, [saleId]);
    return result;
  },
};

module.exports = saleModel;
