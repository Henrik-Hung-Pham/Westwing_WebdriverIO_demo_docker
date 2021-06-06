const { Given, When, Then } = require('@cucumber/cucumber');

const listingPage = require('../../pages/listing.page.js');
const listing = new listingPage();

Then(/^I should see product listing page with a list of products$/, () => {
    listing.validateResultsFoundMessage();
});

When(/^I click on wishlist icon of the first found product$/, () => {
    listing.clickOnFirstWishListIcon();
});

Then(/^I exit the overlay popup if there is any$/, () => {
    listing.exitTheOverlayPopup();
});

Then(/^I should see the login-registration overlay$/, () => {
    listing.validateTheLoginRegisterOverlay();
});

Then(/^The product should be added to the wishlist$/, () => {
    listing.productAddedToWishList();
});
