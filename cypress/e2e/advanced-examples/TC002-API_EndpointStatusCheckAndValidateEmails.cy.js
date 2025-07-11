/// <reference types="cypress" />

describe('TC002 - API endpoint status check and Validate user emails', () => {
  const baseUrl = 'https://formatjsononline.com/api';

  it('check All endpoint responses', () => {
    //const baseUrl = 'https://formatjsononline.com/api';
    const endpoints = ['/users', '/users/usr_1', '/users/stats'];

    endpoints.forEach(endpoint => {
      cy.request(baseUrl + endpoint).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.exist;
      });
    });
  });

  it('check All endpoint responses and Validate user emails', () => {
    //const baseUrl = 'https://formatjsononline.com/api';
    const emails = [
      'john.doe@example.com',
      'jane.smith@example.com',
      'mike.johnson@example.com',
    ];

    cy.request(baseUrl + '/users').then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
      expect(response.body.data.users[2]).to.have.property(
        'status',
        'inactive',
      );
      expect(response.body.data.users)
        .to.be.an('array')
        .and.have.length(emails.length);
      response.body.data.users.forEach((user, index) => {
        expect(user).to.have.property('email', emails[index]);
        expect(user).to.include.all.keys('email', 'id', 'status');
      });
    });
  });
});
