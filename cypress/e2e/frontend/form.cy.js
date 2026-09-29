import practiceForm from '../../support/pages/practiceForm'
import formData from '../../fixtures/frontend/form-data.json'

describe('form test', () => {
  it('Fill form and Submit', () => {
    cy.visitDemoQa()
    practiceForm.goToForm()
    practiceForm.goToPracticeForm()
    practiceForm.fillFormAndSubmit(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.gender,
      formData.mobileNumber,
      formData.subjects,
      formData.hobbies,
      formData.picturePath,
      formData.currentAddress,
      formData.state,
      formData.city
    )

    practiceForm.assertOpenPopup()
    practiceForm.closePopupByOutside()
  })
})