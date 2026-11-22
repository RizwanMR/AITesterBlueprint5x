package com.aitesterblueprint.tests;

import com.aitesterblueprint.base.BaseTest;
import com.aitesterblueprint.pages.SalesforceLoginPage;
import io.qameta.allure.Allure;
import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import org.testng.SkipException;
import org.testng.annotations.Test;

@Epic("Salesforce Authentication")
@Feature("Valid Login")
public class ValidLoginTest extends BaseTest {
    @Test(priority = 1)
    @Description("Verifies login with environment-provided Salesforce credentials")
    public void validLoginTest() {
        String username = System.getenv("SALESFORCE_USERNAME");
        String password = System.getenv("SALESFORCE_PASSWORD");
        if (username == null || username.isBlank() || password == null || password.isBlank()) {
            throw new SkipException("SALESFORCE_USERNAME and SALESFORCE_PASSWORD must be supplied");
        }

        try {
            SalesforceLoginPage loginPage = new SalesforceLoginPage(driver);
            loginPage.open();
            loginPage.setRememberMe(true);
            loginPage.login(username, password);
            org.testng.Assert.assertTrue(loginPage.isLoginSuccessful(), "Valid Salesforce login did not complete");
        } catch (SkipException exception) {
            throw exception;
        } catch (RuntimeException | AssertionError exception) {
            throw new AssertionError("Valid Salesforce login verification failed", exception);
        }
    }
}
