'use strict';


var app = require('../../server');
var request = require('supertest').agent(app.listen());

var expect = require('chai').expect;
var should = require('should');


describe('GET /moon', function(){
  it('should respond with 200 type Array', function(done){
    request
    .get('/moon')
    .expect(200, function(err, res) {
    	expect(Array.isArray(res.body)).to.be.true;
    	done();
    });
  });
});