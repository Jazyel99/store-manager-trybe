const connection = require('./config/connection');

const selectProductByIDQuery = `SELECT * FROM 
StoreManager.products WHERE id=?`;

const selectAllProductsQuery = `SELECT * FROM 
StoreManager.products`;

const deleteProductQuery = `DELETE FROM 
StoreManager.products WHERE id = ?`;

const createProductQuery = `INSERT INTO StoreManager.products 
(name) VALUES (?)`;

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
  deleteProduct: async (productId) => {
    const [result] = await connection.execute(deleteProductQuery, [productId]);
    return result.affectedRows;
  },
  addProduct: async (productName) => {
    const [result] = await connection.execute(createProductQuery, [productName]);

    return { id: result.insertId, name: productName };
  },
};

module.exports = productModel;
