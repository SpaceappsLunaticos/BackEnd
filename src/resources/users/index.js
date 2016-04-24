'use strict';

var controller = require('./users.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.get('/user/:username', controller.username);
router.post('/user/', controller.register);
module.exports = router.routes();