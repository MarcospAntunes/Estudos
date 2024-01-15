const clientes = require("./clientes.json")

function filtrar(clientes) {
   return clientes.filter((cliente) => {
    return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
   })
}

const filtrados = filtrar(clientes)

console.log(filtrados)