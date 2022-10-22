/// <reference types = "cypress" />

describe('Funcionalidade wishlist', () => {
    
    beforeEach(() => {
        cy.visit("produtos")
    });
    it('Clicar no produto e adicionar a lista de desejos', () => {

        cy.get('[class="product-block grid"]').eq(4).click()
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button').click()

        cy.get(':nth-child(2) > .text-skin > .count_wishlist').should('contain',1)
        cy.get('[data-title="Browse wishlist"]').should('contain','Browse wishlist')

    });
    
    it('Na página de produtos, devo adicionar produto a lista de desejos', () => {
        var quantidade = 4

        cy.get('[class="product-block grid"]').eq(quantidade)
        cy.get('[class="yith-wcwl-icon fa fa-heart-o"]').eq(quantidade).should('be.hidden').invoke('show').click({ force: true })
        cy.get(':nth-child(2) > .text-skin > .count_wishlist').should('contain',1)
    });
});