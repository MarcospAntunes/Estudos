import pegaArquivo from "./index.js";
import fs from 'fs';

const caminho = process.argv;

function imprimeResultado(resultado, identificador = "") {
    console.log(identificador, resultado);
}

async function processaTexto(argumentos) {
    try {
        fs.lstatSync(argumentos);
    } catch(erro) {
        if(erro.code === "ENOENT") {
            console.log("Arquivo ou diretório não existe.");
            return
        }
    }

    if(fs.lstatSync(argumentos).isFile()) {
        const resultado = await pegaArquivo(argumentos);
        imprimeResultado(resultado);
    } else if(fs.lstatSync(argumentos).isDirectory()) {
        const arquivos = await fs.promises.readdir(argumentos);
        arquivos.forEach(async (arquivo) => {
            const lista = await pegaArquivo(`${caminho}/${arquivo}`);
            imprimeResultado(lista, arquivo);
        })
    }
}

processaTexto(caminho[2])