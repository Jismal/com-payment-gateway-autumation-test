package com.practise.bdd.page_obj;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import com.practise.bdd.driver.DriverHelper;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class TrolleyPage extends DriverHelper {

    public String getProdNameInBasket()
    {
        String prodNameInBasket = driver.findElement(By.cssSelector(".description>strong>a")).getText();
        return prodNameInBasket;
    }

    public void collect(String postcode)
    {
        driver.findElement(By.id("qasSearchTerm")).sendKeys(postcode);
        driver.findElement(By.cssSelector(".primary-button.btn-md.enable-storelocator-lightbox")).click();
    }

    public void chooseStore(String strName)
    {
        List<WebElement> storesWebelements = driver.findElements(By.cssSelector(".storelocator-location-item.storelocator-location-store"));

        for(WebElement storeWebelement : storesWebelements)
        {
            String storeName = storeWebelement.getText();
            //System.out.println(storeName);
            if(storeName.contains(strName))
            {
                //System.out.println("=====");
                storeWebelement.click();
                break;
                //System.out.println("==========");
            }
        }
        driver.findElement(By.
                cssSelector("button[class='primary-button'][data-el='storelocator-choose-store']")).click();
    }

    public String continueWithCollection()
    {
        List<WebElement> messageLists = driver.findElements(By.cssSelector(".message"));
        for(WebElement message:messageLists)
        {
            String msg = message.getText();
            if(msg.contains("collect"))
            {
                driver.findElement(By.id("Collection_Checkout")).click();
                driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
                break;
            }
            else
            {
                closeBrowser();
            }
        }
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
//        WebDriverWait wait = new WebDriverWait(driver,10);
//        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".colpaynow>h4")));
        String actual = driver.findElement(By.cssSelector(".colpaynow>h4")).getText();
        return actual;
    }
}
