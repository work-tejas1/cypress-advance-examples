const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    screenshotOnRunFailure: true, // Auto-screenshots on failures
    viewportWidth: 1080, // Browser width (px)
    viewportHeight: 720, // Browser height (px)
  },
});
