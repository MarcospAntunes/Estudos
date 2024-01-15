function menorValor(produtos, posicaoInicial) {
    let menor = posicaoInicial;

    for(let atual = posicaoInicial; atual < produtos.length; atual++) {
        if(produtos[atual].preco < produtos[menor].preco) menor = atual;
    }
    return menor;
}

module.exports = menorValor;