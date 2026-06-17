/*1) Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
menu de opções.
Código Opção
1 Incluir
2 Alterar
3 Excluir
4 Pesquisar
5 Sair
*/

console.log("menu de opções");
console.log("codigo opção");
console.log(" 1   -   Incluir");
console.log(" 2   -   Alterar");
console.log(" 3   -   Excluir");
console.log(" 4   - Pesquisar");
console.log(" 5   -      Sair");
console.log("informe o código desejado: ")
cod = 3;
console.log(`codigo escolhido: ${cod}`)

switch (cod) {
    case 1:
        console.log("inclusão selecionada");
        break;
        case 2:
            console.log("alteração selecionada");
            break;
            case 3:
                console.log("Excluir selecionada");
                break;
                case 4:
                    console.log("pesquisar selecionada");
                    break;
                    case 5:
                    console.log("sair selecionado");
                    break;
                    
}