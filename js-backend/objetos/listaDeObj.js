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

console.log(cliente.enderecos[0].rua) // -> R. Joseph Climber


const listaDeApe = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaDeApe) /* 
{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934"
} 
*/