const { edFolha, edGalho } = require('./arrays');

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let ponteiroLista1 = 0;
    let ponteiroLista2 = 0;
    let ponteiroListaFinal = 0;

    while(ponteiroLista1 < lista1.length && ponteiroLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[ponteiroLista1];
        let produtoAtualLista2 = lista2[ponteiroLista2];

        if(produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[ponteiroListaFinal] = produtoAtualLista1
            ponteiroLista1++
        } else {
            listaFinal[ponteiroListaFinal] = produtoAtualLista2
            ponteiroLista2++
        }
        ponteiroListaFinal++
    }

    while(ponteiroLista1 < lista1.length) {
        listaFinal[ponteiroListaFinal] = lista1[ponteiroLista1]
        ponteiroLista1++
        ponteiroListaFinal++
    }

    while(ponteiroLista2 < lista2.length) {
        listaFinal[ponteiroListaFinal] = lista2[ponteiroLista2]
        ponteiroLista2++
        ponteiroListaFinal++
    }
    return listaFinal
}

console.log(juntaListas(edFolha, edGalho))