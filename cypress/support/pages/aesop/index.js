import { Chance } from "chance";

//ações de interação com a página
const el = require("./elements").ELEMENTS;
/// <reference path="../support/commands.js" />
class aesop {



	acessarPagina() {
		cy.visit('www.aesop.com.br')

	}
	

	cadastrar() {

		const elements = [el.masculino, el.feminino, el.NaoEspecificar];
		const aleatorio = Math.floor(Math.random() * elements.length);

		
		cy.xpath(el.cadastrarse).click()
		cy.xpath(el.primeiroNome).type(chance.name())
		cy.xpath(el.sobrenome).type(chance.name({ middle: true }))
		cy.xpath(el.email).type(chance.email({domain: "google.com"}))
		cy.xpath(el.senha).type("A0a@12345")
		cy.xpath(el.repitaSenha).type("A0a@12345")
		cy.xpath(el.cpf).type(chance.cpf())
		cy.xpath(el.sexo).eq(aleatorio).click();
		cy.xpath(el.dataNascimento).type("07101995")
		cy.xpath(el.telefone).type("61999995555")

		cy.xpath(el.checkboxDesejoDisponibilizar).click()
		cy.xpath(el.checkboxDesejoReceber).click()
		cy.xpath(el.checkboxLiConcordo).click()

		cy.xpath(el.botaoCriarConta).click()
		
		cy.xpath(el.meusPedidos).should('be.visible')

	}




	}


export default new aesop();
