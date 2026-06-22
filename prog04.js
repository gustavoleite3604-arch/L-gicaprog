//Desenvolver um programa que pergunte um número de 1 a 12, e responda o mês correspondente ao número,
//ou se o número não corresponde a nenhum dos 12 meses.

let num
num = 13
console.log("informe um número de 1 a 12: "+ num)

switch (num) {
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("maio");
        break;
    case 6:
        console.log("junho");
        break;
    case 7:
        console.log("julho");
        break;
    case 8:
        console.log("agosto");
        break;
    case 9:
        console.log("setembro");
        break;
    case 10:
        console.log("outubro");
        break;
    case 11:
        console.log("novembro");
        break;
    case 12:
        console.log("dezembro");
        break;
    default:
        console.log("número inválido você receberá um virus e será deletado do sistema");
        break;
    
}