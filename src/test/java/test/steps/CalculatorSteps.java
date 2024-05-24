package test.steps;

import static org.junit.Assert.*;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObject.CalculatorPage;
import static org.hamcrest.CoreMatchers.*;

public class CalculatorSteps {

	private  CalculatorPage page;
    
	@Before
    public void beforeScenario(){
    	System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        WebDriver driver = new ChromeDriver(options);
    	page = PageFactory.initElements(driver, CalculatorPage.class);
    }	
	
    @Given("^I go to the calculator webpage$")
    public void an_add_calculator_with_value() throws Throwable {
    	page.open("http://www.rekenmachine-calculator.nl/");
    }
    
    @When("^I add 1 and 4$")
    public void i_add_a() throws Throwable {
    	page.clickOne();
    	page.clickAdd();
    	page.clickFour();
    }

    @When("^I subtract 4 and 1$")
    public void i_subtract_and() throws Exception {
    	page.clickFour();
    	page.clickSubtract();
    	page.clickOne();
    }

    @When("^I multiply 3 and 4$")
    public void i_multiply_and() throws Exception {
    	page.clickThree();
    	page.clickMultiply();
    	page.clickFour();
    }

    @Then("^the outcome of should be (\\d+)$")
    public void the_outcome_of_should_be(int outcome) throws Throwable {
    	page.clickEqual();
    	assertThat(page.getResult(),  is(""+outcome));
    }
    
    @When("^I (.*) the value of (\\d+) and (\\d+)$")
    public void i_calculate_the_value_of_and(String operator, int value1, int value2) throws Exception {
    	page.clickValue(value1);
    	page.clickOperator(operator);
    	page.clickValue(value2);
    }
	
	@After
    public void afterScenario(){
    	page.close();
    }

//    comentaar 1
}

