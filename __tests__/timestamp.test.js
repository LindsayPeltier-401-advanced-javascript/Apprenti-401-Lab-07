'use strict';

const logger = require('../middleware/logger.js');

describe('logger middleware', () => {
  let consoleSpy;
  let request = {};
  let response = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log output', () => {
    logger(request, response, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moves to next', () => {
    logger(request, response, next);
    expect(next).toHaveBeenCalled();
  });
});