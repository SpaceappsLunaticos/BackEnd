'use strict';

exports.index = function*(next) {
	this.status = 200;
    this.body = [];
};

exports.username = function*(next) {
    this.status = 200;
    var db = yield require('../../config/mongo')();
    this.body = yield db.collection('user').findOne({username: this.params.username});
};

exports.register = function*(next) {
    this.status = 200;
    var db = yield require('../../config/mongo')();
    var query = this.request.body;
    if (query || query.age) {
        query.age = parseInt(query.age);
        console.log(query);
        this.body = yield db.collection('user').insert(query);
    }
    else {
        console.log('out');
        this.body = [];
    }
};