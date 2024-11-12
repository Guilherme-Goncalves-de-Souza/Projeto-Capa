import React from 'react';
import { mount } from '@cypress/react';
import Page from './';

it('Test case - Register page', () => {
  
    mount(<Page />);
    cy.get('#name').type('Tester'); 
    cy.get('#email').type('tester@uorak.com'); 
    cy.get('#password').type('123456'); 

});