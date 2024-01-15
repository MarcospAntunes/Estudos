import fs from 'fs';
import chalk from "chalk";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}) )

    return resultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

// Promises com async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        extraiLinks(texto)
    } catch(erro) {
        trataErro(erro)
    }
    
}


// Promises com then()

//function pegaArquivo(caminhoDoArquivo) {
//    const encoding = 'utf-8';
//    fs.promises
//        .readFile(caminhoDoArquivo, encoding)
//        .then((texto) => console.log(chalk.green(texto)))
//        .catch(erro => trataErro(erro))
//}
pegaArquivo('./arquivos/texto.md');