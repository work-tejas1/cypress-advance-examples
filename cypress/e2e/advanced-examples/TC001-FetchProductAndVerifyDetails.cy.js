/// <reference types="cypress" />

describe('TC001 - Fetch Product Details and Verify Product Properties', () => {
  const apiUrl = 'https://automationexercise.com/api/searchProduct';

  it('GET - Fetch Product List', () => {
    cy.request('GET', apiUrl).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
      expect(response.body).to.exist;
      const parsedBody = JSON.parse(response.body);
      expect(parsedBody.products).to.not.null;
      //cy.log(parsedBody); // Optional: Log the response body
    });
  });

  it('POST - Check desired product name, price and category', () => {
    const desiredProductName = 'Fancy Green Top';
    const desiredProductPrice = 'Rs. 700';
    const desiredProductCategory = 'Tops';

    cy.request({
      method: 'POST',
      url: apiUrl,
      form: true,
      body: {
        search_product: desiredProductName,
      },
    }).then(response => {
      expect(response.status).to.eq(200);
      const parsedBody = JSON.parse(response.body);
      cy.log(parsedBody.products); // Optional: Log the response body
      expect(parsedBody.products[0].name).to.eq(desiredProductName);
      expect(parsedBody.products[0].price).to.eq(desiredProductPrice);
      expect(parsedBody.products[0].category.category).to.eq(
        desiredProductCategory,
      );
    });
  });
});
