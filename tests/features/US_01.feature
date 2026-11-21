Feature: Login functionality

@TC-01 @regression
Scenario Outline: verify the price link is working or not

Given I Login to reqres URL
When I Click on Pricing link 
Then I verify the Pricing page is displayed

@TC-02
Scenario Outline: verify the teams link is working or not

Given I Login to https://reqres.in/URL
When I Click on Teams link 
Then I verify the Teams page is displayed

@TC-03
Scenario Outline: verify the Blog link is working or not

Given I Login to https://reqres.in/URL
When I Click on Blog link 
Then I verify the Blog page is displayed

@TC-04
Scenario Outline: verify the Docs link is working or not

Given I Login to https://reqres.in/URL
When I Click on Docs link 
Then I verify the Docs page is displayed

@TC-05
Scenario Outline: verify the About link is working or not 

Given I Login to https://reqres.in/URL
When I Click on About link 
Then I verify the About page is displayed

@TC-06
Scenario Outline: Login functionality 

Given  I Login to https://reqres.in/URL
When Click on get your free API button
And I Enter "<Email address>" in Email address field
And I Enter "<password>" in password field
And I Click on continue button
Then I verify Error message is displayed

Examples:
| username | password |
| Sridevi  | Sri555 |

