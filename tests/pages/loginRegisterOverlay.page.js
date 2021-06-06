const NativePage = require("./native.page.js");
const westWingNowLoginRegisterOverlayData = require('../files/testData/loginRegisterOverlay.data.js');

class loginRegisterOverlay extends NativePage {
  get westWingNowLoginRegisterOverLocatorsPageElement() {
    return this.getPage("loginRegisterOverlay.locators");
  }

  switchToLoginForm() {
    const loginRegisterSwitch = $(
      this.westWingNowLoginRegisterOverLocatorsPageElement.loginRegisterSwitch
    );
    loginRegisterSwitch.click();
  }

  login(user){
    const emailField = $(this.westWingNowLoginRegisterOverLocatorsPageElement.emailField)
    emailField.click()
    emailField.setValue(westWingNowLoginRegisterOverlayData[user]['email'])

    const passwordField = $(this.westWingNowLoginRegisterOverLocatorsPageElement.passwordField)
    passwordField.click()
    passwordField.setValue(westWingNowLoginRegisterOverlayData[user]['password'])

    const loginButton = $(this.westWingNowLoginRegisterOverLocatorsPageElement.loginButton)
    loginButton.click()

    browser.keys("Enter")
  }
}

module.exports = loginRegisterOverlay;
