import { Produto } from '../JS/Produto.js'


// --------------------- LISTAS DE CATEGORIAS --------------------- 

let listaLimpeza = [

    { codigo_de_barras: "7896006758016", quantidade: 99, referencia: "PAPEL HIGIÊNICO NEVE", categoria: "Limpeza", imagem: "https://acdn.mitiendanube.com/stores/455/258/products/78960187047321-11141ff854695952b116607591667237-640-0.png" },
    { codigo_de_barras: "7891010554321", quantidade: 90, referencia: "COTONETE JOHNSON & JOHNSON", categoria: "Limpeza", imagem: "https://ingavinhos.vtexassets.com/arquivos/ids/159984-800-auto?v=637879651190700000&width=800&height=auto&aspect=true" },
    { codigo_de_barras: "7891234567890", quantidade: 80, referencia: "BOM AR TALCO", categoria: "Limpeza", imagem: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/20595/medium/desodorizador-bom-ar-cheiro-talco-360ml_92323.png" },
    { codigo_de_barras: "7894900522018", quantidade: 70, referencia: "DESINFETANTE PINHO BRIL LAVANDA", categoria: "Limpeza", imagem: "https://www.designi.com.br/images/preview/10010011.jpg" },
    { codigo_de_barras: "7896094902309", quantidade: 60, referencia: "SABÃO EM PÓ BRILHANTE", categoria: "Limpeza", imagem: "https://www.brilhante.com.br/images/h0nadbhvm6m4/xoPSpsGMoM5KYjb95nExm/e399ac6111ed4d57d7d56dd1bcac253c/Nl9iYWcucG5n/1080w-1080h/sab%C3%A3o-em-p%C3%B3-brilhante-limpeza-total.jpg" }

];
let listaCereais = [

    { codigo_de_barras: "17897001080175", quantidade: 60, referencia: "FARINHA DE TRIGO COCAMAR", categoria: "Cereais", imagem: "https://cocamarstore.vtexassets.com/arquivos/ids/158680-800-800?v=637484340703600000&width=800&height=800&aspect=true" },
    { codigo_de_barras: "7893500020158", quantidade: 200, referencia: "ARROZ TIO JÕAO", categoria: "Cereais", imagem: "https://static.paodeacucar.com/img/uploads/1/678/510678.jpg" },
    { codigo_de_barras: "7896006744108", quantidade: 180, referencia: "FEIJÃO CARIOCA CAMIL", categoria: "Cereais", imagem: "https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/mkp-feijao-carioca-1kg-removebg-preview.png" },
    { codigo_de_barras: "7891000102626", quantidade: 160, referencia: "AVEIA FLOCOS FINOS NESTLE", categoria: "Cereais", imagem: "https://m.media-amazon.com/images/I/91SQwkLqNjL.jpg" },
    { codigo_de_barras: "17891000030056", quantidade: 140, referencia: "CAFÉ NESCAFÉ", categoria: "Cereais", imagem: "https://w7.pngwing.com/pngs/30/533/png-transparent-instant-coffee-nescafe-decaffeination-drink-coffee-food-coffee-grocery-store.png" }

]
let listaAdegasEBebidas = [

    { codigo_de_barras: "5449000000996", quantidade: 132, referencia: "COCA COLA LATA", categoria: "AdegaEBebidas", imagem: "https://www.designi.com.br/images/preview/10000392.jpg" },
    { codigo_de_barras: "7891234567895", quantidade: 100, referencia: "ÁGUA MINERAL INDAIÁ COM GÁS", categoria: "AdegaEBebidas", imagem: "https://redemix.vteximg.com.br/arquivos/ids/212919-1000-1000/7896445490550.jpg?v=638350619728100000" },
    { codigo_de_barras: "", quantidade: 150, referencia: "SUCO NATURAL ONE LARANJA", categoria: "AdegaEBebidas", imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/83140-suco-de-laranja-natural-one-300ml.20221007152342.jpg " },
    { codigo_de_barras: "7891000054321", quantidade: 120, referencia: "IOGURTE NESTLE", categoria: "AdegaEBebidas", imagem: "https://www.designi.com.br/images/preview/10809892.jpg" },
    { codigo_de_barras: "7891234567890", quantidade: 110, referencia: "VINHO QUINTA DO MORGADO SUAVE", categoria: "AdegaEBebidas", imagem: "https://ingavinhos.vtexassets.com/arquivos/ids/159984-800-auto?v=637879651190700000&width=800&height=auto&aspect=true" }

]
let listaMercearia = [

    { codigo_de_barras: "7596324589159", quantidade: 240, referencia: "TOMATE", categoria: "Mercearia", imagem: "https://images.squarespace-cdn.com/content/5b8edfa12714e508f756f481/1539110920439-EEUGCLT2DKKSQFASP7EI/image-asset.jpeg?content-type=image%2Fjpeg" },
    { codigo_de_barras: "7596599783456", quantidade: 300, referencia: "PÊRA", categoria: "Mercearia", imagem: "https://cdn.awsli.com.br/600x450/1294/1294025/produto/62628625/a58c65eee7.jpg" },
    { codigo_de_barras: "7596788456321", quantidade: 280, referencia: "BANANA", categoria: "Mercearia", imagem: "https://ceagesp.gov.br/wp-content/uploads/2019/12/Banana_pratapng.png" },
    { codigo_de_barras: "7598744623987", quantidade: 260, referencia: "ALFACE", categoria: "Mercearia", imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXLRNX5rQcbWp5_4urlC9oIfwlbp90JvTpbMknoK2oKFdd1mTR" },
    { codigo_de_barras: "7591235674851", quantidade: 240, referencia: "BATATA INGLESA", categoria: "Mercearia", imagem: "https://www.redeservebem.com/cdn/shop/products/produto_341_batata_inglesa_copy_1200x1200.jpg?v=1654782055" }

]
let listaPadaria = [

    { codigo_de_barras: "7596875694789", quantidade: 123, referencia: "PÃO FRANCÊS", categoria: "Padaria", imagem: "https://redemix.vteximg.com.br/arquivos/ids/214544-1000-1000/6914.jpg?v=638351307421600000" },
    { codigo_de_barras: "7698455689423", quantidade: 15, referencia: "COXINHA DE FRANGO", categoria: "Padaria", tipo: "Salgado", imagem: "https://i.pinimg.com/originals/a8/15/8f/a8158fa8d14610fce67345e85e3171e7.png" },
    { codigo_de_barras: "7895789611230", quantidade: 150, referencia: "BOLO DE LARANJA", categoria: "Padaria", imagem: "https://www.designi.com.br/images/preview/10097378.jpg" },
    { codigo_de_barras: "7898215150138", quantidade: 110, referencia: "QUEIJO MUSSARELA ", categoria: "Padaria", imagem: "https://piracanjuba-institucional-prd.s3.sa-east-1.amazonaws.com/product_images/image/848x1007px_mockup_mussarela_500g-626.webp" },
    { codigo_de_barras: "7891962051345", quantidade: 90, referencia: "PÃO INTEGRAL VISCONTI", categoria: "Padaria", imagem: "https://farmaciaindiana.vtexassets.com/arquivos/ids/236307/7891962051345.jpg?v=637498773746600000" }

]
let listaEnlatados = [

    { codigo_de_barras: "7891089100018", quantidade: 261, referencia: "AZEITONA LA VIOLETA", categoria: "Enlatados", imagem: "https://www.lavioletera.com.br/modules/brucimgdownload/imagens/produto/10068%20-%2099479%20-%20AZEITONA%20VERDE%20COM%20CAROCO%20GRAUDA%20LA%20VIOLETERA%2012X360G.png" },
    { codigo_de_barras: "7894321811758", quantidade: 180, referencia: "SARDINHA COM ÓLEO COQUEIRO", categoria: "Enlatados", imagem: "https://emporio4estrelas.vtexassets.com/arquivos/ids/160034/Sardinha-com-Oleo-125g-Coqueiro.png?v=637251472889900000" },
    { codigo_de_barras: "7891000120101", quantidade: 200, referencia: "CREME DE LEITE NESTLE", categoria: "Enlatados", imagem: "https://imagens.gimba.com.br/objetosmidia/ExibirObjetoMidia?Id=86812&width=414&height=414" },
    { codigo_de_barras: "7896433641025", quantidade: 150, referencia: "KITUT FIAMBRE,", categoria: "Enlatados", imagem: "https://destro.fbitsstatic.net/img/p/fiambre-kitut-de-carne-bovina-lata-320g-81247/267802.jpg?w=500&h=500&v=no-change&qs=ignore" },
    { codigo_de_barras: "7896102502305", quantidade: 132, referencia: "EXTRATO DE TOMATE QUERO LATA", categoria: "Enlatados", imagem: "https://rafasupervarejao.com.br/32029/7896102502305-extrato-de-tomate-quero-350g.jpg" }

]

// --------------------- LISTA GERAL DE PRODUTOS --------------------- 

let listaGeralProdutos = []

// --------------------- FUNÇÕES VER PREENCHIMENTO DAS ARRAYLISTS --------------------- 

export function listaPreenchida() {

    if (listaLimpeza.length > 0) {
        listaGeralProdutos.push((listaLimpeza));
    }

    if (listaAdegasEBebidas.length > 0) {
        listaGeralProdutos.push(listaAdegasEBebidas);
    }

    if (listaCereais.length > 0) {
        listaGeralProdutos.push(listaCereais);
    }

    if (listaEnlatados.length > 0) {
        listaGeralProdutos.push(listaEnlatados);
    }

    if (listaMercearia.length > 0) {
        listaGeralProdutos.push(listaMercearia);
    }

    if (listaPadaria.length > 0) {
        listaGeralProdutos.push(listaPadaria);
    }
}

// --------------------- FUNÇÕES EXIST --------------------- 

export function existProduto(produto) {

    let exist = false;

    let categoria = produto.categoria;

    switch (categoria) {

        case "Limpeza":

            console.log(listaLimpeza);

            for (let p of listaLimpeza) {
                let prodExistente = Produto.fromJSON(p);
                if ((produto.getCodigoBarras() === prodExistente.getCodigoBarras()) && (produto.getQuantidade() === prodExistente.getQuantidade()) && (produto.getReferencia() === prodExistente.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "AdegaBebidas":

            for (let p of listaAdegasEBebidas) {
                let prodExistente = Produto.fromJSON(p);
                if ((produto.getCodigoBarras() === prodExistente.getCodigoBarras()) && (produto.getQuantidade() === prodExistente.getQuantidade()) && (produto.getReferencia() === prodExistente.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "Cereais":

            for (let p of listaCereais) {
                let prodExistente = Produto.fromJSON(p);
                if ((produto.getCodigoBarras() === prodExistente.getCodigoBarras()) && (produto.getQuantidade() === prodExistente.getQuantidade()) && (produto.getReferencia() === prodExistente.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "Padaria":

            for (let p of listaPadaria) {
                let prodExistente = Produto.fromJSON(p);
                if ((produto.getCodigoBarras() === prodExistente.getCodigoBarras()) && (produto.getQuantidade() === prodExistente.getQuantidade()) && (produto.getReferencia() === prodExistente.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "Mercearia":

            for (let p of listaMercearia) {
                let prodExistente = Produto.fromJSON(p);
                if ((produto.getCodigoBarras() === prodExistente.getCodigoBarras()) && (produto.getQuantidade() === prodExistente.getQuantidade()) && (produto.getReferencia() === prodExistente.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "Enlatados":

            for (let p of listaEnlatados) {
                let prodExistente = Produto.fromJSON(p);
                if ((produto.getCodigoBarras() === prodExistente.getCodigoBarras()) && (produto.getQuantidade() === prodExistente.getQuantidade()) && (produto.getReferencia() === prodExistente.getReferencia())) {
                    exist = true;
                }
            }
            break;
    }
    return exist;
}

// --------------------- FUNÇÃO LISTAR PRODUTOS GERAIS --------------------- 

export function listarProdutosGerais() {

    listaPreenchida()

    for (let p of listaGeralProdutos) {

        for (let lista of p) {

            console.log();
            console.log("Código de Barras: ", lista.codigo_de_barras);
            console.log("Referência:", lista.referencia);
            console.log("Disponível:", lista.quantidade);

        }

    }
}

// --------------------- FUNÇÃO LISTAR PRODUTOS DAS CATEGORIAS --------------------- 

export function listarBebidas() {

    let cont = 1;

    for (let p of listaAdegasEBebidas) {

        console.log(cont, ")")
        console.log("Código de Barras: ", p.getCodigoBarras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())
        console.log()
        console.log()
        cont += 1

    }
}

export function listarProdutoLimpeza() {

    for (let prodExistente of listaLimpeza) {
        let p = Produto.fromJSON(prodExistente)

        console.log("Código de Barras: ", p.getCodigoBarras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

export function listarEnlatados() {

    for (let prodExistente of listaEnlatados) {
        let p = Produto.fromJSON(prodExistente)

        console.log("Código de Barras: ", p.getCodigoBarras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

export function listarPadaria() {

    for (let prodExistente of listaPadaria) {
        let p = Produto.fromJSON(prodExistente)

        console.log("Código de Barras: ", p.getCodigoBarras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

export function listarMercearia() {

    for (let prodExistente of listaMercearia) {
        let p = Produto.fromJSON(prodExistente)

        console.log("Código de Barras: ", p.getCodigoBarras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

export function listarCereais() {

    for (let prodExistente of listaCereais) {
        let p = Produto.fromJSON(prodExistente)

        console.log("Código de Barras: ", p.getCodigoBarras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

// --------------------- FUNÇÃO ADICIONAR PRODUTOS NA LISTA DA CATEGORIA --------------------- 

export function adicionarProduto(produto) {

    let categoria = produto.categoria

    switch (categoria) {

        case "Limpeza":

            if (existProduto(produto)) {
                console.log("Produto já cadastrado anteriormente.")
            } else {
                if (localStorage.hasOwnProperty("listaLimpeza")) {
                    listaLimpeza = JSON.parse(localStorage.getItem("listaLimpeza"))
        
                    console.log("Produto QUASE cadastrado")

                }
                
                listaLimpeza.push({produto})
                localStorage.setItem("listaLimpeza", JSON.stringify(listaLimpeza));

                console.log("Produto cadastrado")

                //console.log('antes: ', listaLimpeza, produto.toJSON())
                // listaLimpeza.push(produto.toJSON());
                //console.log('dps: ', listaLimpeza, produto)

            }
            break;

        case "Mercadoria":

            if (existProduto(produto)) {
                console.log("Produto já cadastrado anteriormente.")
            } else {
                listaMercearia.push(produto)
                console.log("Produto cadasatrado")
            }
            break;

        case "Padaria":

            if (existProduto(produto)) {
                console.log("Produto já cadastrado anteriormente.")
            } else {
                listaPadaria.push(produto)
                console.log("Produto cadasatrado")
            }
            break;

        case "Enlatados":

            if (existProduto(produto)) {
                console.log("Produto já cadastrado anteriormente.")
            } else {
                listaEnlatados.push(produto)
                console.log("Produto cadasatrado")
            }
            break;

        case "Cereais":

            if (existProduto(produto)) {
                console.log("Produto já cadastrado anteriormente.")
            } else {
                listaCereais.push(produto)
                console.log("Produto cadasatrado")
            }
            break;

        case "AdegaBebidas":

            if (existProduto(produto)) {
                console.log("Produto já cadastrado anteriormente.")
            } else {
                listaAdegasEBebidas.push(produto)
                console.log("Produto cadasatrado")
            }
            break;
    }
}

// --------------------- FUNÇÃO REMOVER PRODUTOS NA LISTA DA CATEGORIA --------------------- 


export function removerProduto(produto) {

    let categoria = produto.categoria

    switch (categoria) {

        case "Limpeza":

            if (existProduto(produto)) {
                let index = listaLimpeza.findIndex(p => p.getCodigoBarras() === produto.getCodigoBarras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1) {
                    listaLimpeza.splice(index, 1)
                    console.log("Produto removido.")
                }

            } else {
                console.log("Produto não existe")
            }
            break;

        case "Mercadoria":

            if (existProduto(produto)) {
                let index = listaMercearia.findIndex(p => p.getCodigoBarras() === produto.getCodigoBarras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1) {
                    listaMercearia.splice(index, 1)
                    console.log("Produto removido.")
                }

            } else {
                console.log("Produto não existe")
            }
            break;

        case "Padaria":

            if (existProduto(produto)) {
                let index = listaPadaria.findIndex(p => p.getCodigoBarras() === produto.getCodigoBarras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1) {
                    listaPadaria.splice(index, 1)
                    console.log("Produto removido.")
                }

            } else {
                console.log("Produto não existe")
            }
            break;

        case "Enlatados":

            if (existProduto(produto)) {
                let index = listaEnlatados.findIndex(p => p.getCodigoBarras() === produto.getCodigoBarras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1) {
                    listaEnlatados.splice(index, 1)
                    console.log("Produto removido.")
                }

            } else {
                console.log("Produto não existe")
            }
            break;

        case "Cereais":

            if (existProduto(produto)) {
                let index = listaCereais.findIndex(p => p.getCodigoBarras() === produto.getCodigoBarras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1) {
                    listaCereais.splice(index, 1)
                    console.log("Produto removido.")
                }

            } else {
                console.log("Produto não existe")
            }
            break;

        case "AdegaBebidas":

            if (existProduto(produto)) {
                let index = listaAdegasEBebidas.findIndex(p => p.getCodigoBarras() === produto.getCodigoBarras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1) {
                    listaAdegasEBebidas.splice(index, 1)
                    console.log("Produto removido.")
                }

            } else {
                console.log("Produto não existe")
            }
            break;
    }
}


export function visualizacaoGeralProduto(categoria) {

    switch (categoria) {
        case "Limpeza":
            listarProdutoLimpeza();
            break;

        case "AdegaBebida":
            listarBebidas();
            break;

        case "Enlatados":
            listarEnlatados();
            break;

        case "Padaria":
            listarPadaria();
            break;

        case "Mercearia":
            listarMercearia();
            break;

        case "Cereais":
            listarCereais();
            break;
    }
}

function visualizacaoUnicaProduto() {

}

// ---------------------------------- TESTES ----------------------------------- 

// let produto1 = new Produto(757784514, 9, "coca-cola", "AdegaBebidas");
// let produto2 = new Produto(784644514, 15, "fanta", "AdegaBebidas");
// let produto3 = new Produto(784644514, 15, "fanta", "AdegaBebidas");
// adicionarProduto(produto2);
// adicionarProduto(produto1);
// let produto4 = new Produto(12324514, 2, "pão", "Padaria");
// let produto5 = new Produto(967144514, 96, "sabão", "Limpeza");

// console.log(' ------- LISTAR BEBIDAS------');
//listarBebidas();

// console.log(' ------- ADICIONAR PRODUTO ------');
// adicionarProduto(produto3);
// adicionarProduto(produto4);

// console.log(' ------- LISTAR BEBIDAS------');
// listarBebidas();

// console.log(' ------- REMOVER PRODUTO ------');
// removerProduto(produto2);

// console.log(' ------- ADICIONAR PRODUTO ------');
// adicionarProduto(produto5);

// console.log(' ------- LISTAR BEBIDAS------');
// listarBebidas();

// console.log(' ------- ADICIONAR PRODUTO ------');
// adicionarProduto(produto3);

// console.log(' ------- LISTAR BEBIDAS------');
// listarBebidas();

// console.log("-----------------------------");

// console.log(' ------- LISTAR GERAL DE PRODUTOS ------');
// listarProdutosGerais();