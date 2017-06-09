/* eslint func-names: "off"*/
/* eslint no-unused-vars: "off"*/
// const config = require('../../../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
  // '@disabled': true,
  Search(browser) {
    browser
      .url('http://localhost:8080/login')
      .waitForElementVisible('input[type=email]', 10000)
      .setValue('input[type=email]', 'anthony@andela.com')
      .setValue('input[type=password]', 'anthony')
      .click('.btn-login')
      .pause(1000)
      .assert.urlEquals('http://localhost:8080/')
      .assert.containsText('h4', 'DASHBOARD')
      .waitForElementVisible('ul[id="nav-mobile"]', 10000)
      .waitForElementVisible('nav ul li[id="searchClick"]', 10000)
      .click('li[id="searchClick"]')
      .moveToElement('li[id="searchClick"]', 0, 0)
      .click('li[id="searchClick"]')
      .pause(2000)
      .waitForElementVisible('div[id=modal2]', 5000)
      .waitForElementVisible('input[id="search"', 5000)
      .setValue('input[id="search"]', 'document')
      .click('.btn-search')
      .pause(2000)
      .assert.elementPresent('h6[id="searchResult"]')
      .end();
  },
};
