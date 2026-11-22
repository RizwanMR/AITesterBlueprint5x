package com.aitesterblueprint.pages;

import java.io.ByteArrayInputStream;
import java.time.Duration;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.qameta.allure.Allure;

public class SalesforceLoginPage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username' or @name='username']")
    private WebElement username;

    @FindBy(xpath = "//input[@id='password' or @name='password']")
    private WebElement password;

    @FindBy(xpath = "//input[@id='Login' or @value='Log In'] | //button[normalize-space()='Log In']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn' or @name='rememberMe']")
    private WebElement rememberMe;

    @FindBy(xpath = "//div[@id='error' or contains(@class,'loginError')] | //*[@role='alert']")
    private WebElement loginError;

    public SalesforceLoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(20));
        try {
            PageFactory.initElements(driver, this);
        } catch (IllegalArgumentException | NullPointerException exception) {
            throw new IllegalStateException("Unable to initialize Salesforce login page elements", exception);
        }
    }

    public void open() {
        try {
            driver.get("https://login.salesforce.com/?locale=in");
            if (!isElementAvailable(username)) {
                WebElement usernameLink = wait.until(ExpectedConditions.elementToBeClickable(
                        org.openqa.selenium.By.xpath(
                                "//a[contains(normalize-space(.),'Log In with Username')]")));
                usernameLink.click();
            }
            wait.until(ExpectedConditions.visibilityOf(username));
            wait.until(ExpectedConditions.elementToBeClickable(loginButton));
        } catch (TimeoutException exception) {
            Allure.addAttachment("Salesforce URL", driver.getCurrentUrl());
            Allure.addAttachment("Salesforce Page Title", driver.getTitle());
            Allure.addAttachment(
                    "Salesforce Page Source",
                    "text/plain",
                    driver.getPageSource(),
                    ".html");
            Allure.addAttachment(
                    "Salesforce Screenshot",
                    "image/png",
                    new ByteArrayInputStream(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES)),
                    ".png");
            throw new IllegalStateException("Salesforce login page did not become ready", exception);
        }
    }

    private boolean isElementAvailable(WebElement element) {
        try {
            return element.isDisplayed();
        } catch (RuntimeException exception) {
            return false;
        }
    }

    public void setRememberMe(boolean selected) {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(rememberMe));
            if (rememberMe.isSelected() != selected) {
                rememberMe.click();
            }
        } catch (TimeoutException | IllegalArgumentException exception) {
            throw new IllegalStateException("Unable to set the remember-me option", exception);
        }
    }

    public void login(String usernameValue, String passwordValue) {
        try {
            wait.until(ExpectedConditions.visibilityOf(username)).clear();
            username.sendKeys(usernameValue);
            wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();

            WebDriverWait shortWait = new WebDriverWait(driver, Duration.ofSeconds(5));
            try {
                shortWait.until(ExpectedConditions.visibilityOf(password)).clear();
                password.sendKeys(passwordValue);
                shortWait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
            } catch (TimeoutException ignored) {
                return;
            }
        } catch (TimeoutException | IllegalArgumentException exception) {
            Allure.addAttachment("Login URL", driver.getCurrentUrl());
            Allure.addAttachment("Login Page Source", "text/plain", driver.getPageSource(), ".html");
            Allure.addAttachment(
                    "Login Screenshot",
                    "image/png",
                    new ByteArrayInputStream(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES)),
                    ".png");
            throw new IllegalStateException("Unable to submit Salesforce login credentials", exception);
        }
    }

    public boolean isLoginErrorDisplayed() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(loginError)).isDisplayed();
        } catch (TimeoutException exception) {
            return false;
        }
    }

    public boolean isLoginSuccessful() {
        try {
            wait.until(driverInstance -> {
                String currentUrl = driverInstance.getCurrentUrl();
                return currentUrl != null && !currentUrl.startsWith("https://login.salesforce.com/");
            });
            return true;
        } catch (TimeoutException exception) {
            return false;
        }
    }

    public boolean isLoginRejected() {
        String currentUrl = driver.getCurrentUrl();
        return isLoginErrorDisplayed()
                || (currentUrl != null && currentUrl.startsWith("https://login.salesforce.com/"));
    }
}
