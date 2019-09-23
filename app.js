const express = require('express');
const app = express();
const morgan = require('morgan');

const productsRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

// Routes which should handle requests
app.use('/products', productsRoutes);
app.use('/orders', orderRoutes);

module.exports = app;