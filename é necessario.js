//material 08 (modularização e Função) - Página 06

let num;

function somar(a, b) {
       let resultado = a + b;
       return resultado;
}

//estou exibindo imediatamente o valor retornado pela função
console.log( somar(5, 3));

//guardando o valor retornando em uam vatriável
num = somar(10, 20);
console.log(num);

somar (10, 20);

function direcionador(){
    console.log("siga em frente! Estude Sempre!");
}


//chamado a função direcionador
direcionador();
direcionador();
 let texto = direcionador();
 console.log(texto);

function mensagem() {
    return "Bom dia!";
}
//chamado a função mensagem()
mensagem(); //perdi o retorno da função
console.log(mensagem());

function tudao() {
    direcionador();
    let calc = somar(2, 3);
    console.log(`resultado da soma: ${calc}`);
    let msg = mensagem();
    direcionador();
    console.log(`mensagem do dia ${msg}`);
    console.log(`fim da função tudao`);


}

let cont; // global
for (let cont = 0; cont <= 3; cont++) {
    console.log(cont);
    
}
console.log( cont ); 
