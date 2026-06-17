//Desenvolver um programa que pergunte dois valores numéricos inteiros e apresente o valor da diferença entre o
//maior valor e o menor valor lido.

let num1, num2, maior, menor, diferenca;

console.log("informe o primeiro valor: ")
num1 = -8;
console.log("informe o segundo valor: ")
num2 = 10;

diferenca = num1 - num2

if (num1 > num2) {
    console.log(`a diferença entre ${num1} e ${num2} é ${diferenca}`)
    maior = num1;
    menor = num2;
} else {
    console.log(`a diferença entre ${num1} e ${num2} é ${diferenca}`)
    maior = num2;
    menor = num1;
}
