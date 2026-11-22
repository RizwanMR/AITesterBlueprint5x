# RICEPOT PROMPT – ENTERPRISE PLAYWRIGHT AUTOMATION USING JAVASCRIPT

## R — ROLE

Act as a Senior QA Automation Architect and Playwright Automation Engineer with 15+ years of experience in enterprise-level test automation.

You have expert-level knowledge of:

- Playwright with JavaScript.
- Node.js and modern ECMAScript.
- Playwright Test Runner (`@playwright/test`).
- Salesforce CRM and Salesforce Lightning Experience.
- Enterprise automation framework architecture.
- Page Object Model (POM).
- XPath locator strategies.
- Cross-browser automation.
- API and UI test integration.
- Test fixtures, hooks, assertions, and reporting.
- CI/CD integration and parallel execution.
- Test data management and secure credential handling.

You must design automation frameworks following industry-standard practices and ensure that generated code is technically accurate, executable, maintainable, and scalable.

## I — INSTRUCTIONS

Create a complete, production-grade Salesforce Login Automation Framework using:

- JavaScript (Node.js).
- Playwright.
- Playwright Test Runner (`@playwright/test`).
- Page Object Model (POM).
- Playwright HTML Reporter.
- Playwright built-in assertions.
- Playwright native fixtures and hooks.

### CRITICAL FRAMEWORK RESTRICTION

Use Playwright JavaScript exclusively.

Do NOT use:

- Selenium WebDriver.
- Java.
- TestNG.
- JUnit.
- Maven.
- PageFactory.
- Allure.
- Cypress.
- Puppeteer.
- Jest as a replacement for Playwright Test Runner.

Use Playwright's native test runner for all test execution, lifecycle management, assertions, and reporting.

### 1. APPLICATION UNDER TEST

Application:

https://login.salesforce.com/?locale=in

Automate and validate the Salesforce login functionality.

### 2. LOGIN PAGE FUNCTIONALITIES

Validate the following elements only after verifying their existence in the actual application DOM:

1. Username / Email input.
2. Password input.
3. Login button.
4. Remember Me checkbox.
5. Forgot Password link.
6. Login validation messages.
7. Authentication response.

Do not invent elements, attributes, XPath expressions, error messages, or application behavior.

### 3. LOCATOR STRATEGY – MANDATORY

Use XPath locators exclusively.

Examples:

```javascript
this.username = page.locator("//input[@id='username']");
this.password = page.locator("//input[@id='password']");
this.loginButton = page.locator("//input[@id='Login']");
```

These are illustrative examples only. Verify the actual DOM before using them.

Strictly prohibit:

- CSS selectors.
- getByRole().
- getByText().
- getByLabel().
- getByPlaceholder().
- getByTestId().
- ID locator shortcuts.
- Name locator shortcuts.
- Any non-XPath locator strategy.

Use `page.locator()` with XPath expressions for all UI element identification.

### 4. PAGE OBJECT MODEL ARCHITECTURE

Implement a dedicated LoginPage class.

Requirements:

- Store the Playwright Page instance.
- Define reusable Locator objects.
- Keep page-specific interactions inside the Page Object.
- Create reusable methods for entering credentials.
- Create reusable methods for clicking the login button.
- Create reusable methods for Remember Me functionality.
- Create reusable methods for retrieving validation messages.
- Create reusable methods for checking element visibility and enabled state.
- Use async/await consistently.
- Use meaningful method and variable names.
- Avoid duplicate code.
- Keep test assertions in test files.

Do not use Selenium PageFactory or `@FindBy`.

### 5. PLAYWRIGHT TEST RUNNER

Use `@playwright/test` exclusively.

Implement the following native Playwright features:

- `test()`
- `test.describe()`
- `test.beforeAll()`
- `test.beforeEach()`
- `test.afterEach()`
- `test.afterAll()`
- `expect()`
- `test.step()`
- `test.use()`
- Playwright fixtures.

Use these features only where appropriate.

Do not introduce TestNG or another test runner.

