package com.aitesterblueprint.tests;

import com.aitesterblueprint.base.BaseTest;
import com.aitesterblueprint.pages.SalesforceLoginPage;
import io.qameta.allure.Allure;
import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import org.testng.annotations.Test;

@Epic("Salesforce Authentication")
@Feature("Invalid Login")
public class InvalidLoginTest extends BaseTest {
    @Test(priority = 2)
    @Description("Verifies invalid Salesforce credentials are rejected")
    public void invalidLoginTest() {
        try {
            Allure.parameter("username", "invalid-user@example.com");
            SalesforceLoginPage loginPage = new SalesforceLoginPage(driver);
            loginPage.open();
            loginPage.setRememberMe(false);
            loginPage.login("invalid-user@example.com", "Invalid-Password-Only-For-Test-2026");
            org.testng.Assert.assertTrue(loginPage.isLoginRejected(), "Invalid login was not rejected");
        } catch (RuntimeException | AssertionError exception) {
            throw new AssertionError("Invalid Salesforce login verification failed", exception);
        }
    }
}
