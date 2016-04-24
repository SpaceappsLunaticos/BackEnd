'use strict';

var controller = require('./places.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.get('/continents/:continent', controller.continents);
module.exports = router.routes();