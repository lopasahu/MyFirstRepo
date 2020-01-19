package amazonaws.qa.pages;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import amazonaws.qa.base.TestBase;
import amazonaws.qa.util.TestUtil;
import junit.framework.Assert;

public class CreatePoliticianPage extends TestBase {

	// Define Page object/Element

	@FindBy(xpath = "//h2[contains(text(),'New entity')]")
	WebElement newEntity;

	@FindBy(id = "fullName")
	WebElement username;

	@FindBy(id = "country")
	WebElement country;

	@FindBy(xpath = "//input[@placeholder='date placeholder']")
	WebElement date;

	@FindBy(id = "position")
	WebElement position;

	@FindBy(id = "url")
	WebElement url;

	@FindBy(id = "risk")
	WebElement risktype;

	@FindBy(xpath = "//button[@class='btn btn-secondary']")
	WebElement saveButton;

	// Initializing Page Objects/Elements

	public CreatePoliticianPage() {
		PageFactory.initElements(driver, this); // this stands for all variables in the current class

	}

	// Define Actions on the Page

	public String ValidateRegPageTitle() {
		return driver.getTitle();
	}

	public boolean ValidateFormDisplayed() {
		return newEntity.isDisplayed();
	}

	public void createPolitician(String fname, String cname, String dt, String surl, String risk) {
		username.sendKeys(fname);
		country.sendKeys(cname);
		date.sendKeys(dt);
		position.sendKeys(surl);
		url.sendKeys(surl);
		Select dropDown = new Select(risktype);
		dropDown.selectByVisibleText(risk);
	}

	public void saveButton() {
		saveButton.click();
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
