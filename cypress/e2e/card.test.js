// <reference types="cypress" />

describe('Тест полей ввода', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234/');
    })

    it('Проверка корректных введенных данных', () => {
        
        cy.get('name').type('ANNA ANNA')
        cy.get('cardnumber').type('1234 1234 1234 1234')
        cy.get('securitycode').type('234')
        cy.get('.send').click();
        cy.get('.send-message').should('have.textContent', 'Данные введены верно');
    })

    it('Проверка некорректных введенных данных', () => {
        
        cy.get('name').type('ANNA ')
        cy.get('cardnumber').type('1234 1234 1234 1234')
        cy.get('securitycode').type('234')
        cy.get('.send').click();
        cy.get('.send-message').should('have.textContent', 'Данные введены не верно');
    })
})