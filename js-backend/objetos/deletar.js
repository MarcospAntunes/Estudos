// -> Para remover uma propriedade junto de seu valor em um objeto, basta escrever delete seguido de meuObjeto.propriedade.

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) // -> undefined
console.log(objPersonagem.status) // -> undefined

// -> Note que o retorno de um delete será um valor booleano (true ou false), porém ele não ira retornar false caso o a propriedade que deseja ser removida não exista no objeto.

const delProp = delete objPersonagem.classe
const delPropInexistente = delete objPersonagem.forca


console.log(delProp) // -> true
console.log(delPropInexistente) // -> true
