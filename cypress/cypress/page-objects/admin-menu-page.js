/// <reference types="Cypress" />

import { PostsPage } from "./posts-page"
import { TagsPage } from "./tags-page"

export class AdminMenuPage {
    navigateToPosts() {
        cy.get('a').contains('Posts').click({ force: true });
        return new PostsPage();
    }

    navigateToTags() {
        cy.get('ul.gh-nav-manage a').contains('Tags').click({ force: true });
        return new TagsPage();
    }
}