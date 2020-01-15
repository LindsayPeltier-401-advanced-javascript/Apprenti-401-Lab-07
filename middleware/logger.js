'use strict';

/**
 * My Logger middleware, takes 3 arguments
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

module.exports = (req, res, next) => {
  console.log('__REQUEST__', req.method, req.path);
  next();
};

//Not ideal logging method; requires manual update for more sophisticated servers
