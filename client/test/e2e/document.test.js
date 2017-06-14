/* eslint func-names: "off"*/
/* eslint no-unused-vars: "off"*/
// import faker from 'faker';
const faker = require('faker');

// const config = require('../../../nightwatch.json');

module.exports = {
  // '@disabled': true,
  'My Documents Page': function (browser) {
    browser
      .url('http://localhost:8080/login')
      .waitForElementVisible('input[type=email]', 5000)
      .setValue('input[type=email]', 'anthony@andela.com')
      .setValue('input[type=password]', 'anthony')
      .click('.btn-login')
      .waitForElementVisible('div[id="public"]', 5000)
      .assert.urlEquals('http://localhost:8080/')
      .assert.containsText('h4', 'DASHBOARD')
      .assert.containsText('nav', 'My Documents')
      .waitForElementVisible('li[id="docClick"]', 5000)
      .click('li[id="docClick"]')
      .moveToElement('li[id="docClick"]', 0, 0)
      .mouseButtonClick(0)
      .waitForElementVisible('a[id="addBtnDiv"]', 10000)
      .assert.urlEquals('http://localhost:8080/document')
      .assert.containsText('h4', 'MY DOCUMENTS')
      .assert.elementPresent('a[id="addBtnDiv"]')
      .moveToElement('a[id="addBtnDiv"]', 0, 0)
      .click('a[id="addBtnDiv"]')
      .pause(2000)
      .waitForElementVisible('input[id=title]', 5000)
      .moveToElement('input[id=title]', 0, 0)
      .waitForElementVisible('.fr-element', 5000)
      .waitForElementVisible('select[id="mySelectBox"]', 5000)
      .setValue('input[id=title]', faker.company.catchPhrase())
      .setValue('.fr-element', faker.lorem.paragraph())
      .setValue('select[id="mySelectBox"]', 'public')
      .click('input[id="btnSave"]')
      .pause(2000)
      .waitForElementVisible('div.card:first-of-type', 5000)
      .waitForElementVisible('div.card:nth-of-type(2)', 5000)
      .waitForElementVisible('div.card:last-of-type', 5000)
      .assert.containsText('div.card:last-of-type',
      'Title: Hello Document Ngene - Modified')
      .end();
  }
};
