// Surgiu a partir do ES2015

// let NÃO pode ser usada antes de sua declaração

let forma = 'retangulo';
let altura = 5;
let comprimento = 7;


if(forma === 'retangulo') {
    area = altura * comprimento; // -> Erro
} else {
    area = (altura * comprimento)/2; // -> Erro
}

let area; // -> deveria ser declarada antes da condicional
