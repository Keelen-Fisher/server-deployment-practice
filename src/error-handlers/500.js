'use strict';

module.exports = (error, req, res, next) => {
  console.log('error', error);
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: typeof(error) === 'string' ? error: `SERVER ERROR: ${error.message}`,
  });
};