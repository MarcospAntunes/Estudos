const nomes = ["Marcos", "Fernanda", "Axel"]

nomes.forEach((nome) => {
    console.log(nome)
})

function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome);