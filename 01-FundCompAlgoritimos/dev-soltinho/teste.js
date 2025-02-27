function criaVenda (nomeProd, valorUnit, qtdVenda) {
    return {
        nomeProd,
        valorUnit,
        qtdVenda,
        calculaVenda: function(){
            return console.log('Produto: ' + this.nomeProd + '\nValor Unitário: ' + this.valorUnit + 
                '\nQtd Vendida: ' + qtdVenda + '\n\nValor total da Venda: ' + (this.valorUnit * this.qtdVenda))   ;
        }
    };
};
