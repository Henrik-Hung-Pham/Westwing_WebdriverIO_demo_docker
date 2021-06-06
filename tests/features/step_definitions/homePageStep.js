const { Given, When, Then } = require('@cucumber/cucumber');

const homePage = require('../../pages/home.page.js');
const home = new homePage();


Given(/^I am on the WestwingNow homepage$/, () => {
    home.openWestwingNowHomepage();
});

When(/^I search for (.*)$/, (searchKeyword) => {
    home.searchKeyword(searchKeyword);
});
