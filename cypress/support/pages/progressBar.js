class ProgressBar {
    goToWidgets() {
        cy.get('a[href="/widgets"]').click()
    }
    goToProgressBar() {
        cy.get(".router-link[href='/progress-bar']").click()
    }

    clickButtonStartStop() {
        cy.get('#startStopButton').click()
    }

    clickButtonReset() {
        cy.get('#resetButton').click()
    }

    getProgressBar(options = {}) {
        return cy.get('#progressBar [role="progressbar"]', options)
    }
}

export default new ProgressBar()