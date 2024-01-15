// == -> comparação implícita
// === -> comparação explícita

const numero = 5;
const texto = "5";

console.log(numero == texto) // -> retorna true, pois o valor dentro de cada variável são iguais.

console.log(numero === texto) // -> retorna false, pois ele compara o valor e o tipo para verificar se é EXATAMENTE igual.


// Operador Ternário -> são ações que iram executar determinada ação caso uma condição seja satisfeita e, caso tenha um SENAO (else), irá executar outro trecho de codigo

const idadeMinima = 18;
const idadeDoCliente = 20;

if(idadeDoCliente >= idadeDoCliente) {
    console.log("Pode dirigir.")
} else {
    console.log("Não pode dirigir.")
}

const verificaIdade = idadeDoCliente >= idadeDoCliente ? "Pode dirigir." : "Não pode dirigir."
console.log(verificaIdade)

// Ambos irão retornar o mesmo valor no console. Porém, caso o codigo ira ter mais de um condição aninhada uma na outra, o recomendado é usar if e else.