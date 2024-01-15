const clientes = require("./clientes.json")

function ordernar(lista, prop) {
    const result = lista.sort((a, b) => {
        if(a[prop] > b[prop]) {
            return 1
        }
        if(a[prop] < b[prop]) {
            return -1
        }

        return 0
    })

    return result
}

const ordenadorPorNome = ordernar(clientes, "nome")
console.log(ordenadorPorNome)

