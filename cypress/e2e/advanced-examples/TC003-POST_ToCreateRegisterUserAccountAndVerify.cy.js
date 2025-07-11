/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('TC003 - POST_ToCreateRegisterUserAccountAndVerify', () => {
  const apiUrl = 'https://automationexercise.com';
  const randomUsername = faker.internet.username();
  const randomEmail = faker.internet.email();

  it(`POST - Create: ${randomEmail} as a test user`, () => {
    cy.request({
      method: 'POST',
      url: apiUrl + '/api/createAccount',
      form: true,
      body: {
        name: randomUsername,
        email: randomEmail,
        password: 'test123',
        firstname: 'Test',
        lastname: 'User',
        company: 'Test Company',
        address1: '123 Test St',
        address2: 'Suite 456',
        city: 'Test City',
        state: 'Test State',
        country: 'Test Country',
        zipcode: '12345',
        mobile_number: '1234567890',
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      cy.log(`Created user with email: ${randomEmail}`);
      cy.log(response); // Optional: Log the response body
      cy.wrap(randomEmail).as('registeredEmail'); // Save email for later use
    });
  });

  it(`GET - Fetch user details by email and verify: ${randomUsername}`, function () {
    cy.request({
      method: 'GET',
      url: apiUrl + '/api/getUserDetailByEmail',
      qs: { email: randomEmail }, // query parameter
    }).then(response => {
      expect(response.status).to.eq(200);
      const parsedBody = JSON.parse(response.body);
      cy.log(parsedBody); // Check other details in the response
      expect(parsedBody.user.email).to.eq(randomEmail);
      expect(parsedBody.user.name).to.eq(randomUsername);
      cy.wrap(randomUsername).as('registeredUsername'); // Save username for later use
      expect(parsedBody.user.id).to.be.a('number');
    });
  });
});
