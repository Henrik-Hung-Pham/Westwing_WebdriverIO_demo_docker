const { Given, When, Then } = require('@cucumber/cucumber');

const wishlistPage = require('../../pages/wishlist.page.js');
const wishlist = new wishlistPage();

When(/^I delete the product from my wishlist$/, () => {
    wishlist.deleteWishList();
});

When(/^My wishlist should be empty$/, () => {
    wishlist.deleteWishList();
});
