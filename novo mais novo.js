//Criando uma função simples - Escreva uma função chamada exibirSaudacao que não receba
//parâmetros e que, ao ser executada, exiba no console a mensagem: "Olá, mundo! Estamos aprendendo
//funções.". Em seguida, escreva a linha de código necessária para chamar essa função.

function exibirSaudacao() {
    console.log("Olá, mundo! Estamos aprendendo funções.");
}

exibirSaudacao();

//Questão 2: Funções com parâmetros - Crie uma função chamada calcularTriplo que receba um número
//como parâmetro e retorne o valor desse número mulIplicado por 3. Após criar a função, chame-a
//passando o valor 10 e exiba o resultado no console.

let num = 3;

function calculartripo() {
    return num * 3;
}

console.log(calculartripo());

//Tipagem e Retorno (TypeScript) - Escreva uma função chamada verificarMaioridade em
//TypeScript. Ela deve receber um parâmetro chamado idade (do Ipo number) e retornar uma string dizendo
//"Maior de idade" se a idade for 18 ou mais, ou "Menor de idade" caso contrário. CerIfique-se de definir o
//Ipo do retorno da função.