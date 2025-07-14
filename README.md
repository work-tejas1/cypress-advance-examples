# Demonstration of cypress advance examples and plugins

## List of examples

1. Item 1: `TC001 - Fetch Product Details and Verify Product Properties` = Fetch Product List and product name, price and category
2. Item 2: `cypress_each_example.cy.js` = Demonstration of cypress each plugin
3. Item 3: `TC002 - API endpoint status check and Validate user emails` = Verify multiple endpoints
4. Item 4: `TC003 - POST_ToCreateRegisterUserAccountAndVerify` = Create user and verify // Added Faker.js
   1. Item TBD
   2. Item TBD
5. Item 5: `TC004 - Saucedemo verify login using different credentials` =
   - Introduces a new E2E test for verifying login with different credentials on Saucedemo, including use
     fixtures and custom commands.
   - Adds _LoginPage and Constants page objects,_ updates Cypress config for baseUrl and viewport, and implements a _custom logoutSession command._
   - Added custom code which hides XHR/request logs in the Cypress UI for cleaner output.
