const prompt = require('prompt-sync')();

function mdc(a, b) {
    debugger; // Pausa no início da função para conferir os valores iniciais
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        debugger; // Pausa a cada iteração para acompanhar a alteração de 'a', 'b' e o cálculo do 'resto'
        let resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

let a = parseInt(prompt("Digite o primeiro número inteiro: "));
let b = parseInt(prompt("Digite o segundo número inteiro: "));

debugger; // Pausa antes de chamar a função que calcula o MDC
console.log(`O Máximo divisor comum de ${a} e ${b} é: ${mdc(a, b)}`);