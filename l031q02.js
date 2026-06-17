//Elaborar um programa que pergunte quatro valores inteiros e apresente 2 resultados:
//a) Resultado de suas adições
//b) Resultado de suas multiplicações
//exibir, ao inicio, uma saudação ao usuáro

//declaração de variaveis
let nome ;
let num1, num2, num3, num4, soma, mult;
console.log("informe seu nome: ");

//leia (nome)
nome = "rafael";


console.log("informe o primeiro valor inteiro:")
num1 = 5;

console.log("informe o segundo valor inteiro:")
num2 = 8;

console.log("informe o segundo valor inteiro:")
num3 = 10;

console.log("informe o segundo valor inteiro:")
num4 = 12;

soma = num1 + num2 + num3 + num4;
console.log("a soma dos 4 valores inseridos é "+ soma);
console.log(`soma: ` + num1 + ` + ` + num2 + `+` + num3 + `+` + num4 + `=` + soma);

mult = num1 * num2 * num3 * num4;
console.log(`a multiplicação dos 4 valores inseridos é ${mult}`);
console.log(`MULTIPLICAÇÃO: ${num1} x ${num2} x ${num3} x ${num4} = ${mult}`)
