/// <reference  types = "Cypress"/>

describe("Test contact-us form via  webdriveruniversity",()=> {
    
    // TESTCASE ONE
    it("should be able to sumit contact us form successfully",() =>{
        
        cy.visit('http://www.webdriveruniversity.com/')
        //cy.get('#contact-us > div > div.section-title > h1').click();
        cy.get('#contact-us').click();
        
        // If for the few elements if the height and width is not set 0px
        // we can use option {force :true} to click on element by force.
        //cy.get('#contact-us').click({force:true})

    })

    // TESTCASE2 (Comple test case)
    
    it("should be able to sumit contact us form successfully",() =>{
        
       cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
       cy.get('input[name ="first_name"]').type("Chinmay")
       cy.get('input[name ="last_name"]').type("Deshpande")
       cy.get('input[name ="email"]').type("chinmaydeshpande010@gmail.com")
       cy.get('textarea[name ="message"]').type("How can I learn cypress effectively")
       cy.get('#form_buttons > input:nth-child(2)').click()
       cy.get('h1').should('have.text','Thank You for your Message!')
    })

    // TESTCASE 3 (Negative scenario)

    it.only("should unable to submit form without required fields",() =>{
       cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
       cy.get('input[name ="first_name"]').type("Chinmay")
       cy.get('input[name ="last_name"]').type("Deshpande")
       cy.get('textarea[name ="message"]').type("How can I learn cypress effectively")
       cy.get('#form_buttons > input:nth-child(2)').click()
       cy.get('body').contains('Error: all fields are required')
    })

    // TEST CASE 4
    // USE OF CY.DOCUMENT(), CY.TITLE() and CY.URL()

    it.only("should unable to submit form without required fields",() =>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','Contact-Us')
        cy.get('input[name ="first_name"]').type("Chinmay")
        cy.get('input[name ="last_name"]').type("Deshpande")
        cy.get('textarea[name ="message"]').type("How can I learn cypress effectively")
        cy.get('#form_buttons > input:nth-child(2)').click()
        cy.get('body').contains('Error: all fields are required')
     })
 








})
