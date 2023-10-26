export class CheckoutPage{

    txt_firstName = '#first-name'
    txt_lastName = '#last-name'
    txt_postalCode = '#postal-code'
    btn_continue = '[data-test="continue"]'

    inputFirstName(firstName: string){
        cy.get(this.txt_firstName).type(firstName)
    }

    inputLastName(lastName: string){
        cy.get(this.txt_lastName).type(lastName)
    }
    inputPostalCode(postalCode: string){
        cy.get(this.txt_postalCode).type(postalCode)
    }

    clickContiue(){
        cy.get(this.btn_continue).click()
    }

    assertCheckoutPage(){
        cy.get('.title').should('have.text','Checkout: Overview')
    }

    assertCheckoutFail(){
        cy.get('[data-test="error"]').should('be.visible')
    }    
    clickCart(){
        cy.get(".shopping_cart_link").click()
        cy.get('.title').should('have.text','Your Cart') 
    }

    clickCheckout(){
        cy.get('[data-test="checkout"]').click()
        cy.get('.title').should("have.text",'Checkout: Your Information')
    }

    fillInformation(firstName: string, lastName: string, postalCode: string){
        this.inputFirstName(firstName)
        this.inputLastName(lastName)
        this.inputPostalCode(postalCode)
        this.clickContiue()
    }

    failFillInformation(firstName: string, postalCode: string){
        this.inputFirstName(firstName)
        this.inputPostalCode(postalCode)
        this.clickContiue()
    }
    
}