# VWO / Wingify Login — Test Cases (Anti-Hallucination Rules)

**Inputs:** PRD "VWO Login Dashboard" (Google Doc provided by the user) and the user-provided URL https://app.wingify.com/#/login, observed on 2026-11-22.

## Verified Facts

| Fact ID | Source | Fact |
|---|---|---|
| P01 | PRD > Existing Features | Login form has email address and password input fields. |
| P02 | PRD > Existing Features | Remember Me checkbox option for persistent login sessions. |
| P03 | PRD > Existing Features | Account registration link gives a direct path to free trial signup. |
| P04 | PRD > Existing Features | Product announcement banner highlights the new UI launch with Light and Dark Mode options. |
| P05 | PRD > Login Process | Primary authentication is email and password login with secure validation. |
| P06 | PRD > Login Process | Secure session handling with configurable timeout periods. |
| P07 | PRD > Login Process | Optional 2FA support. |
| P08 | PRD > Login Process / Third-Party Services | Enterprise SSO integration supporting SAML, OAuth and other enterprise protocols. |
| P09 | PRD > User Input Validation | Real-time field validation on blur to provide immediate feedback. |
| P10 | PRD > User Input Validation | Automatic email format validation with specialized mobile keyboards. |
| P11 | PRD > User Input Validation | Password strength indicators give visual feedback for password requirements and strength. |
| P12 | PRD > User Input Validation | Clear, actionable error messages for failed authentication attempts. |
| P13 | PRD > Password Management | Forgot password flow with secure token generation; email-based reset is a recovery option. |
| P14 | PRD > Interface Design | Responsive, mobile-optimized interface with touch-friendly controls. |
| P15 | PRD > Interface Design | Automatic focus on the first input field. |
| P16 | PRD > Interface Design | Clickable form labels. |
| P17 | PRD > Interface Design | Clear feedback (loading state) during authentication processing. |
| P18 | PRD > Accessibility Features | Screen reader support: ARIA labels and keyboard navigation compatibility. |
| P19 | PRD > Accessibility Features | High contrast mode accessibility options. |
| P20 | PRD > Accessibility Features | Full keyboard accessibility for all interactive elements. |
| P21 | PRD > Branding and Visual Design | Theme support: Light and Dark Mode options. |
| P22 | PRD > Data Protection | HTTPS enforcement: SSL/TLS encryption for all login communications. |
| P23 | PRD > Compliance Standards | Rate limiting protects against brute force attacks through request throttling. |
| P24 | PRD > Performance Requirements | Login page loads within 2 seconds on standard connections. |
| P25 | PRD > Performance Requirements | Compressed images and minified CSS/JavaScript files. |
| P26 | PRD > Platform Integrations | Seamless transition to the main dashboard after successful authentication. |
| P27 | PRD > Platform Integrations | Login success/failure tracking. |
| P28 | PRD > Third-Party Services | Optional social login with Google, Microsoft and other identity providers. |
| P29 | PRD > Accessibility Standards | WCAG 2.1 AA compliance. |
| P30 | PRD > Error Recovery Flow | Multiple paths for account recovery and support after authentication failure. |
| P31 | PRD > Executive Summary | Product is the VWO login dashboard at app.vwo.com. |
| P32 | PRD > Data Protection | Encryption for all authentication data transmission. |
| L01 | Live page (user-provided URL) | Browser tab title is "Login - Wingify". |
| L02 | Live page (user-provided URL) | A "Wingify" logo image is shown above the form. |
| L03 | Live page (user-provided URL) | "Email address" textbox with placeholder "Enter email ID"; input type is "email". |
| L04 | Live page (user-provided URL) | "Password" textbox with placeholder "Enter password"; input type is "password". |
| L05 | Live page (user-provided URL) | "Toggle password visibility" button: first click changes the password input type to "text", second click changes it back to "password". |
| L06 | Live page (user-provided URL) | "Forgot Password?" opens https://app.wingify.com/#/forgot-password with an "Email address" field, a "Back" button and a "Reset Password" button. |
| L07 | Live page (user-provided URL) | "Remember me" checkbox is present and unchecked on page load. |
| L08 | Live page (user-provided URL) | "Sign in" button is present. |
| L09 | Live page (user-provided URL) | Below an "Or" separator: "Sign in with Google", "Sign in using SSO" and "Sign in with Passkey" buttons. |
| L10 | Live page (user-provided URL) | "Sign in using SSO" opens https://app.wingify.com/#/sso with an "Email address" field, a "Back" button and a "Sign in" button. |
| L11 | Live page (user-provided URL) | "New to Wingify?" text with a "Start a FREE TRIAL" link to https://wingify.com/free-trial/ (utm_source=login-page). |
| L12 | Live page (user-provided URL) | Text "By continuing, you agree to Wingify's Privacy policy & Terms." with links to https://wingify.com/privacy-policy/ and https://wingify.com/terms/. |
| L13 | Live page (user-provided URL) | On page load, keyboard focus is in the "Email address" field. |
| L14 | Live page (user-provided URL) | Error "Your email, password, IP address or location did not match" is not shown on load; it is shown, with the user remaining on #/login, after clicking "Sign in" with: both fields empty; an email and no password; "user@@domain" plus a password; an unregistered email plus a password. |
| L15 | Live page (user-provided URL) | Typing "user@@domain" in "Email address" and moving focus to "Password" shows no visible validation message. |
| L16 | Live page (user-provided URL) | After a failed sign-in, the text "Reset Password" is visible on the page. |
| L17 | Live page (user-provided URL) | The login page is served over https. |
| L18 | Live page (user-provided URL) | Right panel shows "Agentic Experience Optimization Platform" and heading "Make every digital experience relevant". |
| L19 | Live page (user-provided URL) | No password strength indicator, Light/Dark Mode banner or Microsoft sign-in option is present on the login page. |

