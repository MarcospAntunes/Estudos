const  dados = require("./cliente.json") // -> Importa o JSON       

const clienteEmString = JSON.stringify(dados) // -> Transforma em string

const clienteEmObjeto = JSON.parse(clienteEmString) // -> Transforma em objeto
