export class Produto {
    constructor(codigo_de_barras, quantidade, referencia, categoria, imagem) {
        this.codigo_de_barras = codigo_de_barras;
        this.quantidade = quantidade;
        this.referencia = referencia;
        this.categoria = categoria;
        this.imagem = imagem;
    }

    // Métodos para acessar os atributos privados
    getCodigoBarras() {
        return this.codigo_de_barras;
    }

    getQuantidade() {
        return this.quantidade;
    }

    getReferencia() {
        return this.referencia;
    }

    getCategoria() {
        return this.categoria;
    }

    getImagem() {
        return this.imagem;
    }

    // Método para converter o objeto em formato JSON
    toJSON() {
        return {
            codigo_de_barras: this.codigo_de_barras,
            quantidade: this.quantidade,
            referencia: this.referencia,
            categoria: this.categoria,
            imagem: this.imagem
        };
    }

    // Método estático para criar um objeto Produto a partir de um JSON
    static fromJSON(json) {
        return new Produto(json.codigo_de_barras, json.quantidade, json.referencia, json.categoria,json.imagem);
    }
}