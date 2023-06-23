const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "chromeWebSecurity": true,
    "defaultCommandTimeout": 40000,
    "responseTimeout": 40000,
    "requestTimeout": 40000,
    "retries": {
      "runMode": 2,
      "openMode": 2
    },
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/report/mochawesome-report",
      "overwrite": false,
      "html": true,
      "json": false,
      "timestamp": "mmddyyyy_HHMMss",
      "cdn": true,
      "charts": true
    }
  },
});
