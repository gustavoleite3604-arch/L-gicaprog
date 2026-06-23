//2) Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
//valor informado pelo usuário.

let num;
let acum = 0;
let cont;
console.log(`informe um número: `);
num = 5;
console.log(`número informado: ${num}`)
for (cont = 1; cont <= num; cont++) {
    acum = acum + cont;
}

console.log(`a soma do valores de 1 a ${num} é ${acum}`)