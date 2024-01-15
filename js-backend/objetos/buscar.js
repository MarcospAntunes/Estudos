const clientes = require("./clientes.json")

function buscar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

console.log(buscar(clientes, "nome", "Kirby"))
console.log(buscar(clientes, "telefone", "1918820860"))