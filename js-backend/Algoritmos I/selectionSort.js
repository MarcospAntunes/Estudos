const livros = require("./listaLivros");
const menorValor = require("./menorValor");

let menor = 0;
let livroAtual = {}
let livroMenorPreco = {}

for(let atual = 0; atual < livros.length - 1; atual++) {
    menor = menorValor(livros, atual);

    livroAtual = livros[atual];
    livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros)