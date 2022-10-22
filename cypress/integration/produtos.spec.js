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

    it.only('Ao tentar adicionar um produto, deve aparecer mensagem "Fora de estoque"', () => {

        cy.addProduto('Ariel Roll Sleeve Sweatshirt','M','Purple',4)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',0)
        cy.get('.stock').should('contain', "Fora de estoque")

    });
});