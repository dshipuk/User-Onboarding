describe("Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    // Helpers
    /*
     Get the Name input and type a name in it.
     Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
    Get the Email input and type an email address in it
    Get the password input and type a password in it
    Set up a test that will check to see if a user can check the terms of service box
    Check to see if a user can submit the form data
    Check for form validation if an input is left empty
    */
    const nameInput = () => cy.get("input[name=username]")
    const emailInput = () => cy.get("input[name=email]")
    const passInput = () => cy.get("input[name=password]")
    const tosBox = () => cy.get("input[name=tos]")
    const submit = () => cy.get("input[type=submit]")

    it("Sanity Check", () => {
        expect(1+1).to.equal(2)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
    })

    it("Check that Inputs exist", () => {
        nameInput().should("exist")
        emailInput().should("exist")
        passInput().should("exist")
        tosBox().should("exist")
        submit().should("exist")
    })

    it("Type Text in Input Fields", () => {
        nameInput().should("have.value", "").type("Temp").should("have.value", "Temp")
        emailInput().should("have.value", "").type("temp@gmail.com").should("have.value", "temp@gmail.com")
        passInput().should("have.value", "").type("test123").should("have.value", "test123")
    })

    it("Test TOS CheckBox", () => {
        tosBox().should("not.be.checked").check().should("be.checked").uncheck().should("not.be.checked")
    })

    it("Test If User Can Submit Data", () => {
        nameInput().type("Test")
        emailInput().type("test@gmail.com")
        passInput().type("test123")
        tosBox().check()
        submit().click()
        cy.contains("test@gmail.com")
        nameInput().should("be.empty")
        emailInput().should("be.empty")
        passInput().should("be.empty")
        tosBox().should("not.be.checked")
    })

    it("Check If Validation is Working", () => {
        nameInput().type("T").clear()
        cy.contains(/username required/i)
        emailInput().type("123")
        cy.contains(/Must be Valid email/i)
        passInput().type("1")
        cy.contains(/Password must be 6 chars long/i)
        tosBox().check().uncheck()
        cy.contains(/must accept tos/i)
    })



})