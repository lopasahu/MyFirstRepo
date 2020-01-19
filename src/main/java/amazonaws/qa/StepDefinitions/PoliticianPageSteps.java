package amazonaws.qa.StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import amazonaws.qa.base.TestBase;
import amazonaws.qa.pages.CreatePoliticianPage;
import amazonaws.qa.util.TestUtil;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class PoliticianPageSteps extends TestBase {

	CreatePoliticianPage createpoliticianPage;

	@Given("^User Opens browser$")
	public void user_Opens_browser() {

		TestBase.initialization();
		createpoliticianPage = new CreatePoliticianPage();
	}

	@Then("^User is on Registation Page$")
	public void user_is_on_Registation_Page() {

		String title = createpoliticianPage.ValidateRegPageTitle();
		Assert.assertEquals("Have fun testing", title);
	}

	@Then("^User enters the details \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_the_details(String username, String country, String date, String url, String risktype) {
		createpoliticianPage.createPolitician(username, country, date, url, risktype);
		// validate the date format, it should be dd/mm/yyyy format, else fail
		Assert.assertEquals("Input Date format is wrong", true, TestUtil.isThisDateValid(date, "dd/mm/yyyy"));
	}

	@Then("^User clicks on Save button$")
	public void user_clicks_on_Save_button() {
		createpoliticianPage.saveButton();
	}

	@Then("^User gets a popup user being added with \"(.*)\"$")
	public void user_gets_a_popup_user_being_added_with(String username) {
		WebElement modal = driver.findElement(By.xpath("//div[@class='modal-body']"));
		String actualPopUpText = modal.getText();
		Assert.assertEquals("Name Is not saved correctly", true, actualPopUpText.contains(username));
		WebElement modal1 = driver.findElement(By.xpath("//div[@class='modal-footer']//button[@type]"));
		modal.click();
	}

	@Then("^User accepts the popup and close the browser$")
	public void user_accepts_the_popup_and_close_the_browser() {
		driver.quit();
	}

}
