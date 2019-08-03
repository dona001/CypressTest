/// <reference types="Cypress" />
import 'cypress-xpath';
  context(' login Senario', () => {
    it('Go to login Page',() => {
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').click()
      cy.get('#email').type('mail')
      cy.get('#passwd').type('abc123')
      cy.get('#SubmitLogin > span').click()
      cy.title().should('include','My account - My Store')
      //cy.get('.logout').click()
    })

      it('Buy a new dresse',() => {
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        debugger
        cy.get(':nth-child(1) > .subcategory-image > .img > .replace-2x').click()
        cy.get('.ajax_add_to_cart_button > span').click()
        cy.screenshot()
        
      })





})
