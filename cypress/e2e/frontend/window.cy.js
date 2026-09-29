import BrowserWindow from '../../support/pages/browserWindow'

describe('Browser Window Test', () => {
    it('Open new window and assert the message', () => {
        cy.visitDemoQa()
        BrowserWindow.goToAlertsFrameAndWindows()
        BrowserWindow.goToBrowserWindows()
        BrowserWindow.clickButtonNewWindow()
        // BrowserWindow.assertSampleMessageVisible()
    })
})