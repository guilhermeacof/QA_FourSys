//elementos da página para executar as ações

export const ELEMENTS = {
    
    cadastrar : "//span[text()='Entre ou cadastre-se']",
    botaoCriarConta1: '.MuiButton-outlined',

    primeiroNome: "//label[text()='Primeiro nome']/following::input[1]",
    sobrenome: "//label[text()='Sobrenome']/following::input[1]",
    email: "//input[@placeholder='Insira seu e-mail']",
    checkboxDesejo: "//span[text()='Desejo receber por e-mail novidades e promoções da Natura']",
    checkboxDesejoSMS: "//span[text()='Desejo receber por WhatsApp novidades e promoções da Natura']",
    checkboxDesejoDisponilizar: "//span[text()='Desejo disponibilizar minhas informações de email e telefone com a consultora de beleza Natura']",
    checkboxConfirmar18: "//span[text()='Confirmo ser maior de 18 anos e estou de acordo com a ']",
    senha: "//label[text()='Senha']/following::input[1]",
    repetirSenha: "//label[text()='Repetir senha']/following::input[1]",
    cpf: "//label[text()='CPF']/following::input[1]",
    dataNascimento: "//label[text()='Data de Nascimento (opcional)']/following::input[1]",
    celular: "//label[text()='Celular']/following::input[1]",
    whatsapp: "//label[text()='Número WhatsApp']/following::input[1]",

    sexo: "//input[@type='radio']",
    feminino: "//input[@type='radio'][1]",
    masculino: "//input[@type='radio'][2]",
    NaoEspecificar: "//input[@type='radio'][3]",

    botaoCriarConta: "//button[@type='submit']",

    meusAcessos: "//span[text()='Meus acessos']",


};

