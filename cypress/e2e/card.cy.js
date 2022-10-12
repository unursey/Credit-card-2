// <reference types="cypress" />

describe('Тест полей ввода', () => {
    beforeEach(() => {
      cy.visit('https://unursey.github.io/Credit-card-2/');
    })

    it('Проверка корректных введенных данных', () => {
        
        cy.get('[id="name"]').type('ANNA ANNA')
        cy.get('[id="cardnumber"]').type('1234 1234 1234 1234')
        cy.get('[id="securitycode"]').type('234')
        cy.get('.send').click();
        cy.get('.send-message').should('have.text', 'Данные введены верно');
    })

    it('Проверка некорректных введенных данных', () => {
        
        cy.get('[id="name"]').type('ANNA ')
        cy.get('[id="cardnumber"]').type('1234 1234 1234 1234')
        cy.get('[id="securitycode"]').type('234')
        cy.get('.send').click();
        cy.get('.send-message').should('have.text', 'Данные введены не верно');
    })
})