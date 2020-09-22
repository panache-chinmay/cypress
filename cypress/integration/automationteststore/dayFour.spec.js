/// <reference  types = "Cypress"/>

describe("Test contact-us form via  automationteststore",()=> {
    
    // TESTCASE ONE

    // All selectors are copied from cypress Test runner
    it("should be able to sumit contact us form successfully",() =>{
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('Chinmay')
        cy.get('#ContactUsFrm_email').type('chinmaydeshpande010@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Do you really take bulk orders?')
        cy.get('.col-md-6 > .btn').click()
       
    })


    // Customised css

    // Test Case Two

    it("should be able to sumit contact us form successfully",() =>{
        cy.visit('https://automationteststore.com/')
        cy.get('li > a[href = "https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type('Chinmay')
        cy.get('#ContactUsFrm_email').type('chinmaydeshpande010@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type('Do you really take bulk orders?')
        cy.get('button[title = "Submit"]').click()
        cy.get('#maincontainer > div > div > div > div > section > p:nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        
    })


    









})
