class Sortable {
    goToInteractions() {
        cy.get('a[href="/interaction"]').click()
    }

    goToSortable() {
        cy.get('.router-link[href="/sortable"]').click()
    }

    getListItems() {
        return cy.get('#demo-tabpane-list .list-group-item')
    }
}

export default new Sortable()