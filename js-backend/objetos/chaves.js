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

const chavesDoObjeto = Object.keys(cliente) // -> ['nome', 'idade', 'email', 'telefone', 'enderecos' ]

if(!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro: é necessário ter um endereço cadastrado.")
} else {

}