## Missing / Unknown Information

- Valid test credentials (including a 2FA-enabled account and an SSO-enabled organization) were not provided.
- Dashboard URL and content after successful login.
- Exact error text for a registered email with a wrong password.
- Rate limiting threshold, lockout duration and message.
- Session timeout value and post-timeout behavior.
- Password reset email content, token expiry period and on-screen confirmation text.
- Behavior of the reset password and SSO views for empty, invalid or non-SSO emails.
- Destination of the "Back" button on the reset password and SSO views.
- Behavior of "Sign in with Passkey" (not described in the PRD).
- Second-factor UI and messages for 2FA.
- Duration of the "Remember me" persistent session.
- Appearance of the loading state during authentication.
- How Light/Dark Mode is switched, if available.
- Whether app.vwo.com redirects to app.wingify.com.
- Field maximum lengths, email case sensitivity and whitespace trimming rules.
- Analytics tool and event names used for login tracking.
- Minimum touch target size for "touch-friendly controls".

**Test ideas excluded (no verifiable source for an expected result):**

| Excluded Test Idea | Reason |
|---|---|
| SQL injection / script injection in input fields | PRD cites OWASP guidelines but does not specify these behaviors. |
| Session cookie Secure / HttpOnly flags | Not stated in the PRD. |
| Session invalidation after logout | Logout behavior is not described. |
| Password case sensitivity | Not stated in the PRD and not observed. |
| Email case insensitivity and whitespace trimming | Not stated in the PRD and not observed. |
| Maximum field length / very long inputs | No limits in the PRD; no maxlength observed. |
| Account enumeration via error messages | Registered-email-with-wrong-password message was not observed, so messages cannot be compared. |
| Invalid 2FA code handling | No 2FA behavior details provided. |
| Reset password with empty / invalid email | No expected behavior provided. |
| Password not stored in browser storage | PRD covers server-side storage only. |
| Cross-browser behavior | Not stated in the PRD. |

## Generated Output

