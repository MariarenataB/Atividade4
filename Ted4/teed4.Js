function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}


function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9; 
    } else {
        return valorTotal; 
    }
}


function exibirResumo() {
    
    let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));
    let quantidade = parseInt(prompt("Digite a quantidade comprada:"));

   
    let valorTotal = calcularTotal(precoUnitario, quantidade);
    let valorComDesconto = aplicarDesconto(valorTotal);

    
    alert(`Resumo da compra:
    Valor total antes do desconto: R$ ${valorTotal.toFixed(2)}
    Valor final com desconto: R$ ${valorComDesconto.toFixed(2)}`);
}

exibirResumo();
