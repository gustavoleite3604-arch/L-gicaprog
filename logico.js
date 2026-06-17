//5) Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o
//aluno foi aprovado se a média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma
//mensagem informando essa condição. Apresentar junto com a mensagem de aprovação ou reprovação o valor
//da média obtida pelo aluno.

let nota1, nota2, nota3, nota4, media;

console.log("informe a primeira nota: ")
nota1 = 4;
console.log("informe a segunda nota: ")
nota2 = 4;
console.log("informe a terceira nota: ")
nota3 = 2;
console.log("informe a quarta nota: ")
nota4 = 1;


media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
    console.log(`media: ${media.toFixed(1)} - aprovado`);
} else {
    console.log(`media: ${media.toFixed(1)} - reprovado`);
}
    