'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../src/server');
let should = chai.should();

chai.use(chaiHttp);

describe('Server', () => {
  beforeEach((done) => {
    done();
  });
  describe('GET /', () => {
    it('it should GET home page', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          //  res.body.should.be.a('array');
          //res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
