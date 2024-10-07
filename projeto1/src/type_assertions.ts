let statusAtual: unknown = 1;

let mudaStatus: number = 0;

// afirmando que o statusAtual é de fato um numero
mudaStatus = statusAtual as number;

console.log(mudaStatus);