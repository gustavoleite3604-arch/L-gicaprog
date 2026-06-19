//1) Desenvolver um programa que apresente todos os valores numéricos inteiros ímpares situados na faixa de 1000
//a 1500.

let num

num = 1000;
do {
    if (num % 2 == 1)
    console.log(`${num}`)
     num++;
} while (num <= 1500)