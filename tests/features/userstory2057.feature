Feature: Verify Submit a form

@TC-001  @us2057
Scenario: submit a form

Given I Login to demoqa URL
When I enter "<firstname>" in first name field
And I enter "<lastname>" in last name field
And I enter "<emailaddress>" in email field
And I select gender radio button in gender field
And I enter "<mobilenumber>" in mobile field
And I enter "<dob>" and select in dob field
And I enter "<subject>" and select in subject field
And I select sports and reading checkbox
And I upload a picture in picture field
And I enter "<currentaddress>" in address field
And I select "<state>" from state dropdown field
And I select "<city>" from city dropdown field
And I click on submit button
Then I verify Thanks for submitting the form is displayed


Examples:
| firstname   | lastname | emailaddress     | mobilenumber | dob         | subject          |  currentaddress        |  state       | city   |
| raghav      | RS       | vv13@gmail.com   | 8785849898   | 22 Nov 2025 | computer science |  4/71,pollachi         |  rajasthan   | jaipur |