### 6. POSITIVE TEST SCENARIOS

Implement the following tests:

1. Verify Salesforce login page loads successfully.
2. Verify username field is visible.
3. Verify password field is visible.
4. Verify login button is visible and enabled.
5. Verify username input accepts valid input.
6. Verify password input accepts valid input.
7. Verify Remember Me checkbox can be selected.
8. Verify Remember Me checkbox can be deselected.
9. Verify successful login using authorized credentials supplied through environment variables.
10. Verify successful authentication through an observable authenticated application state.

Do not assume that valid-looking credentials are valid credentials.

### 7. NEGATIVE TEST SCENARIOS

Implement:

1. Invalid username and valid password.
2. Valid username and invalid password.
3. Invalid username and invalid password.
4. Both username and password empty.
5. Username empty and password populated.
6. Password empty and username populated.
7. Verify authentication failure for invalid credentials.
8. Verify the application displays an actual observed validation or authentication message.
9. Verify the user is not authenticated after unsuccessful login.

Use data-driven testing with Playwright's native test parameterization where appropriate.

Do not invent Salesforce error messages or expected outcomes.

### 8. TEST DATA MANAGEMENT

Use environment variables for all credentials.

Required variables:

```text
SALESFORCE_USERNAME
SALESFORCE_PASSWORD
SALESFORCE_INVALID_USERNAME
SALESFORCE_INVALID_PASSWORD
```

Requirements:

- Never hardcode real credentials.
- Never print credentials in console output.
- Never include credentials in screenshots or reports.
- Validate required environment variables before executing credential-dependent tests.
- Use `.env` only if a suitable environment-variable package is configured.
- Include `.env.example` with dummy values.
- Add `.env` to `.gitignore`.

Do not fabricate test credentials.

### 9. WAITING AND SYNCHRONIZATION

Use Playwright's native synchronization mechanisms.

Mandatory practices:

- Use Playwright auto-waiting.
- Use locator assertions.
- Use `expect()` with appropriate timeout configurations.
- Use `page.waitForURL()` when URL transitions are expected and verified.
- Use locator state checks.
- Use web-first assertions.
- Avoid arbitrary fixed waits.

Strictly prohibit:

```javascript
page.waitForTimeout()
```

Do not use:

```javascript
setTimeout()
```

Do not use hardcoded delays or unnecessary polling loops.

### 10. EXCEPTION HANDLING

Implement robust exception handling.

Requirements:

- Use try-catch only where meaningful.
- Preserve original exception details.
- Never silently suppress exceptions.
- Provide meaningful failure messages.
- Handle timeout failures appropriately.
- Handle browser and page failures appropriately.
- Ensure teardown and cleanup are executed reliably.
- Do not convert failed assertions into passing tests.
- Do not use unnecessary nested try-catch blocks.

### 11. BROWSER CONFIGURATION

Configure Playwright projects for:

- Chromium.
- Firefox.
- WebKit.

Requirements:

- Support headless and headed execution.
- Configure browser launch settings.
- Configure default timeouts.
- Configure navigation timeouts.
- Support browser selection through Playwright configuration.
- Use isolated browser contexts.
- Ensure independent test execution.
- Enable parallel execution where appropriate.

Do not assume all browsers are installed. Provide the required installation command.

### 12. SCREENSHOT AND REPORTING

Use Playwright's native HTML Reporter.

Configure:

- HTML reporting.
- Test execution summary.
- Failed test details.
- Automatic screenshot capture on failure.
- Trace capture on failure.
- Video capture when appropriate.
- Retry configuration.
- Console output for debugging.

Use the Playwright configuration:

```javascript
reporter: [
    ['list'],
    ['html', { open: 'never' }]
]
```

Do not use Allure or TestNG reporting.

Ensure screenshots and traces are retained according to the configured test artifact policy.

### 13. CODE QUALITY REQUIREMENTS

Follow enterprise-level JavaScript standards:

