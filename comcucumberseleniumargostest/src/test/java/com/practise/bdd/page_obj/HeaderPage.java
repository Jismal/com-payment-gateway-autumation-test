package com.practise.bdd.page_obj;

import com.practise.bdd.driver.DriverHelper;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.concurrent.TimeUnit;

public class HeaderPage extends DriverHelper {
    @FindBy(css = "#searchTerm")
    private WebElement searchbox;
    public void doSearch(String searchTerm) {

        searchbox.sendKeys(searchTerm);
        searchbox.sendKeys(Keys.ENTER);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    public String getCurrentUrl() {
        driver.getCurrentUrl();
        return driver.getCurrentUrl();
    }

    public void goToLogin() {
        driver.findElement(By.linkText("SIGN IN / JOIN")).click();
    }
}