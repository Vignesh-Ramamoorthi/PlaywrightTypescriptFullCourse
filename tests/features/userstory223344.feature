Feature: Login functionality

@TC-01 @us223344
Scenario: verify the price link is working or not

Given I Login to Reqres URL
Then  I verify the Pricing link is displayed

@TC-02 @us223344
Scenario: verify the teams link is displayed

Given I Login to Reqres URL
Then I verify the Teams link is displayed 

@TC-03 @us223344
Scenario: verify the Blog link is displayed

Given I Login to Reqres URL
Then I verify the Blog link is displayed

@TC-04 @us223344
Scenario: verify the Docs link is displayed

Given I Login to Reqres URL
Then I verify the Docs link is displayed


@TC-05 @us223344
Scenario: verify the About link is displayed

Given I Login to Reqres URL
Then I verify the About link is displayed


@TC-06 @us223344
Scenario: verify the Login functionality

Given I Login to Reqres URL
When I click on get your free API button 
And I Enter "<Emailaddress>" in email field
And I click on "<password>" in password field
And I click on continue button
Then I verify Error the message is displayed

Examples:
| Emailaddress        | password    |
| sridevi12@gmail.com | sridevi     |