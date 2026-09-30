class WebTable {
    goToElements() {
        cy.get('a[href="/elements"]').click()
    }

    goToWebTables() {
        cy.get('.router-link[href="/webtables"]').click()
    }

    clickAddRegistrationForm() {
        cy.get('#addNewRecordButton').click()
    }

    fillFirstName(firstName) {
        cy.get('#firstName').clear().type(firstName)
    }

    fillLastName (lastName) {
        cy.get('#lastName').clear().type(lastName)
    }

    fillEmail (email) {
        cy.get('#userEmail').clear().type(email)
    }

    fillAge (age) {
        cy.get('#age').clear().type(age)
    }

    fillSalary (salary) {
        cy.get('#salary').clear().type(salary)
    }

    fillDepartament (departament) {
        cy.get('#department').clear().type(departament)
    }

    clickSubmitForm() {
        cy.get('#submit').click()
    }

    verifyRegistrationIsVisible(firstName) {
        cy.contains('td', firstName)
          .should('be.visible')
    }

    fillRegistragionAndSubmit(firstName, lastName, email, age, salary, departament) {
        this.fillFirstName(firstName)
        this.fillLastName(lastName)
        this.fillEmail(email)
        this.fillAge(age)
        this.fillSalary(salary)
        this.fillDepartament(departament)
        this.clickSubmitForm()
    }

    clickEditRegistrationByName(firstName) {
        cy.contains('td', firstName)
            .closest('tr')
            .find('[title="Edit"]')
            .click({ force: true })

        cy.get('#firstName')
            .should('be.visible')
            .and('not.be.disabled')
    }

    editRegistrationAndSubmit(firstNameEdited, lastNameEdited, emailEdited, ageEdited, salaryEdited, departamentEdited) {
        this.fillFirstName(firstNameEdited)
        this.fillLastName(lastNameEdited)
        this.fillEmail(emailEdited)
        this.fillAge(ageEdited)
        this.fillSalary(salaryEdited)
        this.fillDepartament(departamentEdited)
        this.clickSubmitForm()
    }

    verifyFirstNameIsEdited(firstName) {
        cy.contains('td', firstName)
          .should('be.visible')
    }

    deleteRegistrationByName(firstName) {
        cy.contains('tr', firstName)
            .find('[title="Delete"]').click({ force: true })
    }

    verifyFirstNameIsNotVisible(firstName) {
        cy.contains('td', firstName)
          .should('not.exist')
    }
}

export default new WebTable()