const { Given, When, Then } = require('@cucumber/cucumber');

const headerPage = require('../../pages/header.page.js');
const header = new headerPage();

When(/^I go to the wishlist page$/, () => {
    header.goToWishList();
});
