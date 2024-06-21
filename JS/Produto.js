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

// Lista de produtos para exemplo (adicionando tipos)
const produtos = [
    new Produto("5449000000996", 132, "COCA COLA LATA", "AdegaEBebidas"),
    new Produto("7896094902309", 60, "SABÃO EM PÓ BRILHANTE", "Limpeza"),
    new Produto("7891000102626", 160, "AVEIA FLOCOS FINOS NESTLE", "Cereais"),
    new Produto("7596324589159", 200, "TOMATE", "Mercearia"),
    new Produto("7596875694789", 123, "PÃO FRANCÊS", "Padaria"),
    new Produto("7896102502305", 132, "EXTRATO DE TOMATE QUERO LATA", "Enlatados")
];

// Função para filtrar produtos
function filtrarProdutos(produtos, filtro) {
    return produtos.filter(produto => {
        let isMatch = true;
        if (filtro.codigo_de_barras && produto.getCodigoBarras() !== filtro.codigo_de_barras) {
            isMatch = false;
        }
        if (filtro.quantidade && produto.getQuantidade() !== filtro.quantidade) {
            isMatch = false;
        }
        if (filtro.referencia && produto.getReferencia() !== filtro.referencia) {
            isMatch = false;
        }
        if (filtro.categoria && produto.getCategoria() !== filtro.categoria) {
            isMatch = false;
        }
        return isMatch;
    });
}

// Exemplo de uso da função de filtro
// const filtro = {
//     codigo_de_barras: "5449000000996",
//     quantidade: 132,
//     referencia: "COCA COLA LATA",
//     categoria: "AdegaEBebidas",
// };

// const produtosFiltrados = filtrarProdutos(produtos, filtro);
// console.log(produtosFiltrados);

