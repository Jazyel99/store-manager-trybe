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

// ::TODO teste da camda models
describe('Testes da camada models [Sales] ', () => {
  // ::TODO testes bemsucedidos
  describe('Testes bemsucedidos', () => {
    afterEach(() => {
      Sinon.restore();
    });
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
  });
});
