$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/Calculator.feature");
formatter.feature({
  "name": "Calculator",
  "description": "  As a user\n  I want to use a calculator webpage\n  So that I can calculate with numbers",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a number",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the calculator webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.an_add_calculator_with_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add 1 and 4",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_add_a()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 5",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_outcome_of_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Subtract a number",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the calculator webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.an_add_calculator_with_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I subtract 4 and 1",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_subtract_and()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 3",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_outcome_of_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiply a number",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the calculator webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.an_add_calculator_with_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I multiply 3 and 4",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_multiply_and()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 12",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_outcome_of_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Calculation of numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to the calculator webpage",
  "keyword": "Given "
});
formatter.step({
  "name": "I \u003coperator\u003e the value of \u003cvalue1\u003e and \u003cvalue2\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the outcome of should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "operator",
        "value1",
        "value2",
        "result"
      ]
    },
    {
      "cells": [
        "add",
        "3",
        "3",
        "6"
      ]
    },
    {
      "cells": [
        "add",
        "3",
        "1",
        "4"
      ]
    },
    {
      "cells": [
        "subtract",
        "4",
        "1",
        "3"
      ]
    },
    {
      "cells": [
        "subtract",
        "2",
        "2",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Calculation of numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the calculator webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.an_add_calculator_with_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the value of 3 and 3",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_calculate_the_value_of_and(String,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 6",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_outcome_of_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Calculation of numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the calculator webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.an_add_calculator_with_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the value of 3 and 1",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_calculate_the_value_of_and(String,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 4",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_outcome_of_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Calculation of numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the calculator webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.an_add_calculator_with_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I subtract the value of 4 and 1",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_calculate_the_value_of_and(String,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 3",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_outcome_of_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Calculation of numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the calculator webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.an_add_calculator_with_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I subtract the value of 2 and 2",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_calculate_the_value_of_and(String,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 0",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_outcome_of_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});