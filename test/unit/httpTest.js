'use strict'

let chai = require('chai')
let should = require('chai').should()
let chaiHttp = require('chai-http')
let server = require('../../src/server')

chai.use(chaiHttp)

describe('Server', () => {
  before((done) => {
    // TODO: cleanup connection directly in server ...
    const mongoose = require('mongoose')
    mongoose.schemas = {}
    mongoose.models = {}
    mongoose.connections.forEach((cn) => cn.close())
    done()
  })
  
  beforeEach((done) => {
    done()
  })

  describe('GET /', () => {
    it('it should GET home page', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          should.not.exist(err)
          res.should.have.status(200)
          done()
        })
    })
  })
})
