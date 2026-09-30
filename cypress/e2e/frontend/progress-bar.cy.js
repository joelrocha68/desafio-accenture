import progressBar from "../../support/pages/progressBar";

describe("Progress Bar", () => {
  it("should stop the progress bar before 25%, complete to 100% and click in reset", () => {
    cy.visitDemoQa();

    progressBar.goToWidgets();
    progressBar.goToProgressBar();
    progressBar.clickButtonStartStop();

    progressBar.getProgressBar({ timeout: 5000 })
        .should('have.attr', 'aria-valuenow', '20')

    progressBar.clickButtonStartStop();
    progressBar.clickButtonStartStop();

    progressBar.getProgressBar({ timeout: 15000 })
        .should('have.attr', 'aria-valuenow', '100')

    progressBar.clickButtonReset();
  });
});