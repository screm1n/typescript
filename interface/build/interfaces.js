"use strict";
let loja;
loja = {
    nome: 'BK',
    endereco: 'Rua X',
    status: true,
};
// Conjunto de dados (um padrao) para descrever a estrutura de um objeto
const BurgerK = {
    nome: "Burger K",
    endereco: "Rua qualquer",
    status: true,
};
// console.log(BurgerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereçada em: ${endereco}.`);
    console.log(`Status da loja: ${status}.`);
    console.log("==============");
}
novaLoja({ nome: "Red Burger", endereco: "Rua qualquer", status: false });
novaLoja({ nome: "Subway", endereco: "Rua 7", status: true });
