// como deixar um valor por default ou deixar ele opcional
function cadastro(email, senha, nome) {
    var data = { email: email, senha: senha, nome: nome };
    console.log(data);
}
cadastro("teste@teste.com", "123", "Octavio");
