'use strict';

const loggerMiddleware = require('../middleware/logger.js');

describe('logger middleware', () => {
  let consoleSpy;
  let request = {};
  let response = {};
  let next = jest.fn(); //spy on the next method;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    loggerMiddleware(request, response, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moves to the next middleware', () => {
    loggerMiddleware(request, response, next);
    expect(next).toHaveBeenCalled();
  });
});
