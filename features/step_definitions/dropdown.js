const { Given, When, Then } = require("@cucumber/cucumber");
require("chromedriver");
const { By, Builder, Capabilities } = require("selenium-webdriver");
const capabilities = Capabilities.chrome();
capabilities.set("chromeoptions", { w3c: false });
const assert = require("assert");

Given("dropdown is visible", async function () {
  this.dropdown = await this.driver.findElement(
    By.className("product_sort_container")
  );
});
When("I select an option", async function () {
  await this.dropdown.findElement(By.xpath("//option[@value='za']")).click();
});
Then("Results should be sorted", async function () {
  let displayed = await this.driver
    .findElement(
      By.xpath(
        "(//div[@class='inventory_item_label'])[1]//div[contains(text(),'Test')]"
      )
    )
    .isDisplayed();

  assert(displayed, "Not sorted");
});
