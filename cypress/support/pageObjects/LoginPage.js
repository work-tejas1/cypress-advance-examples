class LoginPage {
  getDataQA(term, childEle = '') {
    return cy.get(`[data-test="${term}"] ${childEle}`);
  }

  errorCircleIcons() {
    return cy.get("[data-icon='times-circle']");
  }

  menuButton() {
    return cy.get("[id='react-burger-menu-btn']");
  }

  inventoryItem() {
    return cy.get('.inventory_item');
  }

  title() {
    return cy.get('.title');
  }
}

export default LoginPage;
