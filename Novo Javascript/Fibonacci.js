const prompt = require('prompt-sync')();

function gerarFibonacci(n) {
    debugger; // Pausa no início da função para conferir o parâmetro 'n'
    let termos = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        debugger; // Pausa a cada iteração para ver a evolução de 'a', 'b', 'c' e o array 'termos'
        termos.push(a);
        let c = a + b;
        a = b;
        b = c;
    }

    return termos;
}

let n = parseInt(prompt("Número de termos: "));

debugger; // Pausa antes de chamar a função que gera a sequência
let resultado = gerarFibonacci(n);

console.log(resultado.join(", "));