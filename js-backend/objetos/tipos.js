// -> Os objetos aceitam qualquer tipo para ser armazenado em suas propriedades, incluindo funções e outros objetos (objeto aninhando em outro objeto).

const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefones: ["40028922", "2563290"],
    endereco: {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934"
    },
    ativo: true,
    saldo: 200,
    efetuaPagamento: function (valor) {
        if(valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor
            console.log("Pagamento realizado.")
        }
    } 
};

cliente.efetuaPagamento(250) // -> Saldo insuficiente.
cliente.efetuaPagamento(25) // -> console.log("Pagamento realizado.")

console.log(cliente.telefones[0]) // -> 40028922

console.log(cliente.endereco.complemento) // -> ap 934
console.log(cliente.endereco["complemento"]) // -> ap 934

console.log(cliente.endereco.apartamento) // -> true
console.log(cliente.endereco["apartamento"]) // -> true

console.log(cliente.endereco.rua) // -> R. Joseph Climber
console.log(cliente.endereco["rua"]) // -> R. Joseph Climber

console.log(cliente.endereco.numero) // -> 1337
console.log(cliente.endereco["numero"]) // -> 1337