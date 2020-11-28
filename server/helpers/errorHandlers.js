const { NotFound } = require('http-errors');

const notFoundError = (req, res, next) => next(NotFound());

const errorHandler = (err, req, res, next) =>
  res.status(err.statusCode || 500).send({ error: err.message || err });


module.exports = {
  errorHandler,
  notFoundError,
};