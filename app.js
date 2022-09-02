const express = require('express');
const productRouter = require('./routes/productRouter');
const saleRouter = require('./routes/saleRouter');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productRouter);
app.use('/sales', saleRouter);

app.use((err, req, res, _next) => {
  const { code, message } = err;
  res.status(code).json({ message });
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;