import { Chance } from "chance";

//ações de interação com a página
const el = require("./elements").ELEMENTS;
/// <reference path="../support/commands.js" />
class natura {



	acessarPagina() {
		cy.visit('www.natura.com.br')
		cy.wait(1000)

	}
	

	cadastrar() {

		const elements = [el.masculino, el.feminino, el.NaoEspecificar];
		const aleatorio = Math.floor(Math.random() * elements.length);

		cy.xpath(el.cadastrar).click()
		cy.get(el.botaoCriarConta1).click()

		cy.xpath(el.primeiroNome).type(chance.name())
		cy.xpath(el.sobrenome).type(chance.name({ middle: true }))
		cy.xpath(el.email).type(chance.email({domain: "google.com"}))
		cy.xpath(el.checkboxDesejo).click()
		cy.xpath(el.senha).type("A0a@12345")
		cy.xpath(el.repetirSenha).type("A0a@12345")
		cy.xpath(el.cpf).type(chance.cpf())		
		cy.xpath(el.dataNascimento).type("07101995")
		cy.xpath(el.sexo).eq(aleatorio).click();
		cy.xpath(el.checkboxDesejoSMS).click()
		cy.xpath(el.celular).type("61999995555")
		cy.xpath(el.whatsapp).type("61999995555")
		cy.xpath(el.checkboxDesejoDisponilizar).click()
		cy.xpath(el.checkboxConfirmar18).click()

		cy.xpath(el.botaoCriarConta).click()
		cy.xpath(el.meusAcessos).should('be.visible')
	}

	}


export default new natura();
