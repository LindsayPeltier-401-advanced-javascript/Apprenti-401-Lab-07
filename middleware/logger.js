'use strict';

/**
 * My Logger middleware, takes 3 arguments
 * @param  {} request
 * @param  {} response
 * @param  {} next
 */

module.exports = (request, response, next) => {
  console.log(request.method, request.path, request.requestTime);
  next();
};

//Not ideal logging method; requires manual update for more sophisticated servers
