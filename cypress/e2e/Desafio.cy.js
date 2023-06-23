/// <reference types="cypress"/>
var Chance = require('chance');
var chance = new Chance();
require('cypress-xpath')
import aesop from "../support/pages/aesop";
import natura from "../support/pages/natura";




describe("FourSys", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		return false;
	});
	beforeEach(() => {

		cy.clearCookies();
		
	});
	after(() => {
		cy.clearLocalStorage();
	});
	describe("AESOP", () => {

		it("Cadastrar usuário", () => {
			aesop.acessarPagina()
      		aesop.cadastrar()
			
		});		

	});
  describe("NATURA", () => {

		it("Cadastrar usuário", () => {
			natura.acessarPagina()
      		natura.cadastrar()
			
		});		

	});
});
