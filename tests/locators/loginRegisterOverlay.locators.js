class loginRegisterLocators {
  constructor() {
    this.loginRegisterSwitch = '//*[@data-testid="login_reg_switch_btn"]';
    this.emailField = '//*[@data-testid="long-register-email-field"]';
    this.passwordField = '//*[@data-testid="long-register-password-field"]';
    this.loginButton = '//*[@data-testid="login_reg_submit_btn"]';
  }
}

module.exports = loginRegisterLocators;
