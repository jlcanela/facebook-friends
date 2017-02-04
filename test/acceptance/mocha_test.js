'use strict'

const chai = require('chai')
const should = require('chai').should()
const co = require('co')
chai.use(require('dirty-chai'))

// Application Server
const serverUri = 'http://localhost:3000'

// Official selenium webdriver testing setup
const webdriver = require('selenium-webdriver')
const By = require('selenium-webdriver').By

describe('basic web test', function () {
  var driver
  before(function () {
        // Start of test use this
    driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build()
    console.log('Selenium Webdriver Chrome Started')
  })

  after(function () {
        // End of test use this.
    driver.quit()
  })

  it('should be on correct page', function () {
    this.timeout(10000)

    return co(function *() {
      driver.get(serverUri);
      (yield driver.getTitle()).should.be.equal('Hello title')
      const content = yield (yield driver.findElement(By.css('#title'))).getText()
      should.equal(content, 'Hello world !')
    })
  })
})
