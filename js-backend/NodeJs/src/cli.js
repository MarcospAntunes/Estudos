import listaValidada from "./http-validacao.js";
import pegaArquivo from "./index.js";
import fs from 'fs';

const caminhoArquivo = process.argv;

async function imprimeResultado(valida, resultado, identificador = "") {

    if(valida) {
        console.log(identificador, await listaValidada(resultado));
    } else {
        console.log(identificador, resultado);
    }
    
}

async function processaTexto(argumentos) {
    const valida = argumentos[3] === '--valida';
    const caminho = argumentos[2];
    try {
        fs.lstatSync(caminho);
    } catch(erro) {
        if(erro.code === "ENOENT") {
            console.log("Arquivo ou diretório não existe.");
            return
        }
    }

    if(fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeResultado(valida, resultado);
    } else if(fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (arquivo) => {
            const lista = await pegaArquivo(`${caminho}/${arquivo}`);
            imprimeResultado(valida, lista, arquivo);
        })
    }
}

processaTexto(caminhoArquivo);