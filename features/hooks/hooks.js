const { Before, After } = require("@cucumber/cucumber");
require("chromedriver");
const { By, Builder, Capabilities } = require("selenium-webdriver");
const capabilities = Capabilities.chrome();
capabilities.set("chromeoptions", { w3c: false });
Before(async function () {
  this.driver = new Builder().withCapabilities(capabilities).build();
});
After(async function () {
  this.driver.quit();
});
