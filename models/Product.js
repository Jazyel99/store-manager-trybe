const connection = require('./config/connection');

const selectProductByIDQuery = `SELECT * FROM 
StoreManager.products WHERE id=?`;

const productModel = {
  // ::DOING pegar produto pelo ID
  getProductByID: async (productID) => {
    const [[result]] = await connection.execute(selectProductByIDQuery, [productID]);
    return result;
  },
  // :: TODO pegar todos os produtos
};

module.exports = productModel;
