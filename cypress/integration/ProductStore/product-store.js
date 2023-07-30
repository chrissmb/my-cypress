/// <reference types="Cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const baseUrl = 'https://www.demoblaze.com/';

Given('visit Product Store Page', () => {
    cy.visit(baseUrl);
})

Then('should see login link', () => {
    cy.get('#login2').should('be.visible');
})

When('click on login link', () => {
    cy.get('#login2').click();
    cy.wait(1000);
})

Then('should see login modal', () => {
    cy.get('#logInModal').should('be.visible');
    cy.get('#loginusername').should('be.visible');
    cy.get('#loginpassword').should('be.visible');
    cy.contains('#logInModal .btn.btn-primary', 'Log in').should('be.visible');
    cy.contains('#logInModal .btn.btn-secondary', 'Close').should('be.visible');
})

When('type username {string}', (username) => {
    cy.get('#loginusername').type(username);
})

When('type password {string}', (password) => {
    cy.get('#loginpassword').type(password);
})

When('click on login button', () => {
    cy.contains('#logInModal .btn.btn-primary', 'Log in').click();
    cy.wait(1000);
})

When('click on close button', () => {
    cy.contains('#logInModal .btn.btn-secondary', 'Close').click();
    cy.wait(1000);
})

Then('should see welcome {string}', (username) => {
    cy.contains('.nav-link', `Welcome ${username}`).should('be.visible');
})