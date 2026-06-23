//4) Desenvolver um programa que pergunte um valor numérico inteiro e faça a exibição desse valor caso seja
//divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a mensagem “Valor não é divisível por
//4 e 5”.

let num;
num = 11;
console.log("informe um número: ", num);

if ( num % 4 == 0 && num % 5 == 0) {
    console.log(`${num} é divisível por 4 e 5`);

} else {
    (num % 4 != 0 && num % 5 != 0)
    console.log(`${num} não é divisível por 4 e 5`);
}

//comentario realizado 17/06/26