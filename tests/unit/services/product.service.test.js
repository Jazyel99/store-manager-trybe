const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const productModel = require('../../../models/Product');
const { productService } = require('../../../services/product.service');

const expectedProduct = {
  id: 1,
  name: 'Martelo de Thor'

};

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
  })
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
  });
});
