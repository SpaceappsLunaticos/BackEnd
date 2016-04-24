'use strict';

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

module.exports = function () {
    return function (done) {
        MongoClient.connect('mongodb://localhost:27017/luna', function (err, db) {
            if (err) {
                done(err);
            }
            done(err, db);
        });
    }
};

