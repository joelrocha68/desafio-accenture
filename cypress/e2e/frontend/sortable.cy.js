import sortable from '../../support/pages/sortable'

describe('Sortable', () => {
    it('Verify sortable items', () => {
        cy.visitDemoQa()

        sortable.goToInteractions()
        sortable.goToSortable()

        sortable.getListItems()
            .should('have.length', 6)
    })
})