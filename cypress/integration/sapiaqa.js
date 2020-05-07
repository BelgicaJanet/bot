describe("sapia app", () => {
    it("visit app", () => {
        cy.visit('/');
        cy.get('.form-control').type("73993583{enter}");
        cy.get('#defaultUnchecked6').check({force: true});
        cy.get('.btn').click();
        cy.get('.form-group > :nth-child(3)').click();
        cy.get('#defaultUnchecked4').check({force: true});
        cy.get('.btn').click();
        /*cy.get('#defaultUnchecked10').check({force: true});
        cy.get('.btn').click();
        cy.get('.flex-center > :nth-child(2)').click();
        cy.get('.input-checkbox').type("San Martin de Porres{enter}");
        cy.get('.btn').click();*/
        cy.contains('Gracias por tu tiempo.');
    })
})
