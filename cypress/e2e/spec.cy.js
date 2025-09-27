///<reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://localhost:3000')
    cy.get('#signup-firstname').type("Fábio")
    cy.get('#signup-lastname').type("Araujo")
    cy.get('#signup-email').type("fabio@testes.com")
    cy.get('#signup-phone').type("1198325684252")
    cy.get('#signup-password').type("Teste&2020")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain" , "Cadastro realizado com sucesso!")
  })
})