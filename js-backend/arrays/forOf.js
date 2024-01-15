const notas = [10, 6.5, 8, 7.5];
let media = 0

for(let nota of notas) {
    console.log(nota) // -> imprimi cada elemento da lista de notas

    media += nota
}

media = media / notas.length