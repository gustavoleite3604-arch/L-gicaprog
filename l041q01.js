//1) Desenvolver um programa que pergunte um número. Se este número for maior que 20, então ele deverá exibir a
//metade deste número, senão, ele deverá exibir o número sem alterações.

let num, metade;
num = 50; //número informado pelo usuário
console.log("informe um número: ",num);

if ( num > 20 ) {
     metade = num / 2;
     console.log (`a metade de ${num} é ${metade} `);
} else {
     console.log(`numero inserido foi ${num}`);

}
console.log("verdadeiro");