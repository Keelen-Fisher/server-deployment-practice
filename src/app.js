'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/stampler');

const PORT = process.env.PORT || 3002;

console.log(`It's alive!!`);

// Design Principle : singleton
const app = express();

app.use(logger);

// middleware/express
app.get('/', (req, res, next) => {
  res.status(200).send('Hey everyone!');
});

app.get('/bad', (req, res, next) => {
  next('This is a bad route!');
});

app.get('/logger', (req, res, next) => {
  console.log(req);
  let { loggerName }= req.query;
  console.log('loggerName: ', loggerName);

  try{
    
    if (loggerName){
      res.status(200).send(`${loggerName} you're awesome!`);
    }
    else
    {
      res.status(200).send('What a great animal companion!');
    }

  }
  catch(err){
    next(err.message);
  }


  // res.status(200).send('this works');
});

app.use('*', notFound);

// app.use(errorHandlerOne, errorHandlerTwo)

app.use(errorHandler);

// app.listen: used to bind and listen the connections on the specified host and port
function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };

// @param {string} name
// @returns a greeting message

// function greet(name){
//   return `Hello ${name}!`;
// }

// greet('Lucky');