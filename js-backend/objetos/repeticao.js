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

for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    if(tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
    
}