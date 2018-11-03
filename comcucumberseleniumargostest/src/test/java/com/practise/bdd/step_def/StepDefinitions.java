package com.practise.bdd.step_def;

import com.practise.bdd.page_obj.HeaderPage;
import com.practise.bdd.page_obj.ResultPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class StepDefinitions {


    private HeaderPage headerPage = new HeaderPage();
    private ResultPage resultPage = new ResultPage();

    @Given("^I am on home page$")
    public void i_am_on_home_page() {

        String actual = headerPage.getCurrentUrl();
        assertThat("User is not on current Url",actual,is(("https://www.argos.co.uk/")));

    }

    @When("^I search for a product \"([^\"]*)\"$")
    public void i_search_for_a_product(String searchTerm){headerPage.doSearch(searchTerm);

    }

    @Then("^I should see all the products of \"([^\"]*)\"$")
    public void i_should_see_all_the_products_of(String expected) {
        String actual = resultPage.getProductTitle();
        assertThat("I am not able to find nike products",actual,is(equalToIgnoringCase(expected)));
    }


}
