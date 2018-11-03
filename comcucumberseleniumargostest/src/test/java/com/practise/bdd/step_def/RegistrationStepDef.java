package com.practise.bdd.step_def;

import com.practise.bdd.driver.DriverHelper;
import com.practise.bdd.page_obj.HeaderPage;
import com.practise.bdd.page_obj.LoginArgos;
import cucumber.api.java.en.When;

import java.util.List;
import java.util.Map;

public class RegistrationStepDef extends DriverHelper {
HeaderPage headerPage = new HeaderPage();
LoginArgos loginArgos = new LoginArgos();

    @When("^I navigate to the login page$")
    public void i_navigate_to_the_login_page()  {headerPage.goToLogin();

    }

    @When("^I fill the registration details for:$")
    public void i_fill_the_registration_details_for(List<Map<String,String>> data) {headerPage.goToLogin();
    loginArgos.doRegistration(data);

    }
}