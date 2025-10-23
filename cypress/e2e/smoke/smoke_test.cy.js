import Constants from "../../support/constants";
describe('Login en SauceDemo usando .env', () => {
  beforeEach(() => {
    cy.visit(Constants.CYPRESS_BASE_URL) // baseUrl viene del .env
  })

  it('Debería iniciar sesión correctamente con credenciales válidas', () => {
    cy.get('#user-name').type(Constants.CYPRESS_USER_EMAIL)
    cy.get('#password').type(Constants.CYPRESS_USER_PASSWORD)
    cy.get('#login-button').click()

    // Verifica que llega al inventario
    cy.url().should('include', '/inventory.html')
    cy.get('.product_label').should('contain', 'Products')
  })

  it('Debería mostrar un error con credenciales inválidas', () => {
    cy.get('#user-name').type('usuario_incorrecto')
    cy.get('#password').type('clave_incorrecta')
    cy.get('#login-button').click()

    // Verifica el mensaje de error
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match any user')
  })
})

