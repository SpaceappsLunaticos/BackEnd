'use strict';

var controller = require('./places.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.get('/continents/:continent', controller.continents);
router.get('/know/', controller.know_what);
module.exports = router.routes();