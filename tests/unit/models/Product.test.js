const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/config/connection');
const productModel = require('../../../models/Product');

const expectedProduct = {
  id: 1,
  name: 'Martelo de Thor'
};

const expectedProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  }
];

// ::TODO teste da camda models
describe('Testes da camada models', () => {
  afterEach(function () {
    Sinon.restore();
  });
  // ::TODO testes bemsucedidos
  describe('Testes bemsucedidos', () => {
    // ::DONE testes da função getProductByID
    describe('Teste da função getProductByID', () => {
      // ::DONE testar se a função retorna um objeto
      it(`Deve retorna uma objeto`, async () => {
        const resultExecute = [expectedProduct];
        Sinon.stub(connection, 'execute').resolves([[resultExecute]]);

        const product = await productModel.getProductByID(1);
        expect(typeof product).to.have.deep.equal('object');
      });
      // ::DONE testar se o objeto vem com as chaves id e name
      it('Deve testar se o objeto tem as chaves ID e NAME', async () => {
        const resultExecute = [expectedProduct];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const [product] = await productModel.getProductByID(1);
        expect(product).to.have.all.keys('id', 'name');
      });
      // ::DONE testar se o objeto retornado é igual ao esperado
      it('Deve comparar o objeto retornado com o objeto esperado', async () => {
        const resultExecute = [expectedProduct];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const [product] = await productModel.getProductByID(1);
        expect(product).to.deep.equal(expectedProduct);
      });
    });
    // ::DONE tetes da função getProducts
    describe('Teste da função getProducts', () => {
      it(`Deve retorna uma lista não vazia`, async () => {

        Sinon.stub(connection, 'execute').resolves([expectedProducts]);

        const product = await productModel.getProducts();
        expect(product).to.be.an('array').that.not.empty;
      });
      it(`Deve retorna uma lista de produtos`, async () => {

        Sinon.stub(connection, 'execute').resolves([expectedProducts]);

        const product = await productModel.getProducts();
        expect(product).to.be.equal(expectedProducts);
      });
    });
    // ::TODO test da função addProduct
    // ::TODO teste da função deleteProduct
    describe('Teste da função deleteProduct', () => {
      it('Deve retornar 1 como quantidade de coluna afetada', async () => {
        Sinon.stub(connection, 'execute').resolves([{affectedRows: 1}]);
        const result = await productModel.deleteProduct(1);
        expect(result).to.be.equal(1);
      });
    });
  })
  // ::TODO testes malsucedidos
  describe('Testes malsucedidos', () => {
    // ::DONE testes da função getProductByID
    describe('Teste da função getProductByID', () => {
      // ::DONE testa se o retorno é undefined
      it('Deve testar se o retorno é undefined', async () => {
        Sinon.stub(connection, 'execute').resolves([]);

        const product = await productModel.getProductByID(100);
        expect(product).to.be.undefined;
      });
    });
    // ::DONE tetes da função getProducts
    describe('Teste da função getProducts', () => {
      it('Deve testar se o retorno é undefined', async () => {
        Sinon.stub(connection, 'execute').resolves([]);

        const product = await productModel.getProducts();
        expect(product).to.be.undefined;
      });
    });
    describe('Teste da função deleteProduct', () => {
      it('Deve retornar 0 quando o produto não encontrado', async () => {
        Sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);
        const result = await productModel.deleteProduct(100);
        expect(result).to.be.equal(0);
      });
    });
  });
});
