import webTable from "../../support/pages/webTable";
import formData from "../../fixtures/frontend/registration-data.json";

describe("Web Table Test", () => {
  it("should add, edit and delete a new registration", () => {
    cy.visitDemoQa();
    webTable.goToElements();
    webTable.goToWebTables();
    webTable.clickAddRegistrationForm();
    webTable.fillRegistragionAndSubmit(
      formData.firstName,
        formData.lastName,
        formData.email,
        formData.age,
        formData.salary,
        formData.departament
    );

    webTable.verifyRegistrationIsVisible(formData.firstName)
    webTable.clickEditRegistrationByName(formData.firstName)

    webTable.editRegistrationAndSubmit(
      formData.firstNameEdited,
      formData.lastNameEdited,
      formData.emailEdited,
      formData.ageEdited,
      formData.salaryEdited,
      formData.departamentEdited
    );

    webTable.verifyFirstNameIsEdited(formData.firstNameEdited)

    webTable.deleteRegistrationByName(formData.firstNameEdited)

    webTable.verifyFirstNameIsNotVisible(formData.firstNameEdited)
  });
});
