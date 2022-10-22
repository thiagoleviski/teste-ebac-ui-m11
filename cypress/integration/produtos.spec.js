/// <reference types = "cypress" />

describe('Funcinalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit("produtos")
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            // .first()
            // .last()
            // .eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Ao tentar adicionar um produto, deve aparecer mensagem "Fora de estoque"', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',0)
        cy.get('.stock').should('contain', "Fora de estoque")

    });
});