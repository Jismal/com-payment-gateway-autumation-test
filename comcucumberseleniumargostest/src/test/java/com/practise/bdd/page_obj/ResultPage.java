package com.practise.bdd.page_obj;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import com.practise.bdd.utils.Helpers;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class ResultPage extends com.practise.bdd.driver.DriverHelper {
    Helpers helpers = new Helpers();
    @FindBy(css = "font-condensed.search-title__term")
    private WebElement ProductName;

    public String getProductTitle() {
        return ProductName.getText();
    }

    @FindBy(css = ".ac-facet__label")
    private List<WebElement> filterby;

    public void selectFilterBy(String filterChoice) {

        for (WebElement filterElement : filterby) {
            if (filterElement.getText().equalsIgnoreCase(filterChoice)) {
                filterElement.click();
                break;
            }
        }
    }

    @FindBy(css = ".ac-icon__star-fill")
    private WebElement rating;

    public List<Double> getAllRatingOnProducts() {
        List<Double> collectedRatingList = new ArrayList<>();

                                                          // List<WebElement> filterWebelemts = driver.findElements(By.cssSelector(".ac-facet__label"));
        for (WebElement filterWebelemt : filterby) {
                                                          //String ratingValueInString =filterWebelemt.getAttribute(".ac-icon__star-fill");
            double ratingValueInDouble = (double) Double.parseDouble(String.valueOf(rating));
            collectedRatingList.add(ratingValueInDouble);

        }
        return collectedRatingList;
    }

    public void selectByProductName(String productName) {
        List<WebElement> webElements = driver.findElements(By.cssSelector(".ac-product-name.ac-product-card__name"));
        System.out.println(webElements);
        for (WebElement webElement : webElements) {
            if (webElement.getText().equalsIgnoreCase(productName)) {
                webElement.click();
                break;
            }
        }
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    public void selectSortingOptions(String choice) {
        Select select = new Select(driver.findElement(By.cssSelector(".sort-select")));
        select.selectByVisibleText(choice);
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
    }

    public String selectAnyProduct() {
        List<WebElement> prNameWebElements = driver.findElements(By.cssSelector(".ac-product-name.ac-product-card__name"));
        int productCount = prNameWebElements.size();
        System.out.println(productCount);
        int rndNumber = new Helpers().generateRandomNumber(productCount);
        WebElement inProduct = prNameWebElements.get(rndNumber);
        String expectedPrdName = inProduct.getText();
        inProduct.click();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        return expectedPrdName;


    }

    public String getSelectedProductTitle() {
        String product = driver.findElement(By.cssSelector(".product-title")).getText();
        return product;


    }
}
