const { Given, When, Then } = require("@cucumber/cucumber");
require("chromedriver");
const { By, Builder, Capabilities } = require("selenium-webdriver");
const capabilities = Capabilities.chrome();
capabilities.set("chromeoptions", { w3c: false });
const assert = require("assert");

Given("I am on login page", async function () {
  this.driver.get("https://www.saucedemo.com");
});
When("I enter valid creds", async function () {
  await this.driver.findElement(By.id("user-name")).sendKeys("standard_user");
  await this.driver.findElement(By.id("password")).sendKeys("secret_sauce");
  await this.driver.findElement(By.id("login-button")).click();
});
Then("I log into products page", async function () {
  let element = await this.driver.findElements(
    By.xpath('//span[contains(text(),"Products")]')
  );
  let present = element.length;
  assert(present > 0, "Not logged in");
});
