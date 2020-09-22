/// <reference  types = "Cypress"/>

describe("Verify the product is present on UI page",()=> {
    
    it("Should be able select by heading (directly by selecting the element)",() =>{
        cy.visit('https://automationteststore.com/')
        cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.fixed_wrapper > div > a').click()
        
    })

    it("Select the element by text(contains)",() =>{
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    })

    it("Select the element by index(eq)",() =>{
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()

    })

   
})