| TC_ID | Module | Source Fact IDs | Test Scenario | Test Type | Preconditions | Test Steps | Test Data | Expected Result | Priority |
|---|---|---|---|---|---|---|---|---|---|
| TC_AH_001 | UI | L01 | Verify the browser tab title | UI | Login page https://app.wingify.com/#/login is open | 1. Read the browser tab title | N/A | Title is "Login - Wingify" | P3 |
| TC_AH_002 | UI | L02 | Verify the Wingify logo is displayed | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the top of the login form | N/A | "Wingify" logo image is displayed | P3 |
| TC_AH_003 | UI | P01, L03 | Verify the "Email address" field and placeholder | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the "Email address" textbox | N/A | Field is visible with placeholder "Enter email ID" | P1 |
| TC_AH_004 | UI | P01, L04 | Verify the "Password" field and placeholder | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the "Password" textbox | N/A | Field is visible with placeholder "Enter password" | P1 |
| TC_AH_005 | UI | L05 | Verify the "Toggle password visibility" button is displayed | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the "Password" textbox | N/A | "Toggle password visibility" button is displayed with the "Password" field | P2 |
| TC_AH_006 | UI | L06 | Verify the "Forgot Password?" option is displayed | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the login form | N/A | "Forgot Password?" button is displayed | P1 |
| TC_AH_007 | UI | P02, L07 | Verify the "Remember me" checkbox is displayed | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the login form | N/A | "Remember me" checkbox is displayed | P2 |
| TC_AH_008 | UI | L08 | Verify the "Sign in" button is displayed | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the login form | N/A | "Sign in" button is displayed | P1 |
| TC_AH_009 | UI | L09 | Verify the alternative sign-in options are displayed | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the section below the "Sign in" button | N/A | "Or" separator followed by "Sign in with Google", "Sign in using SSO" and "Sign in with Passkey" | P1 |
| TC_AH_010 | UI | P03, L11 | Verify the free trial registration link is displayed | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the lower part of the login form | N/A | "New to Wingify?" text with a "Start a FREE TRIAL" link is displayed | P2 |
| TC_AH_011 | UI | L12 | Verify the legal consent text and links | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the bottom of the login form | N/A | Text "By continuing, you agree to Wingify's Privacy policy & Terms." with "Privacy policy" and "Terms" links | P3 |
| TC_AH_012 | UI | L18 | Verify the right panel content | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the right side of the page | N/A | "Agentic Experience Optimization Platform" and heading "Make every digital experience relevant" are displayed | P3 |
| TC_AH_013 | Authentication | P05, P26 | Verify login with valid credentials | Positive | Login page https://app.wingify.com/#/login is open; valid credentials for an active account are available | 1. Enter valid email in "Email address"<br>2. Enter valid password in "Password"<br>3. Click "Sign in" | Email: &lt;valid_email>; Password: &lt;valid_password> | User is transitioned to the main dashboard. Dashboard URL: Insufficient information to determine. | P0 |
| TC_AH_014 | Authentication | P05, P12 | Verify login with a registered email and a wrong password | Negative | Login page https://app.wingify.com/#/login is open; valid credentials for an active account are available | 1. Enter valid email<br>2. Enter a wrong password<br>3. Click "Sign in" | Email: &lt;valid_email>; Password: WrongPass#123 | Authentication fails and an error message is displayed. Exact text: Insufficient information to determine. | P0 |
| TC_AH_015 | Authentication | L14 | Verify login with an unregistered email | Negative | Login page https://app.wingify.com/#/login is open | 1. Enter an unregistered email<br>2. Enter any password<br>3. Click "Sign in" | Email: qa.probe.nonexistent.7731@example.com; Password: WrongPass#123 | User remains on #/login and error "Your email, password, IP address or location did not match" is displayed | P0 |
| TC_AH_016 | Authentication | L14 | Verify the error message is not shown before any action | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the form without interacting | N/A | Error "Your email, password, IP address or location did not match" is not displayed | P2 |
| TC_AH_017 | Input Validation | L14 | Verify submitting with both fields empty | Negative | Login page https://app.wingify.com/#/login is open | 1. Leave both fields empty<br>2. Click "Sign in" | Email: (empty); Password: (empty) | User remains on #/login and error "Your email, password, IP address or location did not match" is displayed | P1 |
| TC_AH_018 | Input Validation | L14 | Verify submitting with an email and no password | Negative | Login page https://app.wingify.com/#/login is open | 1. Enter an email<br>2. Leave "Password" empty<br>3. Click "Sign in" | Email: qa.probe@example.com; Password: (empty) | User remains on #/login and error "Your email, password, IP address or location did not match" is displayed | P1 |
| TC_AH_019 | Input Validation | L14, P10 | Verify submitting an email containing two "@" symbols | Negative | Login page https://app.wingify.com/#/login is open | 1. Enter "user@@domain"<br>2. Enter a password<br>3. Click "Sign in" | Email: user@@domain; Password: Abc12345 | User remains on #/login and error "Your email, password, IP address or location did not match" is displayed | P1 |
| TC_AH_020 | Input Validation | P09, L15 | Verify real-time validation on blur for an invalid email | Negative | Login page https://app.wingify.com/#/login is open | 1. Enter "user@@domain" in "Email address"<br>2. Click into "Password" | Email: user@@domain | Immediate validation feedback is shown for "Email address" on blur (P09). Exact text: Insufficient information to determine. Known conflict: L15 observed no visible message. | P1 |
| TC_AH_021 | Input Validation | P10, L03 | Verify the email keyboard on mobile | Responsive | Mobile device; login page is open | 1. Tap "Email address" | N/A | A specialized email keyboard is shown (P10); the field input type is "email" (L03) | P2 |
| TC_AH_022 | Password | L04 | Verify the password is masked by default | Security | Login page https://app.wingify.com/#/login is open | 1. Enter "Secret#123" in "Password" | Password: Secret#123 | Input is masked (type "password") | P1 |
| TC_AH_023 | Password | L05 | Verify "Toggle password visibility" reveals the password | Positive | Login page https://app.wingify.com/#/login is open | 1. Enter "Secret#123" in "Password"<br>2. Click "Toggle password visibility" | Password: Secret#123 | Password input type changes to "text" and "Secret#123" is readable | P2 |
| TC_AH_024 | Password | L05 | Verify a second toggle masks the password again | Positive | Login page https://app.wingify.com/#/login is open | 1. Enter "Secret#123" in "Password"<br>2. Click "Toggle password visibility" twice | Password: Secret#123 | Password input type returns to "password" | P2 |
| TC_AH_025 | Password | L06, P13 | Verify "Forgot Password?" opens the reset password view | Positive | Login page https://app.wingify.com/#/login is open | 1. Click "Forgot Password?" | N/A | URL becomes https://app.wingify.com/#/forgot-password with "Email address", "Back" and "Reset Password" | P1 |
| TC_AH_026 | Password | P13 | Verify a password reset request for a registered email | Positive | Reset password view is open; a registered email is available | 1. Enter the registered email<br>2. Click "Reset Password"<br>3. Check the mailbox | Email: &lt;valid_email> | An email-based reset with a secure token is delivered. Email content and on-screen confirmation: Insufficient information to determine. | P0 |
| TC_AH_027 | Password | P11, L19 | Verify the password strength indicator | Requirement Gap | Login page https://app.wingify.com/#/login is open | 1. Type a password in "Password"<br>2. Observe the field area | Password: Abcdef#1234 | PRD requires visual strength feedback (P11); none is present on the live page (L19) | P3 |
| TC_AH_028 | Remember Me | L07 | Verify "Remember me" is unchecked by default | UI | Login page https://app.wingify.com/#/login is open | 1. Observe the "Remember me" checkbox | N/A | "Remember me" is unchecked | P2 |
| TC_AH_029 | Remember Me | P16, L07 | Verify clicking the "Remember me" label toggles the checkbox | Positive | Login page https://app.wingify.com/#/login is open | 1. Click the "Remember me" label text | N/A | Checkbox becomes checked (clickable labels, P16) | P2 |
| TC_AH_030 | Remember Me | P02 | Verify a persistent session when "Remember me" is checked | Positive | Login page https://app.wingify.com/#/login is open; valid credentials for an active account are available | 1. Check "Remember me"<br>2. Log in with valid credentials<br>3. Close and reopen the browser<br>4. Open https://app.wingify.com/#/login | Email: &lt;valid_email>; Password: &lt;valid_password> | The login session persists. Duration: Insufficient information to determine. | P1 |
| TC_AH_031 | Alternative Sign-in | P28, L09 | Verify "Sign in with Google" starts Google login | Integration | Login page https://app.wingify.com/#/login is open | 1. Click "Sign in with Google" | N/A | Login with the Google identity provider is initiated. Destination page: Insufficient information to determine. | P1 |
| TC_AH_032 | Alternative Sign-in | L10 | Verify "Sign in using SSO" opens the SSO view | Positive | Login page https://app.wingify.com/#/login is open | 1. Click "Sign in using SSO" | N/A | URL becomes https://app.wingify.com/#/sso with "Email address", "Back" and "Sign in" | P1 |
| TC_AH_033 | Alternative Sign-in | P08, P26 | Verify SSO login for an SSO-enabled organization | Integration | SSO view is open; organization has SAML or OAuth SSO configured | 1. Enter the organization email<br>2. Click "Sign in"<br>3. Authenticate with the organization identity provider | Email: &lt;sso_enabled_email> | User authenticates through the enterprise identity provider and is transitioned to the main dashboard | P1 |
| TC_AH_034 | Alternative Sign-in | P07, P26 | Verify a 2FA-enabled user must complete a second factor | Integration | Account has 2FA enabled | 1. Log in with valid email and password | Email: &lt;2fa_email>; Password: &lt;valid_password> | A second authentication factor is required before the dashboard is reached. Second-factor UI: Insufficient information to determine. | P0 |
| TC_AH_035 | Alternative Sign-in | L09 | Verify "Sign in with Passkey" is covered by requirements | Requirement Gap | Login page https://app.wingify.com/#/login is open | 1. Observe "Sign in with Passkey" | N/A | Present on the live page (L09) but not in the PRD. Expected behavior: Insufficient information to determine. | P2 |
| TC_AH_036 | Alternative Sign-in | P28, L19 | Verify Microsoft social login | Requirement Gap | Login page https://app.wingify.com/#/login is open | 1. Observe the alternative sign-in options | N/A | PRD lists Microsoft as an optional identity provider (P28); no Microsoft option is present (L19) | P3 |
| TC_AH_037 | Links | P03, L11 | Verify "Start a FREE TRIAL" opens the free trial page | Positive | Login page https://app.wingify.com/#/login is open | 1. Click "Start a FREE TRIAL" | N/A | https://wingify.com/free-trial/ opens | P2 |
| TC_AH_038 | Links | L12 | Verify "Privacy policy" opens the privacy policy page | Positive | Login page https://app.wingify.com/#/login is open | 1. Click "Privacy policy" | N/A | https://wingify.com/privacy-policy/ opens | P3 |
| TC_AH_039 | Links | L12 | Verify "Terms" opens the terms page | Positive | Login page https://app.wingify.com/#/login is open | 1. Click "Terms" | N/A | https://wingify.com/terms/ opens | P3 |
| TC_AH_040 | Security | P22, L17 | Verify the login page is served over HTTPS | Security | Browser is open | 1. Open https://app.wingify.com/#/login<br>2. Inspect the connection details | N/A | Connection uses HTTPS (SSL/TLS) | P0 |
| TC_AH_041 | Security | P22 | Verify HTTP access is enforced to HTTPS | Security | Browser is open | 1. Open http://app.wingify.com/#/login | URL: http://app.wingify.com/#/login | The page is not served over plain HTTP; HTTPS is enforced. Enforcement mechanism: Insufficient information to determine. | P0 |
| TC_AH_042 | Security | P32, P22 | Verify login credentials are transmitted encrypted | Security | Login page https://app.wingify.com/#/login is open | 1. Open DevTools > Network<br>2. Submit any email and password<br>3. Inspect the login request | Email: qa.probe@example.com; Password: AnyPass#123 | The login request is sent over HTTPS | P0 |
| TC_AH_043 | Security | P23 | Verify repeated failed attempts are throttled | Security | Dedicated test account | 1. Submit a wrong password repeatedly for the same account | Email: &lt;test_account_email>; Password: WrongPass#123 | Requests are throttled. Threshold, lockout duration and message: Insufficient information to determine. | P0 |
| TC_AH_044 | Security | P06 | Verify the session times out | Security | User is logged in | 1. Stay idle beyond the configured timeout<br>2. Perform an action | N/A | The session ends after the configured timeout. Timeout value and resulting screen: Insufficient information to determine. | P1 |
| TC_AH_045 | Accessibility | P15, L13 | Verify auto-focus on the "Email address" field | Accessibility | Browser is open | 1. Open https://app.wingify.com/#/login<br>2. Start typing without clicking | Text: qa | Typed text appears in "Email address" | P2 |
| TC_AH_046 | Accessibility | P20 | Verify keyboard access to all interactive elements | Accessibility | Login page https://app.wingify.com/#/login is open | 1. Press Tab through the page<br>2. Activate each control with the keyboard | N/A | Every interactive element can be reached and operated with the keyboard | P1 |
| TC_AH_047 | Accessibility | P18, L03, L04, L05 | Verify screen reader labels | Accessibility | Screen reader running; login page open | 1. Navigate the form with the screen reader | N/A | Fields and buttons are announced with labels, including "Email address", "Password" and "Toggle password visibility" | P1 |
| TC_AH_048 | Accessibility | P19 | Verify high contrast mode support | Accessibility | OS high contrast mode enabled | 1. Open https://app.wingify.com/#/login | N/A | The page is usable in high contrast mode. Specific options: Insufficient information to determine. | P3 |
| TC_AH_049 | Accessibility | P29 | Verify WCAG 2.1 AA compliance | Accessibility | Login page https://app.wingify.com/#/login is open | 1. Run a WCAG 2.1 AA audit on the page | N/A | No WCAG 2.1 AA violations are reported | P2 |
| TC_AH_050 | Responsive | P14 | Verify the layout on a mobile device | Responsive | Mobile device or emulator | 1. Open https://app.wingify.com/#/login | N/A | Interface is mobile-optimized and all login controls are usable | P2 |
| TC_AH_051 | Responsive | P14 | Verify controls are touch-friendly | Responsive | Mobile device | 1. Tap each button, link and checkbox | N/A | Controls are touch-friendly. Minimum target size: Insufficient information to determine. | P3 |
| TC_AH_052 | Performance | P24 | Verify the page loads within 2 seconds | Performance | Standard connection; cache cleared | 1. Open https://app.wingify.com/#/login<br>2. Measure load time | N/A | Page loads within 2 seconds | P1 |
| TC_AH_053 | Performance | P17 | Verify a loading state during authentication | Performance | Login page https://app.wingify.com/#/login is open; valid credentials for an active account are available | 1. Submit valid credentials on a throttled network | Email: &lt;valid_email>; Password: &lt;valid_password> | Clear feedback is shown while authentication is processing. Appearance: Insufficient information to determine. | P2 |
| TC_AH_054 | Performance | P25 | Verify assets are compressed and minified | Performance | Login page https://app.wingify.com/#/login is open | 1. Inspect CSS, JS and image responses in DevTools > Network | N/A | CSS and JavaScript are minified and images are compressed | P3 |
| TC_AH_055 | Integration | P27 | Verify login success and failure are tracked | Integration | Access to the login analytics | 1. Perform one failed and one successful login<br>2. Check the tracking data | Email: &lt;valid_email>; Password: WrongPass#123 then &lt;valid_password> | Both outcomes are tracked. Tool and event names: Insufficient information to determine. | P3 |
| TC_AH_056 | Integration | P30, L16 | Verify a recovery path is offered after a failed login | Positive | Login page https://app.wingify.com/#/login is open | 1. Submit invalid credentials<br>2. Observe the page | Email: qa.probe@example.com; Password: WrongPass#123 | "Reset Password" is visible after the failure (L16). Inference (low confidence): it leads to the reset password view | P2 |
| TC_AH_057 | Requirement Gap | P31, L01 | Verify product branding and domain | Requirement Gap | Browser is open | 1. Open https://app.vwo.com<br>2. Note the final URL and branding | URL: https://app.vwo.com | PRD names VWO at app.vwo.com (P31); the live page is Wingify (L01). Redirect behavior: Insufficient information to determine. | P2 |
| TC_AH_058 | Requirement Gap | P04, L19 | Verify the Light/Dark Mode announcement banner | Requirement Gap | Login page https://app.wingify.com/#/login is open | 1. Observe the full page | N/A | PRD lists the banner (P04); it is not present on the live page (L19) | P3 |
| TC_AH_059 | Requirement Gap | P21 | Verify Light and Dark Mode theme support | Requirement Gap | Login page https://app.wingify.com/#/login is open | 1. Look for a theme option | N/A | Light and Dark Mode options are available (P21). Location of the control: Insufficient information to determine. | P3 |

