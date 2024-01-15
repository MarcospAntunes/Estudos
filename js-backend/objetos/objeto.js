const listaCPFs = [1111111, 22222, 3333];
const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

// -> Um objeto é escrito com {} e os objetos possuem par de chave e valor, onde a chave é o nome da propriedade e o valor é o que será armazenado nesta propriedade.

const objPessoa = {
    nome: "Jose",
    Idade: 32,
    CPF: "1111222333"
}

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "40028922",
    email: "andre@dominio.com",
};
// -> O objeto também pode ter suas informações acessadas desta maneira, apenas colocando o nome da variável que armazena o objeto e, logo em seguida, por um ponto (.) e digitar o nome da propriedade desejada. Ex.: minhaVar.nome

objPessoa.CPF
objPessoa.nome
objPessoa.Idade

console.log(cliente.nome) // -> Andre
console.log(cliente.idade) // -> idade
console.log(cliente.cpf) // -> cpf
console.log(cliente.email) // -> andra@dominio.com

// -> Também podemos acessar os metados dos valores armazenados no objeto

cliente.nome.substring(0, 3) // -> 400

// -> Embora este seja a forma mais comum de acessar o objeto, também há outra forma de acessar as propriedades, que é utilizando os []

cliente["cpf"]
cliente["email"]
cliente["nome"]
cliente["idade"]