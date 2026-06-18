/*Desenvolver um programa que apresente o valor da soma dos cem primeiros números inteiros (1 + 2 + 3 + 4 + ...
+ 97 + 98 + 99 + 100)*/

let num = 1;
let acum = 0;

while (num <= 100) {
    acum = acum + num;
    num = num + 1;
}

console.log(`a soma do valores de 1 a 100 é ${acum}`)
