

Feature: search
  As a end user
  I want to search for a product
  So that I can view the products

  Scenario: Valid search
    Given I am on home page
    When I search for a product "Nike"
    Then I should see all the products of "Nike"
