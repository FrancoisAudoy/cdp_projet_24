'use strict'
const base_url = '/express';

const assert = require('assert');
const should = require('should');
const request = require('supertest');

describe("Server", () => {
    describe("Database", () => {
	it('get empty', (done) =>{
	    request('localhost')
		.get(base_url + '/projects?format=json&callback=?')
		.expect('Content-Type', /json/)
		.end((err, res) => {
		    if (err){
			console.log(err);
			return done(err);
			}
			res.body.should.be.instanceof(Array);
			assert(res.body == 0, res.body);
		    done();
		});
	});

	it('post - get not empty', (done) => {
	    let data = {name:"projet un"};
	    request('http://localhost')
		.post(base_url + '/projects?format=json&callback=?')
		.send(JSON.stringify(data))
		.expect(201)
		.end((err, res) => {
			if(err){
			    console.log('Error code : ' + err);
			    
			}
		});
	    
	     request('http://localhost')
		.get(base_url + '/projects?format=json&callback=?')
		.expect('Content-Type', /json/)
		.end((err, res) => {
		    if (err){
			return done(err);
		    }
		    res.body.should.be.instanceof(Array);
		    res.body.should.containEql(data);
		    done();
		});
	    
	});
    });
});
