'use strict';

const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe(' web server', () => {
  it('should respond with a 500 error', () => {
    return mockRequest
      .get('/bad')
      .then(results => {
        expect(results.status).toBe(500);
      })
      .catch(console.error);
  });

  it('should respond with a 404 on invalid route', () => {
    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(console.error);
  });

  it('should respond properly on request to /products', () => {
    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });

  it('should respond properly on request to /categories', () => {
    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
});
//from demo code
