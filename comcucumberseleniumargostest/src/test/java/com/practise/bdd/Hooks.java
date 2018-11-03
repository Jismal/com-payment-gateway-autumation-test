package com.practise.bdd;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import com.practise.bdd.driver.DriverHelper;


/**
 *
 */
public class Hooks {

    private DriverHelper driverHelper = new DriverHelper();

    @Before
    public void setUp() {
        driverHelper.browserManager();
        driverHelper.OpenUrl();
        driverHelper.maximizeBrowser();
        driverHelper.impWait();
        driverHelper.handleCookies();
    }

    @After
    public void tearDown() {
        driverHelper.closeBrowser();

    }
}






