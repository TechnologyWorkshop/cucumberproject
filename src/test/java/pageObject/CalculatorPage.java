package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class CalculatorPage {
	protected WebDriver driver;

	public CalculatorPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(name = "one")
	private WebElement oneButton;
	@FindBy(name = "two")
	private WebElement twoButton;
	@FindBy(name = "three")
	private WebElement threeButton;
	@FindBy(name = "four")
	private WebElement fourButton;
	@FindBy(name = "add")
	private WebElement addButton;
	@FindBy(name = "sub")
	private WebElement subtractButton;
	@FindBy(name = "mul")
	private WebElement multiplyButton;
	@FindBy(name = "equal")
	private WebElement equalButton;
	@FindBy(name = "txt")
	private WebElement resultField;

	public void open(String url) {
		driver.get(url);
	}

	public void close() {
		driver.quit();
	}

	public String clickOne() {
		oneButton.click();
		return resultField.getAttribute("value");
	}

	public String clickTwo() {
		twoButton.click();
		return resultField.getAttribute("value");
	}

	public String clickThree() {
		threeButton.click();
		return resultField.getAttribute("value");
	}

	public String clickFour() {
		fourButton.click();
		return resultField.getAttribute("value");
	}

	public String clickEqual() {
		equalButton.click();
		return resultField.getAttribute("value");
	}

	public String clickAdd() {
		addButton.click();
		return resultField.getAttribute("value");
	}
	
	public String clickSubtract() {
		subtractButton.click();
		return resultField.getAttribute("value");
	}
	
	public String clickMultiply() {
		multiplyButton.click();
		return resultField.getAttribute("value");
	}

	public String getResult() {
		return resultField.getAttribute("value");
	}

	public void clickValue(int value) {
      if (value ==1) clickOne();
      else if (value ==2) clickTwo();
      else if (value ==3) clickThree();
      else if (value ==4) clickFour();
	}

	public void clickOperator(String operator) {
	  if (operator.equals("add")) clickAdd();
	  else if (operator.equals("subtract")) clickSubtract();
	  else if (operator.equals("multiply")) clickMultiply();
		
	}

 }
