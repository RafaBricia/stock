class Produto {
    constructor(codigo_de_barras, quantidade,referencia,categoria){
        this.codigo_de_barras= codigo_de_barras;
        this.quantidade = quantidade;
        this.referencia = referencia;
        this.categoria= categoria;
    }

    getCodigo_de_barras() {
        return this.codigo_de_barras;
    }

    getQuantidade(){
        return this.quantidade;
    }

    getReferencia(){
        return this.referencia;
    }

    getCategoria(){
        return this.categoria
    }
}

module.exports = Produto;

