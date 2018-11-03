package com.practise.bdd.driver;

import io.github.bonigarcia.wdm.FirefoxDriverManager;
import io.github.bonigarcia.wdm.InternetExplorerDriverManager;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class DriverHelper {
    DesiredCapabilities capabilities = new DesiredCapabilities();
    WebDriver remotdriver = new RemoteWebDriver(capabilities);

    public DriverHelper(){
        PageFactory.initElements(driver,this);

    }
    public static WebDriver driver;
    private String browser = "Chrome";


    public void browserManager() {
        switch (browser) {
            case "Chrome":
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                break;
            case "Firefox":
                FirefoxDriverManager.getInstance().setup();
                driver = new FirefoxDriver();
                break;
            case "InternetExplorer":
                InternetExplorerDriverManager.getInstance().setup();
                driver = new InternetExplorerDriver();
                break;
            default:
                driver = new FirefoxDriver();
                break;


        }


        driver.manage().window().maximize();

    }

    public void OpenUrl() {
        driver.get("http://www.argos.co.uk/");
    }

    public void maximizeBrowser() {
        driver.manage().window().maximize();
    }

    public void impWait() {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    public void closeBrowser() {
        driver.quit();
    }

    public void searchAnyItem(String searchTerm) {

        WebElement element = driver.findElement(By.cssSelector("#searchTerm"));
        element.sendKeys(searchTerm);
        element.sendKeys(Keys.ENTER);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);}
        public void handleCookies(){
            driver.findElement(By.cssSelector(".privacy-prompt-footer>a")).click();
        }
    }

