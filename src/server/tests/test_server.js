'use strict'
const base_url = '/express';

const assert = require('assert');
const server = require('../server');
const should = require('should');
const request = require('supertest');

describe("Server", () => {
    describe("Database", () => {
	it('get empty', (done) =>{
	    request('localhost:8080')
		.get('/projects')
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
	    console.log(JSON.stringify(data));
	    request('localhost:8080')
		.post('/projects')
		.send(JSON.stringify(data))
		.expect(201)
		.end((err, res) => {
			if(err){
				console.log('Error code : ' + err);
				assert(false);
			}
		});
	    
	     request('localhost:8080')
		.get('/projects')
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
