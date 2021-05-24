/// <reference types="Cypress" />

import { TagsPage } from "./tags-page"

export class NewTagPage {
    setTagName(tagName) {
        this.getTagNameInput().type(tagName, { force: true });
    }

    getTagNameInput() {
        return cy.get('input[id="tag-name"]');
    }

    setTagDescription(tagDescription) {
        this.getTagDescriptionInput().type(tagDescription, { force: true });
    }
    
    getTagDescriptionInput() {
        return cy.get('textarea[id="tag-description"]');
    }

    save() {
        cy.get('button').contains('Save').click({ force: true });
    }

    navigateToTags() {
        cy.get('header a[href^="#/tags/"]').click();        
        return new TagsPage();
    }
}