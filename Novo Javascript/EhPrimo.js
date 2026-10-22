const prompt = require('prompt-sync')();

function ehPrimo(n) {
    debugger; // Pausa ao entrar na função para verificar o número recebido
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        debugger; // Pausa a cada iteração para monitorar o valor de 'i' e o resto (n % i)
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

let n = parseInt(prompt("Qual número você deseja testar se é primo? "));

debugger; // Pausa antes de chamar a função que valida o número
if (ehPrimo(n)) {
    console.log(`O número ${n} é primo.`);
} else {
    console.log(`O número ${n} NÃO é primo.`);
}