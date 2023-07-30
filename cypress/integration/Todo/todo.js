/// <reference types="Cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const baseUrl = 'https://jsonplaceholder.typicode.com/';
const actualResponse = 'actualResponse';

Given('make a request to get a Todo with id {int}', (id) => {
    cy.request({
        method: 'GET',
        url: `${baseUrl}todos/${id}`,
        failOnStatusCode: false   
    }).as(actualResponse);
})

Then('receive a response code {int}', (code) => {
    cy.get(`@${actualResponse}`).should(response => expect(response.status).to.eq(code));
})

Then('receive a Todo with id {int}', (id) => {
    cy.get(`@${actualResponse}`).should(response => expect(response.body.id).to.eq(id));
})

before(() => {
    cy.log("before: " + new Date().toISOString());
})

after(() => {
    cy.log("after: " + new Date().toISOString());
})

beforeEach(() => {
    cy.log("beforeEach: " + new Date().toISOString());
})

afterEach(() => {
    cy.log("afterEach: " + new Date().toISOString());
})