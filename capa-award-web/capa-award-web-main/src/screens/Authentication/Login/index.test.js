import React from 'react';
import { mount } from '@cypress/react';
import Page from './';

it('Test case - Login page', () => {
  
    mount(<Page />);
    cy.get('input[type=text]').type('tester@uorak.com'); 
    cy.get('input[type=password]').type('123456'); 

});