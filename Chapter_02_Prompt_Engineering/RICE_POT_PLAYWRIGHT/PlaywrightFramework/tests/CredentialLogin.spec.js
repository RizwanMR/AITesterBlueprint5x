import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { invalidLoginScenarios } from '../test-data/loginTestData.js';
import { getCredentials, getMissingEnvironmentVariables } from '../utils/environment.js';

test.use({
  trace: 'off',
  video: 'off'
});

test.describe('Credential-dependent Salesforce login', () => {
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

  test('username field accepts configured input', async ({ page }) => {
    const missing = getMissingEnvironmentVariables(['SALESFORCE_USERNAME']);
    test.skip(missing.length > 0, `Set ${missing.join(', ')} to verify username input.`);
    const { SALESFORCE_USERNAME } = getCredentials(['SALESFORCE_USERNAME']);
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(SALESFORCE_USERNAME);
    const hasUsernameValue = await loginPage.usernameInput.evaluate((input) => input.value.length > 0);
    expect(hasUsernameValue).toBe(true);
  });

  test('password field is available after a configured username is submitted', async ({ page }) => {
    const missing = getMissingEnvironmentVariables(['SALESFORCE_USERNAME']);
    test.skip(missing.length > 0, `Set ${missing.join(', ')} to verify the password step.`);
    const { SALESFORCE_USERNAME } = getCredentials(['SALESFORCE_USERNAME']);
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(SALESFORCE_USERNAME);
    await loginPage.clickLogin();
    await expect(loginPage.passwordInput).toBeVisible();
  });

  test('password field accepts configured input', async ({ page }) => {
    const missing = getMissingEnvironmentVariables(['SALESFORCE_USERNAME', 'SALESFORCE_PASSWORD']);
    test.skip(missing.length > 0, `Set ${missing.join(', ')} to verify password input.`);
    const { SALESFORCE_USERNAME, SALESFORCE_PASSWORD } = getCredentials([
      'SALESFORCE_USERNAME',
      'SALESFORCE_PASSWORD'
    ]);
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(SALESFORCE_USERNAME);
    await loginPage.clickLogin();
    await expect(loginPage.passwordInput).toBeVisible();
    await loginPage.enterPassword(SALESFORCE_PASSWORD);
    const hasPasswordValue = await loginPage.passwordInput.evaluate((input) => input.value.length > 0);
    expect(hasPasswordValue).toBe(true);
  });

  test('successful login reaches an authenticated state', async ({ page }) => {
    const missing = getMissingEnvironmentVariables(['SALESFORCE_USERNAME', 'SALESFORCE_PASSWORD']);
    test.skip(missing.length > 0, `Set ${missing.join(', ')} to run successful authentication.`);
    const { SALESFORCE_USERNAME, SALESFORCE_PASSWORD } = getCredentials([
      'SALESFORCE_USERNAME',
      'SALESFORCE_PASSWORD'
    ]);
    const loginPage = new LoginPage(page);
    await loginPage.login(SALESFORCE_USERNAME, SALESFORCE_PASSWORD);
    await expect.poll(() => loginPage.isAuthenticated()).toBe(true);
  });

  for (const scenario of invalidLoginScenarios.filter(
    ({ username, password }) => username !== null || password !== null
  )) {
    test(`rejects ${scenario.name}`, async ({ page }) => {
      const requiredVariables = [scenario.username, scenario.password].filter(Boolean);
      const missing = getMissingEnvironmentVariables(requiredVariables);
      test.skip(
        missing.length > 0,
        `Set ${missing.join(', ')} to run this credential-dependent negative scenario.`
      );

      const values = getCredentials(requiredVariables);
      const username = scenario.username ? values[scenario.username] : '';
      const password = scenario.password ? values[scenario.password] : '';
      const loginPage = new LoginPage(page);

      await loginPage.login(username, password);
      await expect.poll(() => loginPage.isAuthenticated()).toBe(false);
      await expect(loginPage.usernameInput).toBeVisible();
    });
  }
});
