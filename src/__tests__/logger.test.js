'use strict';
const { describe, it } = require('eslint/lib/rule-tester/rule-tester');
// when testing logger, how can I test a console happened and logged correctly? How do I spy on the console?

const logger = require('../middleware/logger');



describe('logger middleware', () => {
  it('works as expected', async () => {
    
    //  mock all the params needed for the stamper to work properly

    let req = {};
    let res = {};
    let next = jest.fn();

    // call logger
    logger (req, res, next);
    console.log(req.time);
    expect(req.time).toBeTruthy();
    expect(next).toHaveBeenCalled();
    
  });
});