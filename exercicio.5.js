//Fazer um programa que pergunte o salário de um funcionário e apresente este salário com um aumento de 15%.

let salario, aumento;

salario = 1000;
console.log("informe o salário do funcionário: R$"+ salario);

aumento = salario * 15 / 100;
console.log("aumento de 15%: "+ aumento);
console.log("novo salário: R$", salario + aumento);