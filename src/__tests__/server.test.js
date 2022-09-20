'use strict';

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
})