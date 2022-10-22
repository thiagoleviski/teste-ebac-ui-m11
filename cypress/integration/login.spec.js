/// <reference types = "cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit("minha-conta")
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso - usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20 (não é teste_aluno20? Sair)')
    });

    it.only('Deve fazer login com sucesso - usando fixture', () => {
       cy.fixture("perfil").then(()=>{
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20 (não é teste_aluno20? Sair)')
       })
    });



    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username').type('ebax@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')

    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });
});