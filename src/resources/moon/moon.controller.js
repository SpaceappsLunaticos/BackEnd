'use strict';

var SunCalc = require('suncalc');

exports.index = function*(next) {
	this.status = 200;
    this.body = [];
};

exports.moon = function*(next) {
    this.status = 200;
    this.body = yield SunCalc.getMoonPosition(new Date(), this.params.latitude, this.params.longitude);
};