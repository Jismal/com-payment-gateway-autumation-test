
@Registration
Feature: Registration
  As a user
  I want to register for the site
  So that I can login to the site

  Scenario: valid registration
    Given I am on home page
    When I navigate to the login page
    And I fill the registration details for:

      | email            | tittle | first_name | last_name | mobile_number | post_code |
      | asdsdf.gmail.com | Mr     | Jismal     | Joseph    | 0912456778    | ss141fh   |
