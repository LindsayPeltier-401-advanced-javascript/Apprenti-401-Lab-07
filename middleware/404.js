'use strict';
/**
 * Middleware for routes that don't exist
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
module.exports = (req, res, next) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('I think you might be lost');
  res.end();
};
