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

//Proof of Life Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Product Routes
app.get('/products', (req, res) => {
  res.send();
});

app.post('/products', (req, res) => {});

app.put('/products', (req, res) => {});

app.delete('/products', (req, res) => {});

//Category Routes
app.get('/categories', (req, res) => {});

app.post('/categories', (req, res) => {});

app.put('/categories', (req, res) => {});

app.delete('/categories', (req, res) => {});

//Error Handlers
app.use('*', notFoundHandler);
app.use(errorHandler);

//Port Listener
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening again, on port ${PORT}`));
  }
};
