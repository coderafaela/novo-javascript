const prompt = require('prompt-sync')();

function somatorio(numeros) {
    debugger; // Pausa no início da função para conferir o array recebido
    let soma = 0;
    for (let numero of numeros) {
        debugger; // Pausa a cada iteração para acompanhar a adição do número atual à variável 'soma'
        soma += numero;
    }
    return soma;
}

let n = parseInt(prompt("Quantidade de números: "));
let numeros = [];

debugger; // Pausa antes de começar a preencher o array de números
for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Número ${i + 1}: `));
    numeros.push(num);
}

debugger; // Pausa antes de chamar a função de somatório
console.log("Soma = " + somatorio(numeros));