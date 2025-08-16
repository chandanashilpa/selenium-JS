const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "genreports/json", // Directory where Cucumber JSON files are stored
  reportPath: "genreports/html", // Output folder for HTML report
  metadata: {
    browser: {
      name: "chrome",
      version: "116",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});
