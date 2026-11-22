import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.SALESFORCE_BASE_URL ?? 'https://login.salesforce.com/?locale=in';
const headed = process.env.PW_HEADED === 'true';
const retries = Number.parseInt(process.env.PW_RETRIES ?? '1', 10);
const workers = Number.parseInt(process.env.PW_WORKERS ?? '4', 10);

if (!Number.isInteger(retries) || retries < 0) {
  throw new Error('PW_RETRIES must be a non-negative integer.');
}

if (!Number.isInteger(workers) || workers < 1) {
  throw new Error('PW_WORKERS must be a positive integer.');
}

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : retries,
  workers: process.env.CI ? 2 : workers,
  timeout: 45_000,
  expect: {
    timeout: 10_000
  },
  outputDir: './test-results/artifacts',
  reporter: [
    ['list'],
    ['html', { outputFolder: './reports/html', open: 'never' }]
  ],
  use: {
    baseURL,
    headless: !headed,
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    screenshot: 'off',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: false
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});
