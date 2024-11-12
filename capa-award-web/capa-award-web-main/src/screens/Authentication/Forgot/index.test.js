import React from 'react';
import { mount } from '@cypress/react';
import Page from './'; 

it('Test case - Forgot page', () => {
  
    mount(<Page />);
    cy.get('#email').type('tester@uorak.com'); 

});