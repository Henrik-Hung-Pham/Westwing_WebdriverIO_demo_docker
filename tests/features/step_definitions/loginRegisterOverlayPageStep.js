const { Given, When, Then } = require('@cucumber/cucumber');

const loginRegisterOverlayPage = require('../../pages/loginRegisterOverlay.page.js');
const loginRegisterOverlay = new loginRegisterOverlayPage();

When(/^I switch to login form of the overlay$/, () => {
    loginRegisterOverlay.switchToLoginForm();
});

When(/^I log in with (.*)$/, (user) => {
    loginRegisterOverlay.login(user);
});
