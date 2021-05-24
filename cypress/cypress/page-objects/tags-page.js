/// <reference types="Cypress" />

import { NewTagPage } from "./new-tag-page";

export class TagsPage {
    getTagListItemByTitle(tagName) {
        return cy.get('ol.tags-list a').contains(tagName).closest('li');
    }

    navigateToNewTag() {
        cy.get('a[href="#/tags/new/"]').first().click({ force: true });
        return new NewTagPage();
    }
}