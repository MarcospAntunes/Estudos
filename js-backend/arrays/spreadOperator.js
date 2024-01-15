// -> Isso altera o array original de qualquer forma
const notas = [7, 7, 8, 9];
const novasNotas = notas;
novasNotas.push(10);
notas.push(5);

// -> Para resolver utilize spread operator (...)

const notasOriginais = [1.7, 7.5, 8, 9];
const novasNotas2 = [...notasOriginais, 10]; // -> Não irá alterar o array original




