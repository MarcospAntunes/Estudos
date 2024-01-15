// Surgiu a partir do ES2015

// Ela NÃO pode ser alterada após sua declaração e NÃO pode ser usada antes de sua declarção

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;

const area = altura * comprimento; // -> 35
area = 20 // -> Não sera alterada, pois constantes não alteram seu valor, gerando um erro.