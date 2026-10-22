const prompt = require('prompt-sync')();

function quicksort(arr) {
    debugger; // Pausa a cada chamada recursiva para ver o estado do array atual
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];

    let menores = [];
    let iguais = [];
    let maiores = [];

    for (let numero of arr) {
        if (numero < pivot) {
            menores.push(numero);
        } else if (numero > pivot) {
            maiores.push(numero);
        } else {
            iguais.push(numero);
        }
    }

    debugger; // Pausa após a partição para verificar os arrays 'menores', 'iguais' e 'maiores'

    return [...quicksort(menores), ...iguais, ...quicksort(maiores)];
}

let entrada = prompt("Digite os números separados por vírgula (ex: 5,3,8,1,9): ");
let array = entrada.split(",").map(item => parseInt(item.trim())).filter(n => !isNaN(n));

debugger; // Pausa antes de iniciar a ordenação com o array tratado
let resultado = quicksort(array);

console.log("Array original: " + array.join(", "));
console.log("Array ordenado: " + resultado.join(", "));