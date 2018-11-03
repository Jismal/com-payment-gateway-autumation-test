package com.practise.bdd.page_obj;

import com.practise.bdd.driver.DriverHelper;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class LoginArgos extends DriverHelper {



  HeaderPage headerPage = new HeaderPage();

    public void goToRegistration() {
        headerPage.goToLogin();

    }

    public void doRegistration(List<Map<String, String>> data) {

        driver.findElement(By.xpath("//a[@class='button-link']")).click();
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.SECONDS);
            driver.findElement(By.name("emailAddress"))
                    .sendKeys(data.get(0).get("email"));
            driver.findElement(By.xpath("//button[contains(text(),'Continue')]")).click();
            new Select(driver.findElement(By.id("title")))
                    .selectByVisibleText(data.get(0).get("title"));
            driver.findElement(By.id("first-name"))
                    .sendKeys(data.get(0).get("first_Name"));
            driver.findElement(By.id("last-name")).sendKeys("");
            driver.findElement(By.id("postcode")).sendKeys("");

        }
    }



