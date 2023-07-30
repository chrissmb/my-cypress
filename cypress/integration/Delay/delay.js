/// <reference types="Cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const baseUrl = 'https://postman-echo.com/'
const delayResponse = 'delayResponse';
const actualResponse = 'actualResponse'

Given('make a request to get with delay of {int} seconds', (delay) => {
    cy.request({
        method: 'GET',
        url: `${baseUrl}delay/${delay}`
    }).as(delayResponse);
})

Given('make a request to post with response from delay', () => {
    cy.get(`@${delayResponse}`).then(response => {
        cy.log(delayResponse +': ' + JSON.stringify(response));
        cy.request({
            method: 'POST',
            url: `${baseUrl}post`,
            body: {
                code: response.body.delay
            }
        }).as(actualResponse);
    });
})

Then('receive a response code {int}', (code) => {
    cy.get(`@${actualResponse}`).should(
        response => expect(response.status).to.eq(code),
        error => console.log('Error: ' + error)
    );
})

Then('receive a response body with data.code {string}', (code) => {
    cy.get(`@${actualResponse}`).should(response => {
        expect(response.body.data.code).to.eq(code);
    });
})