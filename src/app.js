'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3002;

console.log(`It's alive!!`);

// Design Principle : singleton
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hey everyone!');
});

app.get('/bad', (req, res, next) => {
  next('This is a bad route!');
});

app.use('*', notFound);

// app.use(errorHandlerOne, errorHandlerTwo)

app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

module.exports = { app, start };

// @param {string} name
// @returns a greeting message

// function greet(name){
//   return `Hello ${name}!`;
// }

// greet('Lucky');