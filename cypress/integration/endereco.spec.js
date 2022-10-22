/// <reference types = "cypress" />
const perfil = require('../fixtures/perfil.json')
const dadosEndereco = require('../fixtures/endereco.json')
import EnderecoPage from "../support/page-objects/endereco.page"

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(perfil.usuario, perfil.senha)
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Thiago', 'Antoneli', 'EBAC', 'Brasil', 'Rua J', '1209', 'Campinas', 'São Paulo', '13000-000', '19999999999', 'thiago.antoneli@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando massa de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});