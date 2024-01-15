// Funções só funcionam se forem chamadas em algum momento do código e elas podem ser executadas mais de uma vez. As funções podem ou não receberem parametros.

//Existe 3 formas de declarar funções:
// 1.

// Declaração da função
function imprimeTexto(texto) {
    console.log(texto)
}
function soma(a,b) {
    return a + b // -> return significa que a função irá retornar determinado valor, podendo ser nulo (void) ou não.
}


//Chamada da função
imprimeTexto("Funcionando...") // -> Funcionando... 
imprimeTexto("Outro texto e continua funcionando...") // -> Outro texto e continua funcionando...
soma(1, 2) // -> 3


// 2.

const minhaFuncao = (texto) => {
    console.log(texto)
}

minhaFuncao("Arrow Function") // -> Arrow Function