## Self-Validation Check

- Test cases generated: 59
- Every test case cites at least one Fact ID: Yes
- Every cited Fact ID exists in Verified Facts: Yes
- Facts not used by any test case: None
- Expected results containing "Insufficient information to determine." (17): TC_AH_013, TC_AH_014, TC_AH_020, TC_AH_026, TC_AH_030, TC_AH_031, TC_AH_034, TC_AH_035, TC_AH_041, TC_AH_043, TC_AH_044, TC_AH_048, TC_AH_051, TC_AH_053, TC_AH_055, TC_AH_057, TC_AH_059
- Expected results labelled "Inference (low confidence)" (1): TC_AH_056
- Requirement Gap test cases (6): TC_AH_027, TC_AH_035, TC_AH_036, TC_AH_057, TC_AH_058, TC_AH_059
- Contradictions between sources (reported, not resolved):
  - P09 (on-blur validation) vs L15 (no visible on-blur message) — covered by TC_AH_020.
  - P31 (VWO, app.vwo.com) vs L01 (Wingify, app.wingify.com).
  - P04, P11 and the Microsoft option in P28 vs L19 (not present on the live page).
  - L09 "Sign in with Passkey" has no PRD requirement.
  - P12 requires "clear, actionable" messages; L14 shows one identical message for empty fields, missing password, invalid format and unregistered email. Inference (low confidence): this may not satisfy P12.
- Priority is a QA judgment, not a system assertion: P0 = core authentication or a PRD security requirement; P1 = core flow or PRD requirement; P2/P3 = secondary UI, links and gaps.
- Determinism: content is generated by a script from a fixed fact list in a fixed order; re-running produces identical output.
