/// <reference types="Cypress" />

import { AdminMenuPage } from "../page-objects/admin-menu-page";
import { LoginPage } from "../page-objects/login-page";

export function logInAsAdmin() {
    cy.fixture('validLogin').then((validLogin) => {
        let loginPage = new LoginPage();
        loginPage.navigate();
        loginPage.setUsername(validLogin.username);
        loginPage.setPassword(validLogin.password);
        loginPage.login();
    });
}

export function createPostAndPublish(postTitle, postContent) {
    let postListPage, newPostPage;   
    let adminMenuPage = new AdminMenuPage()

    postListPage = adminMenuPage.navigateToPosts();
    newPostPage = postListPage.navigateToNewPost();
    newPostPage.setPostTitle(postTitle);
    newPostPage.setPostContent(postContent);
    newPostPage.openPublishMenu();
    newPostPage.publish();
    newPostPage.navigateToPosts();
}

export function createDraftPost(postTitle, postContent) {
    let postListPage, newPostPage;   
    let adminMenuPage = new AdminMenuPage()   

    postListPage = adminMenuPage.navigateToPosts();
    newPostPage = postListPage.navigateToNewPost();
    newPostPage.setPostTitle(postTitle);
    newPostPage.setPostContent(postContent);
    newPostPage.navigateToPosts();
}