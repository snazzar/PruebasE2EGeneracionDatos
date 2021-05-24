/// <reference types="Cypress" />

import { LoginPage } from "../page-objects/login-page";

describe('Login', () => {
    let validLogin, invalidLogins;

    before(() => {
        cy.fixture('validLogin').then((data) => {
            validLogin = data;
        });

        cy.fixture('invalidLogins').then((data) => {
            invalidLogins = data;
        });
    });

    it('Should redirect to admin site when user provides valid credentials', () => {
        let loginPage = new LoginPage();        
        loginPage.navigate();

        loginPage.setUsername(validLogin.username);
        loginPage.setPassword(validLogin.password);
        loginPage.login();

        cy.location('hash').should('eq', '#/site');
    });

    // it('Should show an error message when user provides no credentials', () => {
    //     let loginPage = new LoginPage();
    //     loginPage.navigate();

    //     loginPage.login();

    //     loginPage.getLoginButton().should('include.text', 'Retry');
    //     loginPage.getUsernameInput().should('have.css', 'border-color', 'rgb(240, 82, 48)');
    //     loginPage.getPasswordInput().should('have.css', 'border-color', 'rgb(240, 82, 48)');
    //     loginPage.getMainElement().should('include.text', 'Please fill out the form to sign in');
    //     cy.location('hash').should('eq', '#/signin');
    // });

    it('Should show an error message when user provides an email of a non existing user', () => {
        let loginPage = new LoginPage();
        loginPage.navigate();

        loginPage.setUsername(invalidLogins[0].username);
        loginPage.setPassword(invalidLogins[0].password);
        loginPage.login();

        loginPage.getLoginButton().should('include.text', 'Retry');
        loginPage.getMainElement().should('include.text', 'Please fill out the form to sign in');
        cy.location('hash').should('eq', '#/signin');
    });

    it('Should show an error message when user provides valid email and invalid password', () => {
        let loginPage = new LoginPage();
        loginPage.navigate();

        loginPage.setUsername(validLogin.username);
        loginPage.setPassword(invalidLogins[0].password);
        loginPage.login();

        loginPage.getLoginButton().should('include.text', 'Retry');
        loginPage.getPasswordInput().should('have.css', 'border-color', 'rgb(240, 82, 48)');
        loginPage.getMainElement().should('include.text', 'Your password is incorrect');
        cy.location('hash').should('eq', '#/signin');
    });
});