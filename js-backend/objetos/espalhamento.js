const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefones: ["40028922", "2563290"],
    enderecos: [
        {
            rua: "R. Joseph Climber",
            numero: 1337,
            apartamento: true,
            complemento: "ap 934"
        },
        {
            rua: "R. Mario Castro",
            numer: 404,
            apartamento: false
        }
    ],
    ativo: true 
};

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

//Resultam no mesmo resultado
ligaParaCliente(...cliente.telefones)
ligaParaCliente(cliente.telefones[0], cliente.telefones[1])


// -> Ambos retornam a mesma coisa

const encomenda1 =  {
    destinatario: cliente.nome,
    rua: cliente.enderecos[0].rua,
    numero: cliente.enderecos[0].numero,
    enderecos: cliente.enderecos[0]
}

const encomenda2 =  {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

