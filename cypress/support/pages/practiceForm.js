class PracticeForm {
    goToForm() {
        cy.get('a[href="/forms"]').click()
    }

    goToPracticeForm() {
        cy.get('.router-link[href="/automation-practice-form"]').click()
    }

    fillFirstName (firstName) {
        cy.get('#firstName').type(firstName)
    }

    fillLastName (lastName) {
        cy.get('#lastName').type(lastName)
    }

    fillEmail (email) {
        cy.get('#userEmail').type(email)
    }

    selectGender (gender) {
        cy.get(`input[name="gender"][value="${gender}"]`).check()
    }

    fillMobileNumber (mobileNumber) {
        cy.get('#userNumber').type(mobileNumber)
    }

    fillSubjects (subjects) {
        cy.get('#subjectsInput').type(subjects).click()

        cy.contains('.subjects-auto-complete__option', subjects).click()
    }

    checkHobbies (hobbies) {
        cy.get('#hobbiesWrapper') .contains('label', hobbies) .click() 
    }

    choosePicture (picturePath) {
        cy.get('#uploadPicture').selectFile(picturePath)
    }

    fillCurrentAddress (currentAddress) {
        cy.get('#currentAddress').type(currentAddress)
    }

    selectState (state) {
        cy.get('#state').click().contains('div', state).click()
    }

    selectCity (city) {
        cy.get('#city').click().contains('div', city).click()
    }

    clickSubmitForm() {
        cy.get('#submit').click()
    }

    assertOpenPopup() {
        cy.get('#example-modal-sizes-title-lg').should('be.visible')
    }

    clickClosePopup() {
        cy.get('#closeLargeModal').click()
    }

    closePopupByOutside() {
        cy.get('.fade.modal-backdrop.show').click({ force: true })
    }

    fillFormAndSubmit(firstName, lastName, email, gender, mobileNumber, subjects, hobbies, picturePath, currentAddress, 
        state, city) {
        this.fillFirstName(firstName)

        this.fillLastName(lastName)
        this.fillEmail(email)
        this.selectGender(gender)
        this.fillMobileNumber(mobileNumber)
        this.fillSubjects(subjects)
        this.checkHobbies(hobbies)
        this.choosePicture(picturePath)
        this.fillCurrentAddress(currentAddress)
        this.selectState(state)
        this.selectCity(city)
        
        this.clickSubmitForm()
    }
}

export default new PracticeForm()