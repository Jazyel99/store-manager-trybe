const productsSchema = require('../schemas/productShema');

const isProductValid = (product) => {
  const isValid = productsSchema.validate(product);

  return isValid;
};

const productMiddleware = (req, res, next) => {
  const product = { ...req.body };
  const { error } = isProductValid(product);

  if (error) {
    const [code, message] = error.message.split('|');

    return res.status(Number(code)).json({ message });
  }

  return next();
};

module.exports = { productMiddleware };
