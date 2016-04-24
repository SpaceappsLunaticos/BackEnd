'use strict';

var controller = require('./moon.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.get('/:latitude/:longitude', controller.moon);
module.exports = router.routes();