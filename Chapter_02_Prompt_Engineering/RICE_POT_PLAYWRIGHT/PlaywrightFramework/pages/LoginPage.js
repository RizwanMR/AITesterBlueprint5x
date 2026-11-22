export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator("//input[@type='email']");
    this.usernameInput = page.locator("//input[@id='username' or @name='username']");
    this.passwordInput = page.locator("//input[@type='password' and not(@aria-hidden='true')]");
    this.rememberMeCheckbox = page.locator(
      "//input[@type='checkbox' and (@name='rememberMe' or @id='rememberUn')]"
    );
    this.forgotPasswordLink = page.locator(
      "//a[contains(normalize-space(.), 'Forgot Your Password?')]"
    );
    this.usernameLoginLink = page.locator(
      "//a[contains(normalize-space(.), 'Log In with Username')]"
    );
    this.emailContinueButton = page.locator("//button[normalize-space(.)='Continue']");
    this.loginButton = page.locator(
      "//input[@id='Login' or @value='Log In'] | //button[normalize-space(.)='Log In']"
    );
    this.validationMessage = page.locator("//div[@id='error']");
  }

  async navigateToLoginPage() {
    await this.page.goto(
      process.env.SALESFORCE_BASE_URL ?? 'https://login.salesforce.com/?locale=in'
    );
  }

  async openUsernameLogin() {
    if (await this.usernameInput.isVisible()) {
      return;
    }

    await this.usernameLoginLink.click();
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  async enterUsername(username) {
    await this.openUsernameLogin();
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async setRememberMe(selected) {
    await this.openUsernameLogin();
    if (selected) {
      await this.rememberMeCheckbox.check();
    } else {
      await this.rememberMeCheckbox.uncheck();
    }
  }

  async login(username, password) {
    await this.openUsernameLogin();
    if (username !== '') {
      await this.usernameInput.fill(username);
    }
    await this.clickLogin();

    const response = await Promise.race([
      this.passwordInput.waitFor({ state: 'visible' }).then(() => 'password'),
      this.validationMessage.waitFor({ state: 'visible' }).then(() => 'validation')
    ]);

    if (response === 'password' && password !== '') {
      await this.enterPassword(password);
      await this.clickLogin();
    }
  }

  async getValidationMessage() {
    if (await this.validationMessage.isVisible()) {
      return (await this.validationMessage.innerText()).trim();
    }
    return '';
  }

  async isAuthenticated() {
    return !this.page.url().startsWith('https://login.salesforce.com/');
  }

  async isElementVisible(locator) {
    return locator.isVisible();
  }

  async isElementEnabled(locator) {
    return locator.isEnabled();
  }
}
