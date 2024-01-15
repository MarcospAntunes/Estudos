const notas = [10, 9.5, 8, 7, 6];

const novasNotas = notas.map((nota) => {
    return nota + 1 > 10 ? 10 : nota + 1;
})

// -> map() não altera o array original

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesToUpperCase = nomes.map((nome) => {
    return nome.toUpperCase()
});