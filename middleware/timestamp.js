'use strict';

/**
 * @function
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */

function timeStamp(request, response, next) {
  request.requestTime = new Date().toString();
  next();
}

module.exports = timeStamp;
//Credit: Trevor

