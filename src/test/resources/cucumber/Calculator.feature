Feature: Calculator
  As a user
  I want to use a calculator webpage
  So that I can calculate with numbers


Scenario:  Add a number
Given I go to the calculator webpage
When I add 1 and 4
Then the outcome of should be 6

Scenario:  Subtract a number
Given I go to the calculator webpage
When I subtract 4 and 1
Then the outcome of should be 3

Scenario:  Multiply a number
Given I go to the calculator webpage
When I multiply 3 and 4
Then the outcome of should be 12

Scenario Outline:  Calculation of numbers
Given I go to the calculator webpage
When I <operator> the value of <value1> and <value2>
Then the outcome of should be <result>

Examples:
|operator	|value1	|value2	|result	|
|add		|3		|3		|6		|
|add		|3		|1		|4		|
|subtract	|4		|1		|3		|
|subtract	|2		|2		|0		|
