@smoketest
Feature: Log In

Scenario: To log into the site
Given I am on login page
When I enter valid creds
Then I log into products page