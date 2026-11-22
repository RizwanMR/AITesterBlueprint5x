import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { invalidLoginScenarios } from '../test-data/loginTestData.js';

test.describe('Salesforce login', () => {
  test.use({
    viewport: { width: 1440, height: 1000 }
  });

  let preflightPage;

  test.beforeAll(async ({ browser, baseURL }) => {
    preflightPage = await browser.newPage();
    await preflightPage.goto(baseURL);
    await expect(preflightPage).toHaveURL(/https:\/\/login\.salesforce\.com\//);
  });

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus && !page.isClosed()) {
      await testInfo.attach('failure-screenshot', {
        body: await page.screenshot({
          fullPage: true,
          mask: [
            page.locator("//input[@type='email']"),
            page.locator("//input[@id='username' or @name='username']"),
            page.locator("//input[@type='password']")
          ]
        }),
        contentType: 'image/png'
      });
      await testInfo.attach('page-url', {
        body: page.url(),
        contentType: 'text/plain'
      });
    }
  });

  test.afterAll(async () => {
    if (preflightPage && !preflightPage.isClosed()) {
      await preflightPage.close();
    }
  });

  test('login page loads and offers username login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step('verify the username-login option is visible', async () => {
      await expect(loginPage.usernameLoginLink).toBeVisible();
    });
    await test.step('open the username login form', async () => {
      await loginPage.openUsernameLogin();
      await expect(loginPage.usernameInput).toBeVisible();
    });
  });

  test('email input is visible on the initial login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.emailInput).toBeVisible();
  });

  test('login button is visible and enabled', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openUsernameLogin();
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.loginButton).toBeEnabled();
  });

  test('forgot password link is visible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openUsernameLogin();
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });

  test('remember me checkbox can be selected and deselected', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openUsernameLogin();
    await expect(loginPage.rememberMeCheckbox).toBeVisible();
    await loginPage.setRememberMe(true);
    await expect(loginPage.rememberMeCheckbox).toBeChecked();
    await loginPage.setRememberMe(false);
    await expect(loginPage.rememberMeCheckbox).not.toBeChecked();
  });

  for (const scenario of invalidLoginScenarios.filter(
    ({ username, password }) => username === null && password === null
  )) {
    test(`rejects ${scenario.name}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.login('', '');
      await expect.poll(() => loginPage.isAuthenticated()).toBe(false);

      const observedMessage = await loginPage.getValidationMessage();
      expect(observedMessage).not.toBe('');
      await expect(loginPage.validationMessage).toBeVisible();
    });
  }
});
