/// <reference types = "cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit("minha-conta")
    });
    it.only('Deve completar o pré cadastro com sucesso e preencher o endereço de faturamento', () => {
        let nomeFaker2 = faker.name.firstName()
        let sobrenomeFaker2 = faker.name.lastName()
        let emailFaker2 = faker.internet.email(nomeFaker2)

        cy.preCadastro(emailFaker2, "teste@teste!", nomeFaker2, sobrenomeFaker2)
    })


    it('Deve completar o pré cadastro com sucesso e preencher o endereço de faturamento', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')





        // A partir daqui adicionei o preenchimento do endereço de faturamento

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#select2-billing_country-container').click()
        cy.get('[class="select2-results__options"]').contains('li', 'Brasil').click()
        cy.get('#billing_address_1').type('Rua X')
        cy.get('#billing_city').type('Campinas')
        cy.get('#select2-billing_state-container').click()
        cy.get('[class="select2-results__options"]').contains('li', 'São Paulo').click()
        cy.get('#billing_postcode').type('13000-000')
        cy.get('#billing_phone').type(19999999999)
        cy.get('.button').click()

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        cy.get(':nth-child(1) > address').should('contain', `${nomeFaker} ${sobrenomeFaker}`)
        cy.get(':nth-child(1) > address').should('contain', `Rua X`)
        cy.get(':nth-child(1) > address').should('contain', `Campinas`)
        cy.get(':nth-child(1) > address').should('contain', `São Paulo`)
        cy.get(':nth-child(1) > address').should('contain', `13000-000`)
    })
})