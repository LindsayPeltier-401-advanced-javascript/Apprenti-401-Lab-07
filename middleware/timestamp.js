'use strict';

/**
 * @function
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

function timeStamp(req, res, next) {
  req.requestTime = new Date().toString();
  next();
}

module.exports = timeStamp;
//Credit: Trevor

//app.use(function(req, res, next) {
//console.log('Time:', Date.now());
//next();
//});
