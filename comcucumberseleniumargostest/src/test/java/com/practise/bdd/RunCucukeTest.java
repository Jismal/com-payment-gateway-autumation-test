package com.practise.bdd;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",


        plugin = {"json:target/cucumber.json", "html:target/cucumber.html"}
)

public class RunCucukeTest {

}
