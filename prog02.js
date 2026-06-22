//10) Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula prestação =
//valor + (valor x (taxa : 100) x tempo em dias).

let valaor;
let taxa;
let tempo;


console.log("informe o valor da prestação:");
valor = 200;
console.log("informe a taxa de juros: ");
taxa = 100;
console.log ("informe tempo em dias:");
tempo = 30;

valor = valor + (valor * (taxa / 100) * tempo);
console.log(`o valor da prestação em atraso é: ${valor}`);