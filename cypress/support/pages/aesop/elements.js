//elementos da página para executar as ações

export const ELEMENTS = {
    
    cadastrarse: "//a[@href='/cadastre-se']",
    primeiroNome: "//label[text()='Primeiro nome']/following::input[1]",
    sobrenome: "//label[text()='Sobrenome']/following::input[1]",
    email: "//label[text()='E-mail']/following::input[1]",
    senha: "//label[text()='Senha']/following::input[1]",
    repitaSenha: "//label[text()='Repita sua senha']/following::input[1]",
    cpf: "//label[text()='CPF']/following::input[1]",
    dataNascimento: "//span[text()='Não especificar']/following::input[1]",
    telefone: "(//span[text()='Não especificar']/following::input)[2]",

    checkboxDesejoReceber: "//span[text()='Desejo receber novidades da Aesop por email']",
    checkboxDesejoDisponibilizar: "//span[text()='Desejo disponibilizar minhas informações de email e telefone com a Aesop']",
    checkboxLiConcordo: "//p[text()='Li e concordo com os ']",

    botaoCriarConta: "//span[text()='Criar Conta']",
    meusPedidos: "//a[@href='/meus-dados/pedidos']",

    sexo: "//input[@type='radio']",
    feminino: "//input[@type='radio'][1]",
    masculino: "//input[@type='radio'][2]",
    NaoEspecificar: "//input[@type='radio'][3]",
};

