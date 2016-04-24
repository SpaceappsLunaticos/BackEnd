/**
 * Main application routes
 */

'use strict';

var mount = require('koa-mount');

module.exports = function(app) {

	// YEOMAN INJECT ROUTES BELOW
	app.use(mount('/moon', require('../resources/moon')));
	app.use(mount('/places', require('../resources/places')));
	app.use(mount('/users', require('../resources/users')));
    app.use(mount('/', require('../resources/root')));
};
