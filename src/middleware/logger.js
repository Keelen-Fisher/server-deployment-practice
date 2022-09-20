'use strict';

const logger = (req, res, next) => {
  // arbituary use, will not be in the lab  
  let time = Date.now();
  console.log('time', time);
  req.time = time;
  next();

};

module.exports = logger;