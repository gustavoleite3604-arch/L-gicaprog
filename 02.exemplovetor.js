// ASSUNTO vetores

// vetor com nomes de alunos
let alunos = ["ana" , "bruno" , "carlos" , "diana"];
let notas = [8.5 , 3, 8, 10];

console.log(alunos);
console.log(alunos [3]);
console.log(alunos [0]);


aluno[2] = "ana";
console.log(alunos); //vetor todo (agora c antônio)

//for para percorrer cada indice do vetor

for (let cont = 0; cont < 4; cont++) {
    console.log(`aluno(a) ${cont + 1} : ${alunos[cont]}`);
    
}

console.log( notas );
console.log( notas[2]);

for (let cont = 0; cont < aluno.length; cont++) {
    console.log(`nome: ${alunos[cont]} - Nota: ${notas[cont]}`);
    
}

for (let aluno of aluno) {
    console.log(`nome: ${aluno}`)

}
    
// exemplo forEach
aluno.forEach(function(aluno, indice) {
    console.log(`indice: ${indice}, aluno: ${aluno}`);
});


//push - adiciona ao final do vetor
alunos.push("Raimundo");
console.log(alunos);

//pop - remove do final do vetor
alunos.pop();
console.log(aluno);

//
alunos.unshift("raimundo")
console.log(aluno);

// shift
alunos.shift();
console.log(alunos);