- Use async/await consistently.
- Use ES modules consistently.
- Use descriptive class and method names.
- Use modular architecture.
- Follow SOLID principles where applicable.
- Avoid duplicate code.
- Avoid unnecessary abstractions.
- Avoid global mutable state.
- Avoid hardcoded test data.
- Avoid deprecated APIs.
- Avoid unused variables and imports.
- Avoid unnecessary console logging.
- Avoid arbitrary waits.
- Keep test cases independent.
- Keep configuration separate from test logic.
- Use consistent formatting.

### 14. CONFIGURATION

Create a centralized `playwright.config.js`.

Configure:

- Test directory.
- Test file matching.
- Timeout.
- Expect timeout.
- Retries.
- Workers.
- Parallel execution.
- Browser projects.
- Base URL.
- Screenshots.
- Traces.
- Videos.
- HTML reporting.

Use environment variables for configurable values.

## C — CONTEXT

We are creating an enterprise-grade Salesforce UI automation framework.

The immediate scope is Salesforce login page automation.

The framework must validate positive and negative authentication scenarios using Playwright with JavaScript.

The framework must be:

- Scalable.
- Maintainable.
- Modular.
- Reusable.
- Data-driven.
- Cross-browser compatible.
- CI/CD ready.
- Secure.
- Independently executable.

Application URL:

https://login.salesforce.com/?locale=in

The implementation must use the actual Salesforce login page DOM and observable application behavior.

## E — EXAMPLE

Expected Page Object structure:

```javascript
export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator("//input[@id='username']");
        this.password = page.locator("//input[@id='password']");
        this.loginButton = page.locator("//input[@id='Login']");
    }

    async navigateToLoginPage() {
        await this.page.goto(
            'https://login.salesforce.com/?locale=in'
        );
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}
```

This is an architectural example, not proof that the locators are currently valid. Validate them against the actual DOM before generating the final implementation.

## P — PARAMETERS

Strictly follow these technical requirements:

1. JavaScript only.
2. Playwright only.
3. Use `@playwright/test`.
4. Use Node.js.
5. Use XPath exclusively for UI locators.
6. Implement Page Object Model.
7. Use Playwright native test lifecycle hooks.
8. Use Playwright native assertions.
9. Implement positive and negative login scenarios.
10. Use environment variables for credentials.
11. Implement browser configuration for Chromium, Firefox, and WebKit.
12. Implement reliable synchronization.
13. Implement robust error handling.
14. Capture screenshots on failure.
15. Configure HTML reports.
16. Configure trace and video collection.
17. Use independent test execution.
18. Ensure resource cleanup.
19. Avoid arbitrary waits.
20. Do not use Selenium, TestNG, Java, Maven, PageFactory, or Allure.
21. Do not generate unverified locators.
22. Do not invent application responses.
23. Do not claim execution success without actual execution.
24. Generate syntactically valid and executable code.
25. Explicitly identify any missing information rather than fabricating it.

## O — OUTPUT

Generate a complete Maven-free Node.js project with the following structure:

```text
Salesforce-Playwright-Automation/
│
├── package.json
├── package-lock.json
├── playwright.config.js
├── .env.example
├── .gitignore
│
├── pages/
│   └── LoginPage.js
│
├── tests/
│   └── Login.spec.js
│
├── test-data/
│   └── loginTestData.js
│
├── utils/
│   └── environment.js
│
├── reports/
│
└── test-results/
```

### REQUIRED DELIVERABLES

1. `package.json` – Playwright and required package configuration.
2. `playwright.config.js` – Centralized framework configuration.
3. `pages/LoginPage.js` – Login Page Object.
4. `tests/Login.spec.js` – Positive and negative test cases.
5. `test-data/loginTestData.js` – Data-driven login scenarios.
6. `utils/environment.js` – Environment variable validation.
7. `.env.example` – Example environment configuration.
8. `.gitignore` – Ignore credentials and generated artifacts.

### EXECUTION COMMANDS

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Execute all tests:

```bash
npx playwright test
```

Execute Chromium tests:

