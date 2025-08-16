Feature: Select dropdown


Background: 
Given I am on login page
When I enter valid creds
Then I log into products page

Scenario:
Given dropdown is visible
When I select an option
Then Results should be sorted
