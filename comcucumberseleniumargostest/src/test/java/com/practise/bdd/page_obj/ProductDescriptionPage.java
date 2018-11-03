package com.practise.bdd.page_obj;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import com.practise.bdd.driver.DriverHelper;

import static java.lang.Thread.sleep;

public class ProductDescriptionPage extends DriverHelper {


     public void addToTrolley() throws InterruptedException {
//    WebDriverWait wait = new WebDriverWait(driver,30);
//    wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".add-to-trolley-main button")));
    driver.findElement(By.cssSelector(".add-to-trolley-main button")).click();
    sleep(4000);
}

    public void goToTrolley()
    {
//        WebDriverWait wait = new WebDriverWait(driver,30);
//        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".button.button--full.xs-hidden.sm-block")));
        //driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
        driver.findElement(By.cssSelector(".button.button--full.xs-hidden.sm-block")).click();

    }

    public void increaseItem(String no)
    {
        Select select = new Select(driver.findElement(By.id("quantity_0")));
        select.selectByVisibleText(no);

    }

    public double getPriceOfSelectedProduct(String selectedProd)
    {
        String price = driver.findElement(By.cssSelector(".product-price-wrap.prices>li")).getText().replace("£","").replace("*","");
        System.out.println(price);
        double actualPriceOf1Prod = Double.parseDouble(price);
        return actualPriceOf1Prod;
    }
}
