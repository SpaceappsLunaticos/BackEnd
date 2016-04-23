'use strict';

var controller = require('./places.controller');
var router = require('koa-router')();

router.get('/', controller.index);
module.exports = router.routes();