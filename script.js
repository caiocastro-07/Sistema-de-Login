const nomes = [];
const  cpfs = [];
const senhas = [];
const telefones = [];
const emails = [];

function guarda_nome() {
    const  nome = document.getElementById("nome").value;
    nomes.push(nome);
    return nome;
}

function guarda_cpf() {
    const cpf = document.getElementById("cpf").value;
    cpfs.push(cpf);
    return cpf;

}

function guarda_senha() {
    const senha = document.getElementById("senha");
    senhas.push(senha);
    return senha;

}

function guarda_telefone() {
    const telefone = document.getElementById("telefone");
    senhas.push(telefone);
    return telefone;

}

function guarda_email() {
    const email = document.getElementById("email");
    emails.push(email);
    return email;
}

function verificar_dados () {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar_senha").value;
    const email = document.getElementsByTagName("email").value;

    
    if (cpfs.includes(cpf)) return false;

    if (emails.includes(email)) return false;

    if (senha !== confirmar) return false;

    return true;
}