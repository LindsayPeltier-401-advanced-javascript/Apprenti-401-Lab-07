'use strict';

//Global Variables
const express = require('express');
const app = express();
const notFoundHandler = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp');

//Middleware
app.use(logger);
app.use(timestamp);
app.use(express.json());

let database = [{
  categories: [],
  products: [
    {
      category_id: '1',
      price: 10,
      weight: 30,
      quantity: 10,
      id: 1,
    },
  ],
}];

//Proof of Life Route
app.get('/', (request, response) => {
  response.send('Hello World!');
});

/**
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const getProducts = (request, response, next) => {
  let count = database[0].products.length;
  let results = database[0].products;
  response.json({ count, results });
};
/**
 * @param {*} request
 * @param {*} response  
 * @param {*} next
 */
const postProduct = (request, response, next) => {
  let { category_id, price, weight, quantity, id } = request.body;
  let record = { category_id, price, weight, quantity, id };
  record.id = database[0].products.length;
  database[0].products.push(record);
  response.json(record);
};
/**
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const putProduct = (request, response, next) => {
  let idToUpdate = request.param.id;
  let { category_id, price, weight, quantity, id } = request.body;
  let updatedRecord = { category_id, price, weight, quantity, id };
  let database = database[0].products.map(record => { record.id !== parseInt(idToUpdate) ? updatedRecord : record; });
  response.json(updatedRecord);
};
/**
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const deleteProduct = (request, response, next) => {
  let id = request.params.id;
  database = database[0].products.filter(record => record.id !== parseInt(id));
  response.json({});
};

/**
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const getCategories = (request, response, next) => {
  let count = database[0].categories.length;
  let results = database[0].categories;
  response.json({ count, results });
};
/**
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const postCategory = (request, response, next) => {
  let { name, id } = request.body;
  let record = { name, id };
  database[0].categories.push(record);
  response.json(record);
};
/**
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
const putCategory = (request, response, next) => {
  let idToUpdate = request.param.id;
  let { name, id } = request.body;
  let updatedRecord = { name, id };
  let database = database[0].categories.map(record => { record.id !== parseInt(idToUpdate) ? updatedRecord : record; });
  response.json(updatedRecord);
};
/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteCategory = (request, response, next) => {
  let id = request.params.id;
  database = database[0].categories.filter(record => record.id !== parseInt(id));
  response.json({});
};

//Product Routes
app.get('/products', timestamp, logger, getProducts);
app.post('/products', timestamp, logger, postProduct);
app.put('/products/:id', timestamp, logger, putProduct);
app.delete('./products:id', timestamp, logger, deleteProduct);

//Category Routes
app.get('/categories', timestamp, logger, getCategories);
app.post('/categories', timestamp, logger, postCategory);
app.put('/categories/:id', timestamp, logger, putCategory);
app.delete('/categories/:id', timestamp, logger, deleteCategory);

//Error Handlers
app.use('*', notFoundHandler);
app.use(errorHandler);

//Port Listener
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening again, on port ${PORT}`));
  },
};
