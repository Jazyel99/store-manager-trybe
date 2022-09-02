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

app.use((err, _req, res, _next) => {
  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }

  res.status(500).json({ message: 'Server error!' });
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;