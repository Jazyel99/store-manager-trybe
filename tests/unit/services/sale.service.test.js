const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const saleModel = require('../../../models/Sale');
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

// ::TODO teste da camada services
describe('Testes da camada services [Sales]', () => {
  // ::TODO testes bemsucedidos
  describe('Testes bemsucedidos', () => {
    afterEach(function () {
      Sinon.restore();
    });
    // ::DONE testes da função getSales
    describe('Teste da função getSales', () => {
      // ::DOING testar se a função retorna uma lista
      it(`Deve retorna uma array`, async () => {
        const resultExecute = [expectedSales];
        Sinon.stub(saleModel, 'getSales').resolves([resultExecute]);

        const result = await saleService.getSales();
        expect(result).to.be.an('array');
      });
    });
    // ::TODO tetes da função getSaleById
    describe('Teste da função getSaleById', () => {
      // ::DONE testa se o retorno é um array não vazio
      it('Deve retorna um array não vázio', async () => {
        Sinon.stub(saleModel, 'getSaleById').resolves(expectedSaleId1);
        const result = await saleService.getSaleById(1);
        expect(result).to.be.an('array').that.not.empty;
      });
      it('Deve retornar o array com as vendas', async () => {
        Sinon.stub(saleModel, 'getSaleById').resolves(expectedSaleId1);
        const result = await saleService.getSaleById(1);
        expect(result).to.be.equal(expectedSaleId1);
      });
    })
  })
  // ::TODO testes malsucedidos
  describe('Testes malsucedidos', () => {
    // ::DONE testes da função getProductByID
    describe('Teste da função getSales', () => {
      // ::DONE testa se o retorno é null
      it('Deve testar se o retorno null', async () => {
        Sinon.stub(saleModel, 'getSales').resolves([]);

        const result = await saleService.getSales();

        expect(result).to.be.equal(null);
      });
    });
    // ::TODO tetes da função getSaleById
    describe('Teste da função getSaleById', () => {
      // ::DONE testa se o retorno é null
      it('Deve testar se o retorno null', async () => {
        Sinon.stub(saleModel, 'getSaleById').resolves([]);

        const result = await saleService.getSaleById(100);

        expect(result).to.be.equal(null);
      });
    });
  });
});
