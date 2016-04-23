'use strict';

// Get list of roots
exports.index = function*(next) {
	this.status = 403;
  	this.body = { 
  		name : 'Lunaticos', 
  		info : 'API Docs URL'
  	};
};