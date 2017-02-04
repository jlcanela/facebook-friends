'use strict'

const chai = require('chai')
chai.use(require('chai-as-promised'))
const Promise = require('bluebird').Promise

describe('template test', function () {
  it('should be ok', function () {
    return Promise.resolve(true).should.be.fulfilled
  })
})
