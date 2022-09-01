const connection = require('./config/connection');

const selectProductByIDQuery = `SELECT * FROM 
StoreManager.products WHERE id=?`;

const selectAllProductsQuery = `SELECT * FROM 
StoreManager.products`;

const productModel = {
  // ::DONE pegar produto pelo ID
  getProductByID: async (productID) => {
    const [result] = await connection.execute(selectProductByIDQuery, [productID]);
    return result;
  },
  // :: DONE pegar todos os produtos
  getProducts: async () => {
    const [result] = await connection.execute(selectAllProductsQuery);
    return result;
  },
};

module.exports = productModel;
