/// <reference types="Cypress" />

import { logInAsAdmin } from "../support/common";
import { AdminMenuPage } from "../page-objects/admin-menu-page";

const faker = require('faker');

describe('Create Tag', () => {
    it('Should be visible from tags list when user creates a new tag', () => {
        let tagsPage, newTagPage;   
        let adminMenuPage = new AdminMenuPage()
        let tagName = faker.company.companyName();
        let tagDescription = faker.lorem.paragraph();
        logInAsAdmin();

        tagsPage = adminMenuPage.navigateToTags();
        newTagPage = tagsPage.navigateToNewTag();
        newTagPage.setTagName(tagName);
        newTagPage.setTagDescription(tagDescription);
        newTagPage.save();
        adminMenuPage.navigateToTags();

        tagsPage.getTagListItemByTitle(tagName).should('exist');
    });

    it('Should be visible from tags list when user creates a new tag after fixing invalid description', () => {
        let tagsPage, newTagPage;   
        let adminMenuPage = new AdminMenuPage()
        let invalidParagraph = faker.lorem.words(100);
        logInAsAdmin();

        let mockarooApiKey = '9ed04c50';
        let url = `http://my.api.mockaroo.com/tags.json?key=${mockarooApiKey}`;
        
        cy.request('GET', url).then((response) => {
            let tag = response.body[0];
            tagsPage = adminMenuPage.navigateToTags();
            newTagPage = tagsPage.navigateToNewTag();
            newTagPage.setTagName(tag.name);
            newTagPage.setTagDescription(invalidParagraph);
            newTagPage.save();
            cy.wait(2000);
            newTagPage.getTagDescriptionInput().clear({ force: true });
            newTagPage.setTagDescription(tag.description);
            adminMenuPage.navigateToTags();

            tagsPage.getTagListItemByTitle(tag.name).should('exist');
        });
    });

    it('Should be visible from tags list when user creates a new tag after fixing invalid name', () => {
        let tagsPage, newTagPage;   
        let adminMenuPage = new AdminMenuPage()
        let invalidName = faker.lorem.words(40);
        logInAsAdmin();

        let mockarooApiKey = '9ed04c50';
        let url = `http://my.api.mockaroo.com/tags.json?key=${mockarooApiKey}`;
        
        cy.request('GET', url).then((response) => {
            let tag = response.body[0];
            tagsPage = adminMenuPage.navigateToTags();
            newTagPage = tagsPage.navigateToNewTag();
            newTagPage.setTagName(invalidName);
            newTagPage.setTagDescription(tag.description);
            newTagPage.save();
            cy.wait(2000);
            newTagPage.getTagNameInput().clear({ force: true });
            newTagPage.setTagName(tag.name);
            adminMenuPage.navigateToTags();

            tagsPage.getTagListItemByTitle(tag.name).should('exist');
        });
    });
});