/*
const produto = [
    // ---------------------- Exemplos dos produtos --------------------------
    { codigo_de_barras: "5449000000996", quantidade: 132, referencia: "COCA COLA LATA", categoria: "AdegaEBebidas", imagem: "https://www.designi.com.br/images/preview/10000392.jpg" },
    { codigo_de_barras: "7896094902309", quantidade: 60, referencia: "SABÃO EM PÓ BRILHANTE", categoria: "Limpeza", imagem: "https://www.brilhante.com.br/images/h0nadbhvm6m4/xoPSpsGMoM5KYjb95nExm/e399ac6111ed4d57d7d56dd1bcac253c/Nl9iYWcucG5n/1080w-1080h/sab%C3%A3o-em-p%C3%B3-brilhante-limpeza-total.jpg" },
    { codigo_de_barras: "7891000102626", quantidade: 160, referencia: "AVEIA FLOCOS FINOS NESTLE", categoria: "Cereais", imagem: "https://m.media-amazon.com/images/I/91SQwkLqNjL.jpg" },
    { codigo_de_barras: "7596324589159", quantidade: 200, referencia: "TOMATE", categoria: "Merceria", imagem: "https://img.freepik.com/fotos-gratis/tomates-vermelhos-frescos_2829-13449.jpg" },
    { codigo_de_barras: "7596875694789", quantidade: 123, referencia: "PÃO FRANCÊS", categoria: "Padaria", imagem: "https://redemix.vteximg.com.br/arquivos/ids/214544-1000-1000/6914.jpg?v=638351307421600000" },
    { codigo_de_barras: "7896102502305", quantidade: 132, referencia: "EXTRATO DE TOMATE QUERO LATA", categoria: "Enlatados", imagem: "https://rafasupervarejao.com.br/32029/7896102502305-extrato-de-tomate-quero-350g.jpg" },


// --------------------------------- Adega e Bebida ----------------------------------

    { codigo_de_barras: "5449000000996", quantidade: 132, referencia: "COCA COLA LATA", categoria: "AdegaEBebidas", imagem: "https://www.designi.com.br/images/preview/10000392.jpg" },
    { codigo_de_barras: "7891234567895", quantidade: 100, referencia: "ÁGUA MINERAL INDAIÁ COM GÁS", categoria: "AdegaEBebidas", imagem: "https://redemix.vteximg.com.br/arquivos/ids/212919-1000-1000/7896445490550.jpg?v=638350619728100000" },
    { codigo_de_barras: "", quantidade: 150, referencia: "SUCO NATURAL ONE LARANJA", categoria: "AdegaEBebidas", imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/83140-suco-de-laranja-natural-one-300ml.20221007152342.jpg " },
    { codigo_de_barras: "7891000054321", quantidade: 120, referencia: "IOGURTE NESTLE", categoria: "AdegaEBebidas", imagem: "https://www.designi.com.br/images/preview/10809892.jpg" },
    { codigo_de_barras: "7891234567890", quantidade: 110, referencia: "VINHO QUINTA DO MORGADO SUAVE", categoria: "AdegaEBebidas", imagem: "https://ingavinhos.vtexassets.com/arquivos/ids/159984-800-auto?v=637879651190700000&width=800&height=auto&aspect=true" },


    // --------------------------- Higiene e Limpeza ------------------------------

    { codigo_de_barras: "7896006758016", quantidade: 99, referencia: "PAPEL HIGIÊNICO NEVE", categoria: "Limpeza", imagem: "https://acdn.mitiendanube.com/stores/455/258/products/78960187047321-11141ff854695952b116607591667237-640-0.png" },
    { codigo_de_barras: "7891010554321", quantidade: 90, referencia: "COTONETE JOHNSON & JOHNSON", categoria: "Limpeza", imagem: "https://ingavinhos.vtexassets.com/arquivos/ids/159984-800-auto?v=637879651190700000&width=800&height=auto&aspect=true" },
    { codigo_de_barras: "7891234567890", quantidade: 80, referencia: "BOM AR TALCO", categoria: "Limpeza", imagem: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/20595/medium/desodorizador-bom-ar-cheiro-talco-360ml_92323.png" },
    { codigo_de_barras: "7894900522018", quantidade: 70, referencia: "DESINFETANTE PINHO BRIL LAVANDA", categoria: "Limpeza", imagem: "https://www.designi.com.br/images/preview/10010011.jpg" },
    { codigo_de_barras: "7896094902309", quantidade: 60, referencia: "SABÃO EM PÓ BRILHANTE", categoria: "Limpeza", imagem: "https://www.brilhante.com.br/images/h0nadbhvm6m4/xoPSpsGMoM5KYjb95nExm/e399ac6111ed4d57d7d56dd1bcac253c/Nl9iYWcucG5n/1080w-1080h/sab%C3%A3o-em-p%C3%B3-brilhante-limpeza-total.jpg" },


    // ----------------------- Cereais ---------------------

    { codigo_de_barras: "17897001080175", quantidade: 60, referencia: "FARINHA DE TRIGO COCAMAR", categoria: "Cereais", imagem: "https://cocamarstore.vtexassets.com/arquivos/ids/158680-800-800?v=637484340703600000&width=800&height=800&aspect=true" },
    { codigo_de_barras: "7893500020158", quantidade: 200, referencia: "ARROZ TIO JÕAO", categoria: "Cereais", imagem: "https://static.paodeacucar.com/img/uploads/1/678/510678.jpg" },
    { codigo_de_barras: "7896006744108", quantidade: 180, referencia: "FEIJÃO CARIOCA CAMIL", categoria: "Cereais", imagem: "https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/mkp-feijao-carioca-1kg-removebg-preview.png" },
    { codigo_de_barras: "7891000102626", quantidade: 160, referencia: "AVEIA FLOCOS FINOS NESTLE", categoria: "Cereais", imagem: "https://m.media-amazon.com/images/I/91SQwkLqNjL.jpg" },
    { codigo_de_barras: "17891000030056", quantidade: 140, referencia: "CAFÉ NESCAFÉ", categoria: "Cereais", imagem: "https://w7.pngwing.com/pngs/30/533/png-transparent-instant-coffee-nescafe-decaffeination-drink-coffee-food-coffee-grocery-store.png" },


    // ------------------------------- Hortifruti e Mercearia ------------------------

    { codigo_de_barras: "7596324589159", quantidade: 240, referencia: "TOMATE", categoria: "Mercearia", imagem: "https://images.squarespace-cdn.com/content/5b8edfa12714e508f756f481/1539110920439-EEUGCLT2DKKSQFASP7EI/image-asset.jpeg?content-type=image%2Fjpeg" },
    { codigo_de_barras: "7596599783456", quantidade: 300, referencia: "PÊRA", categoria: "Mercearia", imagem: "https://cdn.awsli.com.br/600x450/1294/1294025/produto/62628625/a58c65eee7.jpg" },
    { codigo_de_barras: "7596788456321", quantidade: 280, referencia: "BANANA", categoria: "Mercearia", imagem: "https://ceagesp.gov.br/wp-content/uploads/2019/12/Banana_pratapng.png" },
    { codigo_de_barras: "7598744623987", quantidade: 260, referencia: "ALFACE", categoria: "Mercearia", imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXLRNX5rQcbWp5_4urlC9oIfwlbp90JvTpbMknoK2oKFdd1mTR" },
    { codigo_de_barras: "7591235674851", quantidade: 240, referencia: "BATATA INGLESA", categoria: "Mercearia", imagem: "https://www.redeservebem.com/cdn/shop/products/produto_341_batata_inglesa_copy_1200x1200.jpg?v=1654782055" },


    // --------------------- Padaria -------------------------

    { codigo_de_barras: "7596875694789", quantidade: 123, referencia: "PÃO FRANCÊS", categoria: "Padaria", imagem: "https://redemix.vteximg.com.br/arquivos/ids/214544-1000-1000/6914.jpg?v=638351307421600000" },
    { codigo_de_barras: "7698455689423", quantidade: 15, referencia: "COXINHA DE FRANGO", categoria: "Padaria", tipo: "Salgado", imagem: "https://i.pinimg.com/originals/a8/15/8f/a8158fa8d14610fce67345e85e3171e7.png" },
    { codigo_de_barras: "7895789611230", quantidade: 150, referencia: "BOLO DE LARANJA", categoria: "Padaria", imagem: "https://www.designi.com.br/images/preview/10097378.jpg" },
    { codigo_de_barras: "7898215150138", quantidade: 110, referencia: "QUEIJO MUSSARELA ", categoria: "Padaria", imagem: "https://piracanjuba-institucional-prd.s3.sa-east-1.amazonaws.com/product_images/image/848x1007px_mockup_mussarela_500g-626.webp" },
    { codigo_de_barras: "7891962051345", quantidade: 90, referencia: "PÃO INTEGRAL VISCONTI", categoria: "Padaria", imagem: "https://farmaciaindiana.vtexassets.com/arquivos/ids/236307/7891962051345.jpg?v=637498773746600000" },


    // ---------------------------- enlatados -------------------------------

    { codigo_de_barras: "7891089100018", quantidade: 261, referencia: "AZEITONA LA VIOLETA", categoria: "Enlatados", imagem: "https://www.lavioletera.com.br/modules/brucimgdownload/imagens/produto/10068%20-%2099479%20-%20AZEITONA%20VERDE%20COM%20CAROCO%20GRAUDA%20LA%20VIOLETERA%2012X360G.png" },
    { codigo_de_barras: "7894321811758", quantidade: 180, referencia: "SARDINHA COM ÓLEO COQUEIRO", categoria: "Enlatados", imagem: "https://emporio4estrelas.vtexassets.com/arquivos/ids/160034/Sardinha-com-Oleo-125g-Coqueiro.png?v=637251472889900000" },
    { codigo_de_barras: "7891000120101", quantidade: 200, referencia: "CREME DE LEITE NESTLE", categoria: "Enlatados", imagem: "https://imagens.gimba.com.br/objetosmidia/ExibirObjetoMidia?Id=86812&width=414&height=414" },
    { codigo_de_barras: "7896433641025", quantidade: 150, referencia: "KITUT FIAMBRE,", categoria: "Enlatados", imagem: "https://destro.fbitsstatic.net/img/p/fiambre-kitut-de-carne-bovina-lata-320g-81247/267802.jpg?w=500&h=500&v=no-change&qs=ignore" },
    { codigo_de_barras: "7896102502305", quantidade: 132, referencia: "EXTRATO DE TOMATE QUERO LATA", categoria: "Enlatados", imagem: "https://rafasupervarejao.com.br/32029/7896102502305-extrato-de-tomate-quero-350g.jpg" }

];


/*
function filtrar() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const selectedCategory = document.getElementById('categorySelect').value;

    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    if (searchTerm === '' && selectedCategory === '') {
        return; // Se ambos os campos estiverem vazios, não fazer nada e manter a lista vazia.
    }

    const produtosFiltrados = produtos.filter(produto => {
        const nomeIncluiTermo = produto.referencia.toLowerCase().includes(searchTerm) || produto.codigo_de_barras.includes(searchTerm);
        const categoriaCorreta = selectedCategory === '' || produto.categoria === selectedCategory;
        return nomeIncluiTermo && categoriaCorreta;
    });

    if (produtosFiltrados.length === 0) {
        resultados.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    } else {
        produtosFiltrados.forEach(produto => {
            const produtoElement = document.createElement('div');
            produtoElement.classList.add('result-item');
            produtoElement.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.referencia}" width="100">
                <div>
                    <h4>${produto.referencia}</h4>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Quantidade: ${produto.quantidade}</p>
                    <p>COD Barras: ${produto.codigo_de_barras}</p>
                </div>
            `;
            resultados.appendChild(produtoElement);
        });
    }
}

*/
