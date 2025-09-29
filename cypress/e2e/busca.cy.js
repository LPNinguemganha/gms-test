///<reference types="cypress"/>

const { afterEach } = require("mocha");

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve buscar filmes com sucesso', () => {
    cy.get('#search-input').type('Hobbit')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain', 'Hobbit')

    it('Deve buscar filmes com sucesso de uma lista', () => {
      cy.fixtures('filmes').then((filmes) => {
        cy.get('#search-input').type(filmes[2].titulo)
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', filmes[2].titulo)
      }

      )
    })
  });
  it('Deve buscar filmes com sucesso da lista inteira', () => {
    cy.fixture('filmes').each((filmes) => {
      cy.get('#search-input').clear().type(filmes.titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain', filmes.titulo)
    }

    )
  }
  )
})