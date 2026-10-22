const prompt = require('prompt-sync')();

function contarAprovacoes(notas, minimo) {
    debugger; // Pausa a execução ao entrar na função de contagem
    let contagem = 0;
    for (let nota of notas) {
        if (nota >= minimo) {
            contagem++;
        }
    }
    return contagem;
}

let n = parseInt(prompt("Número de notas: "));
let notas = [];

debugger; // Pausa antes de começar a preencher o array de notas

for (let i = 0; i < n; i++) {
    let nota = parseFloat(prompt(`Nota do aluno ${i + 1}: `));
    notas.push(nota);
}

debugger; // Pausa antes de chamar a função de aprovações
let aprovacoes = contarAprovacoes(notas, 50);
console.log("Número de aprovações: " + aprovacoes);