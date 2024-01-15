const pessoa = {
    nome: "Luma",
    profissao: "Engenheira"
}

console.log(pessoa.nome) // -> Luma


// -> Para adicionar uma nova propriedade, basta digitar o nome da variavel que contem o objeto seguido de ponto e o nome desejado, logo apos isso, atribua um valor para essa propriedade.

pessoa.telefone = "40028922"
console.log(pessoa.telefone) // -> 40028922

// -> Para alterar um valor de um propriedade de um objeto, basta digitar o nome da variavel que armazena este objeto seguido de ponto, o nome da propriedade e atribuir o novo valor a esta propriedade.

pessoa.nome = "Luma Silva"
console.log(pessoa.nome) // -> Luma Silva

// -> Observe que, embora o objeto esteja amerzanado e um variavel do tipo constante, ele pode ter seus valores/propriedades alterados da mesma forma que um array pode ter seus valores alterados. O que não é permitido é atribuir um objeto inteiro para essa const.