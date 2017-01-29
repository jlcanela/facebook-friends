'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const Promise = require('bluebird').Promise;
const should = chai.should();
const co = require('co');

process.env.NODE_ENV = 'test';

const createDb = require('../../src/lib/mongo.js');

describe('mongo test', function(){
  it('should access to collection', function(){
    return co(function *(){
      const millis = (new Date()).getTime();
      const db = yield createDb();
      const coll = db.collection(`test_insert_${millis}`);
      const r = yield coll.insert({a:2});
      const cn = yield coll.count();
      yield coll.drop();
      yield db.close();
      return cn;
    }).should.eventually.be.eql(1);
  });
})
