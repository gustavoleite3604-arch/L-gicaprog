// Calcular desconto - produto 1
let preco1 = 100;
let desconto1 = preco1 * 0.1;
let final1 = preco1 - desconto1;
console.log(final1);

// Calcular desconto - produto 2
let preco2 = 250;
let desconto2 = preco2 * 0.1;
let final2 = preco2 - desconto2;
console.log(final2);

//crie uma função calcularDesconto(preço, percentual) que: receba o preço e o percentual de desconto calcule e retorne o 
// valor final substitua todo o codigo repetido

function calcularDesconto(preço, percentual) {
    let desconto = preço * percentual;
    let final = preço - desconto;
    return final;
}