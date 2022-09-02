const { expect } = require('chai');
const Sinon = require('sinon');

const { productController } = require('../../../controllers/product.controller');
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

// ::TODO teste da camada ccontrollers
describe('Testes da camada controllers', () => {
  // ::TODO testes bemsucedidos
  describe('Testes bemsucedidos', () => {
    afterEach(function () {
      Sinon.restore();
    });

    // ::DONE testes da função getProductByID
    describe('Teste da função getProductByID', () => {
      // ::DONE testa se status retornado é igual a 200
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
        Sinon.stub(productService, 'getProductByID').resolves(resultExecute);

        await productController.getProductByID(request, response);

        expect(response.json.calledWith(expectedProduct)).to.be.true;
      });
    });
    // ::DONE tetes da função getProducts
    describe('Teste da função getProducts', () => {
      // ::DONE testa se o retorno é 200
      it('Deve retornar status 200', async () => {
        const request = {};
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
        Sinon.stub(productService, 'getProducts').resolves(expectedProducts);

        await productController.getProducts(request, response);

        expect(response.status.calledWith(200)).to.be.true;
      });
      it('Deve restonar uma lista de produtos', async () => {
        const request = {};
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
        Sinon.stub(productService, 'getProducts').resolves(expectedProducts);

        await productController.getProducts(request, response);

        expect(response.json.calledWith(expectedProducts)).to.be.true;

      });
    });
    describe('Teste da função deleteProduct', () => {
      it('Deve retornar o status 204 caso o produto seja deletado', async () => {
        const request = { params: { id: 1 } };
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
        response.send = Sinon.stub().returns();

        Sinon.stub(productService, 'deleteProduct').resolves(204);

        await productController.deleteProduct(request, response);

        expect(response.status.calledWith(204)).to.be.true;
      });
    });
  })
  // ::TODO testes malsucedidos
  describe('Testes malsucedidos', () => {
    // ::DONE testes da função getProductByID
    describe('Teste da função getProductByID', () => {
      // ::DONE o status deve ser 404
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
    describe('Teste da função getProducts', () => {
      it('Deve retonar status 404', async () => {
        const request = {};
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        Sinon.stub(productService, 'getProducts').resolves(null);

        await productController.getProducts(request, response);

        expect(response.status.calledWith(404)).to.be.true;
      });

      it('Deve retonar a mensagem "Product not found"', async () => {
        const request = {};
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        await productController.getProducts(request, response);

        expect(response.json.calledWith({ message: 'Product not found' })).to.be.true;
      });
    });
    describe('Teste da função deleteProduct', () => {
      it('Deve retornar o status 404 caso o produto seja encontrado', async () => {
        const request = { params: { id: 100 } };
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
        Sinon.stub(productService, 'deleteProduct').resolves(null);

        await productController.deleteProduct(request, response);

        expect(response.status.calledWith(404)).to.be.true;
      });
    });
  });
});
