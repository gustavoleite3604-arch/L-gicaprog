//10) Desenvolver um programa que pergunte dois números inteiros, e apresente como resultado se o segundo
//número informado é ou não um divisor do primeiro número informado.

let num1, num2;

console.log("informe o primeiro número: ")
num1 = 5;
console.log("informe o segundo número: ")
num2 = 2;

if (num1 % num2 == 0) {
    console.log(`${num1} é divisivel por ${num2}`)

} else {
    console.log(`${num1} não divisivel por ${num2}`)

}