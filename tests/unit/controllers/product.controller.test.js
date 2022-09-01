const { expect } = require('chai');
const Sinon = require('sinon');

const { productController } = require('../../../controllers/product.controller');
const { productService } = require('../../../services/product.service');

const expectedProduct = {
  id: 1,
  name: 'Martelo de Thor'

};

// ::TODO teste da camada ccontrollers
describe('Testes da camada controllers', () => {
  // ::TODO testes bemsucedidos
  describe('Testes bemsucedidos', () => {
    afterEach(function () {
      Sinon.restore();
    });

    // ::DOING testes da função getProductByID
    describe('Teste da função getProductByID', () => {
      // ::DOING testa se status retornado é igual a 200
      it(`Deve retornar o status 200`, async () => {
        const request = { params: { id: 1 } };
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
        const resultExecute = [expectedProduct];
        Sinon.stub(productService, 'getProductByID').resolves(resultExecute);

        await productController.getProductByID(request, response);

        expect(response.status.calledWith(200)).to.be.true;
      });
      it(`Deve retornar o produto`, async () => {
        const request = { params: { id: 1 } };
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
        const resultExecute = [expectedProduct];

        await productController.getProductByID(request, response);

        expect(response.json.calledWith([expectedProduct])).to.be.true;
      });
    });
    // ::TODO tetes da função getProducts
  })
  // ::TODO testes malsucedidos
  describe('Testes malsucedidos', () => {
    // ::TODO testes da função getProductByID
    describe('Teste da função getProductByID', () => {
      // ::TODO o status deve ser 404
      it('Deve retonar status 404', async () => {
        const request = { params: { id: 100 } };
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
        
        Sinon.stub(productService, 'getProductByID').resolves(null);

        await productController.getProductByID(request, response);

        expect(response.status.calledWith(404)).to.be.true;
      });
      it('Deve retonar a mensagem "Product not found"', async () => {
        const request = { params: { id: 100 } };
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        await productController.getProductByID(request, response);

        expect(response.json.calledWith({ message: 'Product not found' })).to.be.true;
      });
    });
    // ::TODO tetes da função getProducts
  });
});
