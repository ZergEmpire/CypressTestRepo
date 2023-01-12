/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.xpath('//div[@id = \"utilities\"]/h2[contains(text(), \"Commands\")]')
    cy.xpath
  })
})