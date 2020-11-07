var express = require('express');
var routes = express.Router();

routes.use('/image', require('./api/image'));

module.exports = routes;