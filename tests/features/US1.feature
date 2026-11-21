Feature: Login functionality

@login_Invalid_Test @regression @sridevi
Scenario Outline: Invalid credentials

Given I Login to GH URL
When I Click on sign on button
And I Enter "<username>" in username field
And I Enter "<password>" in password field
And I Click on sign in button
Then I verify Error message is displayed

Examples:
| username | password   |
| User1    | Password1  |

@login_valid_Test1 @regression @sridevi
Scenario Outline: Valid credentials

Given I Login to GH URL
When I Click on sign on button
And I Enter "<username>" in username field
And I Enter "<password>" in password field
And I Click on sign in button
Then I verify Error message is displayed

Examples:
| username | password |
| Sridevi  | Sridevi  |

@login_valid_Test2 @regression @sridevi
Scenario Outline: Valid credentials

Given I Login to GH URL
When I Click on sign on button
And I Enter "<username>" in username field
And I Enter "<password>" in password field
And I Click on sign in button
Then I verify Error message is displayed

Examples:
| username | password |
| Sridevi  | Sridevi  |