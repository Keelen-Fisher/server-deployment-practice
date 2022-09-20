'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
const supertest = require('supertest');
const {app} = require('../app');
const request = supertest(app);

describe('API Server', () => {

  it('handles invalid requests', async () => {
  
    const response = await request.get('/charlie');

    expect(response.status).toEqual(404);
  });

  it('handles errors ', async () => {
    const response = await request.get('/bad');

    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('This is a bad route!');
  });

  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hey everyone!');
  });

  it('handles\'/logger\' route without query param correctly', async () => {
    const response = await request.get('/logger');

    expect(response.text).toEqual('What a great animal!');
  });

  it('handles\'/logger\' route with query param correctly', async () => {
    const response = await request.get('/logger&loggerName=Lucky');

    expect(response.text).toEqual('Lucky is awesome');
  });
});