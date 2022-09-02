const { expect } = require('chai');
const Sinon = require('sinon');
const { saleController } = require('../../../controllers/sale.controller');

const { saleService } = require('../../../services/sale.service');


const expectedSales = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
]

const expectedSaleId1 = [
  {
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
]

// ::TODO teste da camada ccontrollers
describe('Testes da camada controllers [Sales]', () => {
  afterEach(function () {
    Sinon.restore();
  });
  // ::TODO testes bemsucedidos
  describe('Testes bemsucedidos', () => {

    // ::DONE testes da função getSaleById
    describe('Teste da função getSaleById', () => {
      // ::TODO testa se status retornado é igual a 200
      it(`Deve retornar o status 200`, async () => {
        const request = { params: { id: 1 } };
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
        const resultExecute = [expectedSaleId1];
        Sinon.stub(saleService, 'getSaleById').resolves(resultExecute);

        await saleController.getSaleById(request, response);

        expect(response.status.calledWith(200)).to.be.true;
      });
    });
    // ::DONE tetes da função getSales
    describe('Teste da função getSales', () => {
      // ::DONE testa se o retorno é 200
      it('Deve retornar status 200', async () => {
        const request = {};
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
        Sinon.stub(saleService, 'getSales').resolves(expectedSales);

        await saleController.getSales(request, response);

        expect(response.status.calledWith(200)).to.be.true;
      });
    })
  })
  // ::TODO testes malsucedidos
  describe('Testes malsucedidos', () => {
    // ::DONE testes da função getSaleById
    describe('Teste da função getSaleById', () => {
      // ::DONE o status deve ser 404
      it('Deve retonar status 404', async () => {
        const request = { params: { id: 100 } };
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        Sinon.stub(saleService, 'getSaleById').resolves(null);

        await saleController.getSaleById(request, response);

        expect(response.status.calledWith(404)).to.be.true;
      });
      it('Deve retonar a mensagem "Sale not found"', async () => {
        const request = { params: { id: 100 } };
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        Sinon.stub(saleService, 'getSaleById').resolves(null);
        await saleController.getSaleById(request, response);

        expect(response.json.calledWith({ message: 'Sale not found' })).to.be.true;
      });
    });
    // ::TODO tetes da função getSales
    describe('Teste da função getSales', () => {
      it('Deve retonar status 404', async () => {
        const request = {};
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        Sinon.stub(saleService, 'getSales').resolves(null);

        await saleController.getSales(request, response);

        expect(response.status.calledWith(404)).to.be.true;
      });

      it('Deve retonar a mensagem "Sale not found"', async () => {
        const request = {};
        const response = {};

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        Sinon.stub(saleService, 'getSales').resolves(null);

        await saleController.getSales(request, response);

        expect(response.json.calledWith({ message: 'Sale not found' })).to.be.true;
      });
    });
  });
});
