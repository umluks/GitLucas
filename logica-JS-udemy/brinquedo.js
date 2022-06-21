//OBJETOS
const pessoa = {
    nome: "Lucas",
    idade: 9,
    altura: 1.57,
};

if (pessoa.idade >= 10 || pessoa.altura >= 1.60) {
    console.log (`${pessoa.nome} pode brincar no brinquedo`);
}   else {
    console.log (`${pessoa.nome} nao pode brincar no brinquedo`)
}

console.log ("--------------------------------------------")

//LOOPS
var meusFilhos = ["mateus", "giovana"];

for (let impFilhos of meusFilhos) {
    console.log (impFilhos)
}