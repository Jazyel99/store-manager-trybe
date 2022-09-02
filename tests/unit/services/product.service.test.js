const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const productModel = require('../../../models/Product');
const { productService } = require('../../../services/product.service');

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

// ::TODO teste da camada services
describe('Testes da camada services', () => {
  // ::TODO testes bemsucedidos
  describe('Testes bemsucedidos', () => {
    afterEach(function () {
      Sinon.restore();
    });
    // ::DONE testes da função getProductByID
    describe('Teste da função getProductByID', () => {
      // ::DONE testar se a função retorna um objeto
      it(`Deve retorna uma objeto`, async () => {
        const resultExecute = [expectedProduct];
        Sinon.stub(productModel, 'getProductByID').resolves([resultExecute]);

        const product = await productService.getProductByID(1);
        expect(typeof product).to.have.deep.equal('object');
      });
      // ::DONE testar se o objeto vem com as chaves id e name
      it('Deve testar se o objeto tem as chaves ID e NAME', async () => {
        const resultExecute = [expectedProduct];
        Sinon.stub(productModel, 'getProductByID').resolves([resultExecute]);

        const [[product]] = await productService.getProductByID(1);
        expect(product).to.have.all.keys('id', 'name');
      });
      // ::DONE testar se o objeto retornado é igual ao esperado
      it('Deve comparar o objeto retornado com o objeto esperado', async () => {
        const resultExecute = [expectedProduct];
        Sinon.stub(productModel, 'getProductByID').resolves([resultExecute]);

        const [[product]] = await productService.getProductByID(1);
        expect(product).to.deep.equal(expectedProduct);
      });
    });
    // ::TODO tetes da função getProducts
    describe('Teste da função getProducts', () => {
      // ::DONE testa se o retorno é um array não vazio
      it('Deve retorna um array não vázio', async () => {
        Sinon.stub(productModel, 'getProducts').resolves(expectedProducts);
        const result = await productService.getProducts();
        expect(result).to.be.an('array').that.not.empty;
      });
      // ::DONE testa se é igualde dos elementos no array
      it('Deve retornar o array com os produtos', async () => {
        Sinon.stub(productModel, 'getProducts').resolves(expectedProducts);
        const result = await productService.getProducts();
        expect(result).to.be.equal(expectedProducts);
      });
    });
    // ::TODO teste da função deleteProduct
    describe('Teste da função deleteProduct', () => {
      it('Deve retornar o valor 204', async () => {
        Sinon.stub(productModel, 'deleteProduct').resolves(1);
        const result = await productService.deleteProduct(1);
        expect(result).to.be.equal(204);
      });
    });
  });
  // ::TODO testes malsucedidos
  describe('Testes malsucedidos', () => {
    // ::DONE testes da função getProductByID
    describe('Teste da função getProductByID', () => {
      // ::DONE testa se o retorno é null
      it('Deve testar se o retorno null', async () => {
        Sinon.stub(productModel, 'getProductByID').resolves([]);

        const result = await productService.getProductByID(100);

        expect(result).to.be.equal(null);
      });
    });
    // ::TODO tetes da função getProducts
    describe('Teste da função getProducts', () => {
      // ::DONE testa se o retorno é null
      it('Deve testar se o retorno null', async () => {
        Sinon.stub(productModel, 'getProducts').resolves([]);

        const result = await productService.getProducts();

        expect(result).to.be.equal(null);
      });
    });
    describe('Teste da função deleteProduct', () => {
      it('Deve retornar null caso o produto não exista', async () => {
        Sinon.stub(productModel, 'deleteProduct').resolves(0);
        const result = await productService.deleteProduct(1);
        expect(result).to.be.equal(null);
      });
    })
  });
});