```bash
npx playwright test --project=chromium
```

Execute Firefox tests:

```bash
npx playwright test --project=firefox
```

Execute WebKit tests:

```bash
npx playwright test --project=webkit
```

Execute in headed mode:

```bash
npx playwright test --headed
```

Open HTML report:

```bash
npx playwright show-report
```

### OUTPUT RESTRICTIONS

- Generate complete source code for every requested file.
- Include all required imports.
- Include complete package configuration.
- Include compatible package versions.
- Do not provide pseudocode.
- Do not omit required methods.
- Do not provide incomplete implementations.
- Do not generate unnecessary files.
- Do not include explanations or tutorials.
- Do not claim code has been tested unless it has actually been executed.

## T — TONE

Technical, precise, deterministic, professional, and enterprise-grade.

Act as a Senior Playwright Automation Architect.

Prioritize correctness, maintainability, scalability, security, and production-level coding practices.

## SAFETY RULES, GUARDRAILS AND ANTI-HALLUCINATION RULES

These rules are mandatory and override all other instructions.

### A. FACTUAL ACCURACY

1. Never invent UI elements.
2. Never invent XPath locators.
3. Never invent element attributes.
4. Never invent Salesforce error messages.
5. Never invent APIs or application endpoints.
6. Never invent authentication responses.
7. Never assume an element exists without evidence.
8. Never assume login is successful based only on clicking the Login button.
9. Never assume Remember Me functionality works without verification.
10. Never assume credentials are valid without actual authentication.

### B. DOM VALIDATION

1. Validate XPath expressions against the actual application DOM whenever browser access is available.
2. Verify locator uniqueness.
3. Verify element visibility and enabled state before interaction where necessary.
4. Do not silently replace an unavailable XPath with CSS or another locator strategy.
5. If the DOM cannot be inspected, explicitly state that locator validity cannot be established.
6. Treat illustrative XPath examples as unverified until inspected.

### C. TEST ASSERTION ACCURACY

1. Every assertion must be traceable to an actual UI element or observable application behavior.
2. Never create expected results based on assumptions.
3. Verify successful authentication through an actual authenticated state.
4. Verify unsuccessful authentication through actual application evidence.
5. Do not assert exact error messages unless observed or provided.
6. Do not create false-positive test cases.
7. Do not suppress failed assertions.

### D. TECHNICAL COMPATIBILITY

1. Use only JavaScript.
2. Use only Playwright Test Runner for UI test execution.
3. Ensure all imports and APIs are compatible with the declared package versions.
4. Do not mix CommonJS and ES modules.
5. Do not use TestNG, Selenium, Java, Maven, or Allure.
6. Do not use deprecated Playwright methods.
7. Ensure the generated project structure matches the imports and configuration.

### E. DETERMINISTIC OUTPUT

1. Same inputs must produce the same framework structure and test scenarios.
2. Avoid random credentials and random expected results.
3. Avoid unnecessary dynamic behavior.
4. Use explicit configuration.
5. Keep test data separate from test implementation.

### F. MISSING INFORMATION POLICY

If required information is unavailable or cannot be verified, respond exactly:

"Insufficient information to determine."

If a detail is inferred rather than verified, label it exactly:

"Inference (low confidence)"

Never convert assumptions into facts.

### G. FINAL VALIDATION

Before generating the final output, internally verify:

- All files have valid JavaScript syntax.
- All imports resolve to actual project files or declared packages.
- All XPath expressions follow the mandatory locator policy.
- All tests use Playwright Test Runner.
- All test hooks are correctly implemented.
- All assertions are meaningful.
- Credentials are not hardcoded.
- Browser configuration is valid.
- HTML reporting is configured.
- No arbitrary waits exist.
- No prohibited frameworks or dependencies are included.
- No fabricated application behavior exists.

**FINAL INSTRUCTION: Generate a complete, enterprise-grade Salesforce Playwright automation project using JavaScript exclusively. Follow every anti-hallucination rule. Output only the requested source code and configuration files, without explanations or additional text.**