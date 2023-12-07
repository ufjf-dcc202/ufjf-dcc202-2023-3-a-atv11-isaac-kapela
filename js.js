


function adicionaElementoNaListaOrdenada(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
//adiciona os 3 primeiros itens
atualizarListaOrdenada();

//adiciona eventos do botao para adicionar e remover
btnAdicionar.addEventListener('click',adicionaItemDaEntrada)
btnLimpar.addEventListener('click',limparListaOrdenada)