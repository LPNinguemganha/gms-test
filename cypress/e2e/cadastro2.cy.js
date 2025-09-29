///<reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
beforeEach(() => {
  cy.visit('http://localhost:3000')

});

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve fazer o cadastro de campos obrigatorios', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherCadastro('Fabio' , 'Araujo' , email, '11262626262' , 'Teste@122335' )
    cy.get('#signup-response').should("contain" , "Cadastro realizado com sucesso!")
  })

  it('Deve validar mensagem de erro com o campo nome invalido', () => {
    cy.preencherCadastro('Fabio20' , 'Araujo' , 'fabio@teste.com' , '1126262626' , 'Teste@122335')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  })
})