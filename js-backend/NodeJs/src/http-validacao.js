import chalk from "chalk";

function extraiLinks(arr) {
    return arr.map((objLink) => Object.values(objLink).join());
}

async function checaStatus(arr) {
    const arrayStatus = await Promise.all(
        arr.map(async (url) => {
            try {
                const res = await fetch(url);
                return res.status;
            } catch(erro) {
                return manejaErros(erro)
            }           
        })
    )

    return arrayStatus;
}

function manejaErros(erro) {
    if(erro.cause.code === "ENOTFOUND") {
        return "link não encontrado";
    } else {
        return "Ocorreu algum erro";
    }
}

async function listaValidada(listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);

    return listaDeLinks.map((obj, index) => ({
        ...obj,
        status: status[index]
    }));
}
 
export default listaValidada;