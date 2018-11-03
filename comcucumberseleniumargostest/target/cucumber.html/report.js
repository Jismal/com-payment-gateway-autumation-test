$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("add_to_basket.feature");
formatter.feature({
  "line": 2,
  "name": "Basket",
  "description": "As an end user\r\nI want to add a product to basket\r\nSo that i can buy product for later",
  "id": "basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@basket"
    }
  ]
});
formatter.before({
  "duration": 15271066533,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Add a product to basket",
  "description": "",
  "id": "basket;add-a-product-to-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I search for a product \"nike\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I select a product from results",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add product to basket",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I go to basket",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see selected product in the basket",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_am_on_home_page()"
});
formatter.result({
  "duration": 453972752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nike",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 4770418641,
  "status": "passed"
});
formatter.match({
  "location": "AddToBasket.i_select_a_product_from_results()"
});
formatter.result({
  "duration": 4692111754,
  "status": "passed"
});
formatter.match({
  "location": "AddToBasket.i_add_product_to_basket()"
});
formatter.result({
  "duration": 4405529081,
  "status": "passed"
});
formatter.match({
  "location": "AddToBasket.i_go_to_basket()"
});
formatter.result({
  "duration": 3321810361,
  "status": "passed"
});
formatter.match({
  "location": "AddToBasket.i_should_see_selected_product_in_the_basket()"
});
formatter.result({
  "duration": 30137371557,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".product-title\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d70.0.3538.16 (16ed95b41bb05e565b11fb66ac33c660b721f778),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LAPTOP-QOC50JNJ\u0027, ip: \u0027192.168.1.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 70.0.3538.16 (16ed95b41bb05..., userDataDir: C:\\Users\\jisma\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59505}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 9e961f5109895490f2c783a34f72a959\n*** Element info: {Using\u003dcss selector, value\u003d.product-title}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.practise.bdd.page_obj.ResultPage.getSelectedProductTitle(ResultPage.java:84)\r\n\tat com.practise.bdd.step_def.AddToBasket.i_should_see_selected_product_in_the_basket(AddToBasket.java:41)\r\n\tat ✽.Then I should see selected product in the basket(add_to_basket.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1088793913,
  "status": "passed"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 3,
  "name": "Registration",
  "description": "As a user\r\nI want to register for the site\r\nSo that I can login to the site",
  "id": "registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Registration"
    }
  ]
});
formatter.before({
  "duration": 10407245985,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "valid registration",
  "description": "",
  "id": "registration;valid-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I navigate to the login page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I fill the registration details for:",
  "rows": [
    {
      "cells": [
        "email",
        "tittle",
        "first_name",
        "last_name",
        "mobile_number",
        "post_code"
      ],
      "line": 13
    },
    {
      "cells": [
        "asdsdf.gmail.com",
        "Mr",
        "Jismal",
        "Joseph",
        "0912456778",
        "ss141fh"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_am_on_home_page()"
});
formatter.result({
  "duration": 19337789,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 2635705640,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDef.i_fill_the_registration_details_for(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5865106093,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"submit\" class\u003d\"button button--secondary\" disabled\u003d\"\" data-bdd-test-id\u003d\"yourEmailSubmitButton\"\u003e...\u003c/button\u003e is not clickable at point (674, 301). Other element would receive the click: \u003cform class\u003d\"sign-in-form\" method\u003d\"post\"\u003e...\u003c/form\u003e\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d70.0.3538.16 (16ed95b41bb05e565b11fb66ac33c660b721f778),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LAPTOP-QOC50JNJ\u0027, ip: \u0027192.168.1.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 70.0.3538.16 (16ed95b41bb05..., userDataDir: C:\\Users\\jisma\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59866}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 1fba84d5b9b1479944f9bbf7aec8d4f3\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.practise.bdd.page_obj.LoginArgos.doRegistration(LoginArgos.java:28)\r\n\tat com.practise.bdd.step_def.RegistrationStepDef.i_fill_the_registration_details_for(RegistrationStepDef.java:22)\r\n\tat ✽.And I fill the registration details for:(registration.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1042620106,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 3,
  "name": "search",
  "description": "As a end user\r\nI want to search for a product\r\nSo that I can view the products",
  "id": "search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9475906804,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Valid search",
  "description": "",
  "id": "search;valid-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I search for a product \"Nike\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see all the products of \"Nike\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_am_on_home_page()"
});
formatter.result({
  "duration": 17255231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 3919946769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.i_should_see_all_the_products_of(String)"
});
formatter.result({
  "duration": 30132714070,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"font-condensed.search-title__term\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d70.0.3538.16 (16ed95b41bb05e565b11fb66ac33c660b721f778),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027LAPTOP-QOC50JNJ\u0027, ip: \u0027192.168.1.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 70.0.3538.16 (16ed95b41bb05..., userDataDir: C:\\Users\\jisma\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60024}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 6ddb8fe46f253223cda4da2b5ac336d0\n*** Element info: {Using\u003dcss selector, value\u003dfont-condensed.search-title__term}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat com.practise.bdd.page_obj.ResultPage.getProductTitle(ResultPage.java:19)\r\n\tat com.practise.bdd.step_def.StepDefinitions.i_should_see_all_the_products_of(StepDefinitions.java:33)\r\n\tat ✽.Then I should see all the products of \"Nike\"(search.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1006934178,
  "status": "passed"
});
formatter.uri("sort.feature");
formatter.feature({
  "line": 2,
  "name": "Sort",
  "description": "As an end user\r\nI want to sort the results\r\nSo that i can see product of may choice",
  "id": "sort",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sort"
    }
  ]
});
formatter.before({
  "duration": 10338708473,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Sort By price",
  "description": "",
  "id": "sort;sort-by-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I search for a product \"nike\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I set sort by filter as \"Price: Low - High\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see all the product in sorted order as \"Low - High\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_am_on_home_page()"
});
formatter.result({
  "duration": 107963169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nike",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 4017707924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price: Low - High",
      "offset": 25
    }
  ],
  "location": "SortStepDef.i_set_sort_by_filter_as(String)"
});
formatter.result({
  "duration": 167254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Low - High",
      "offset": 49
    }
  ],
  "location": "SortStepDef.i_should_see_all_the_product_in_sorted_order_as(String)"
});
formatter.result({
  "duration": 157013,
  "status": "passed"
});
formatter.after({
  "duration": 898259330,
  "status": "passed"
});
});