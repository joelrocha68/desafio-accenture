class BrowserWindow {
    goToAlertsFrameAndWindows() {
        cy.get('a[href="/alertsWindows"]').click()
    }

    goToBrowserWindows() {
        cy.get('.router-link[href="/browser-windows"]').click()
    }

    clickButtonNewWindow() {
        cy.get('#windowButton').click()
    }

    assertSampleMessageVisible() {
        cy.get('#sampleHeading')
            .should('be.visible')
            .and('have.text', 'This is a sample page')
    }
}

export default new BrowserWindow()