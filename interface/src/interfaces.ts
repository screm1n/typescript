

let loja: object;

loja = {
    nome: 'BK',
    endereco: 'Rua X',
    status: true,
}

interface LojaProps {
    nome: string;
    endereco: string;
    status: boolean;
}

// Conjunto de dados (um padrao) para descrever a estrutura de um objeto
const BurgerK: LojaProps = {
    nome: "Burger K",
    endereco: "Rua qualquer",
    status: true,
}

// console.log(BurgerK);

function novaLoja({nome, endereco, status}: LojaProps): void {
    console.log(`Loja ${nome} criada com sucesso!`)
    console.log(`Endereçada em: ${endereco}.`)
    console.log(`Status da loja: ${status}.`)

    console.log("==============")
}

novaLoja({ nome: "Red Burger", endereco: "Rua qualquer", status: false})

novaLoja({nome: "Subway", endereco: "Rua 7", status: true});