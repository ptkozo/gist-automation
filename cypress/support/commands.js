// -- This is a custom command --
// Cypress.Commands.add("custom function",
import addContext from 'mochawesome/addContext';
Cypress.Commands.add('addContext', (context)=>{
	cy.once('test:after:run', (test) => addContext({ test }, context));
});
// function customFunction() {
// })