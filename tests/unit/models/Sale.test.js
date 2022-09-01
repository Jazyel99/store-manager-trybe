const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const connection = require('../../../models/config/connection');
const saleModel = require('../../../models/Sale');

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


// ::TODO teste da camda models
describe('Testes da camada models [Sales] ', () => {
  afterEach(() => {
    Sinon.restore();
  });
  // ::TODO testes bemsucedidos
  describe('Testes bemsucedidos', () => {
    // ::DONE testes da função getSales
    describe('Teste da função getSales', () => {
      // ::DONE testar se a função retorna um array não vázio
      it(`Deve retorna uma array não vázio`, async () => {
        Sinon.stub(connection, 'execute').resolves([[expectedSales]]);

        const result = await saleModel.getSales();
        expect(result).to.be.an('array').that.not.empty;
      });
      // ::DONE testar se o objeto retornado é igual ao esperado
      it('Deve retonar uma lista com as vendas', async () => {
        Sinon.stub(connection, 'execute').resolves([[expectedSales]]);

        const [result] = await saleModel.getSales();
        expect(result).to.equal(expectedSales);
      });
    });
    describe('Teste da função getSaleById', () => {
      it('Deve retorna uma array não vázio', async () => {
        Sinon.stub(connection, 'execute').resolves([[expectedSaleId1]]);

        const [result] = await saleModel.getSaleById(1);
        expect(result).to.be.an('array').that.not.empty;
      });
      it('O objeto deve conter as chaves; data, productId e quantity', async () => {
        Sinon.stub(connection, 'execute').resolves([[expectedSaleId1]]);

        const [result] = await saleModel.getSaleById(1);
        expect(result[0]).have.all.keys('date', 'productId', 'quantity');
      })
    });
  })
  // ::TODO testes malsucedidos
  describe('Testes malsucedidos', () => {
    // ::DONE testes da função getSales
    describe('Teste da função getSales', () => {
      // ::DONE testa se o retorno array vázio
      it('Deve testar se o retorno é uma array vázio', async () => {
        const resultExecute = [];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);
        const result = await saleModel.getSales();
        expect(result).to.be.empty;
      });
    });
    describe('Teste da função getSaleById', () => {
      it('Deve retornar um array vazio caso o id da venda passado não exista', async () => {
        Sinon.stub(connection, 'execute').resolves([[]]);

        const result = await saleModel.getSaleById(100);
        expect(result).to.be.empty;
      });
    })
  });
});
