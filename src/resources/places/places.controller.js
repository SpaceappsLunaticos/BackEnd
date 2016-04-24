'use strict';

exports.index = function*(next) {
	this.status = 200;
    this.body = [];
};

exports.continents = function*(next) {
    this.status = 200;
    var db = yield require('../../config/mongo')();
    this.body = yield db.collection('continents').find({continent: this.params.continent}).toArray();
};

exports.know_what = function*(next) {
    this.status = 200;
    var db = yield require('../../config/mongo')();
    this.body = yield db.collection('know').find({}).toArray();
};