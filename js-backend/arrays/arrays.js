// Array -> []

const ElementosSuportadosPorArrays = [Number, String, Boolean, Object]

// -> Os arrays servem para armazenar itens no espaço da memória. Pense como se cada valor estivesse dentro de uma caixa e você guardasse essa caixa com este valor dentro para ser usado posteriormente.

// -> Além de valor, também é correto chamar-lós de elemento ou item

// -> Cada elemento de um array tem seus identificadores (index), começando a partir do 0.

            // 0    1   2   3
const notas = [10, 6.5, 8, 7.5];
let media = 0;

for(let i = 0; i < notas.length; i++) {
    media += notas[i];
}

media = media / notas.length;

console.log(media)

// Propriedades

notas.push(1.5) // -> Adiciona um item no fim do array

notas.reverse() // -> Inverte os elementos do Array

notas.length // -> Retorna o tamanho do Array;

notas.map((num) => console.log(num)) // -> função que passa item por item e executa determinado código informado

notas.filter((num) => num !== 1.5) // -> filtra o array, retornando um novo array de acordo com o código passado

notas.pop() // -> Remove o último elemento do Array e o retorna

notas.shift() // -> Remove o primeiro elemento do array e o retorna

notas.splice(1, 2) // Remove os itens da seguinte forma: o primeiro número é o indice do array (nesse caso notas[1]) e o segundo numero informa quantos itens você deseja remover apartir daquele indice (incluindo o item do indice passado)

notas.concat() // Junta dois arrays

notas.find((num) => num === 10) // Similar ao filter, porém retorna apenas o primeiro valor que satisfizer o parametro passado

notas.findIndex((num) => num === 8) // Funciona da mesma forma que o find(), porém retorna o indice ao inves do elemento

notas.lastIndexOf((num) => num == 7.5) // A unica diferença entre esse metodo e o findIndex() é que ele começa a busca a partir do ultimo item do Array

notas.forEach((num) => num.toFixed(1)) // Executa uma função em cada elemento do array de forma individual e ele não altera o array original e nem retorna valor.

notas.unshift(4) // Adiciona um elemento no inicio do array
