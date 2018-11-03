package com.practise.bdd.step_def;

import com.practise.bdd.page_obj.HeaderPage;
import com.practise.bdd.page_obj.ProductDescriptionPage;
import com.practise.bdd.page_obj.ResultPage;
import com.practise.bdd.page_obj.TrolleyPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.hamcrest.Matchers.is;

public class AddToBasket {

   private ResultPage resultPage = new ResultPage();
   private HeaderPage  headerPage = new HeaderPage();
   private TrolleyPage trolleyPage = new TrolleyPage();
   private ProductDescriptionPage productDescriptionPage = new ProductDescriptionPage();
    @When("^I select a product from results$")
    public void i_select_a_product_from_results()  {
    resultPage.selectAnyProduct();

    }

    @When("^I add product to basket$")
    public void i_add_product_to_basket() throws InterruptedException {
        productDescriptionPage.addToTrolley();


    }

    @When("^I go to basket$")
    public void i_go_to_basket()  {
        productDescriptionPage.goToTrolley();

    }

    @Then("^I should see selected product in the basket$")
    public void i_should_see_selected_product_in_the_basket()  {
        String expected = resultPage.getSelectedProductTitle();
        String actual = trolleyPage.getProdNameInBasket();

        assertThat("Wrong product in basket. ", actual, is(equalToIgnoringCase(expected)));

    }
}
