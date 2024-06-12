const Produto = require("./Produto.js")


// --------------------- LISTAS DE CATEGORIAS --------------------- 

let listaLimpeza = []
let listaCereais = []
let listaAdegasEBebidas = []
let listaMercearia = []
let listaPadaria = []
let listaEnlatados = []

// --------------------- LISTA GERAL DE PRODUTOS --------------------- 

let listaGeralProdutos = []

// --------------------- FUNÇÕES VER PREENCHIMENTO DAS ARRAYLISTS --------------------- 

function listaPreenchida(){

    if (listaLimpeza.length > 0){
        listaGeralProdutos.push((listaLimpeza));
    } 
    
    if (listaAdegasEBebidas.length > 0){
        listaGeralProdutos.push(listaAdegasEBebidas);
    }
    
    if (listaCereais.length > 0){
        listaGeralProdutos.push(listaCereais);
    } 
    
    if (listaEnlatados.length > 0){
        listaGeralProdutos.push(listaEnlatados);
    }
    
    if (listaMercearia.length > 0){
        listaGeralProdutos.push(listaMercearia);
    }
    
    if (listaPadaria.length > 0){
        listaGeralProdutos.push(listaPadaria);
    }
}

// --------------------- FUNÇÕES EXIST --------------------- 

function existProduto(produto) {

    let exist = false;

    let categoria = produto.categoria;

    switch (categoria) {

        case "Limpeza":

            for (let p of listaLimpeza) {
                if ((produto.getCodigo_de_barras() === p.getCodigo_de_barras()) && (produto.getQuantidade() === p.getQuantidade()) && (produto.getReferencia() === p.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "AdegaBebidas":

            for (let p of listaAdegasEBebidas) {
                if ((produto.getCodigo_de_barras() === p.getCodigo_de_barras()) && (produto.getQuantidade() === p.getQuantidade()) && (produto.getReferencia() === p.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "Cereais":

            for (let p of listaCereais) {
                if ((produto.getCodigo_de_barras() === p.getCodigo_de_barras()) && (produto.getQuantidade() === p.getQuantidade()) && (produto.getReferencia() === p.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "Padaria":

            for (let p of listaPadaria) {
                if ((produto.getCodigo_de_barras() === p.getCodigo_de_barras()) && (produto.getQuantidade() === p.getQuantidade()) && (produto.getReferencia() === p.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "Mercearia":

            for (let p of listaMercearia) {
                if ((produto.getCodigo_de_barras() === p.getCodigo_de_barras()) && (produto.getQuantidade() === p.getQuantidade()) && (produto.getReferencia() === p.getReferencia())) {
                    exist = true;
                }
            }
            break;

        case "Enlatados":

            for (let p of listaEnlatados) {
                if ((produto.getCodigo_de_barras() === p.getCodigo_de_barras()) && (produto.getQuantidade() === p.getQuantidade()) && (produto.getReferencia() === p.getReferencia())) {
                    exist = true;
                }
            }
            break;
    }
    return exist;
}

// --------------------- FUNÇÃO LISTAR PRODUTOS GERAIS --------------------- 

function listarProdutosGerais() {

    listaPreenchida()

    for (let p of listaGeralProdutos){

        for(let lista of p){

            console.log();
            console.log("Código de Barras: ", lista.codigo_de_barras);
            console.log("Referência:", lista.referencia);
            console.log("Disponível:", lista.quantidade);

        }

    }
}

// --------------------- FUNÇÃO LISTAR PRODUTOS DAS CATEGORIAS --------------------- 

function listarBebidas() {

    let cont = 1;

    for (let p of listaAdegasEBebidas) {

        console.log(cont, ")")
        console.log("Código de Barras: ", p.getCodigo_de_barras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())
        console.log()
        console.log()
        cont += 1

    }
}

function listarProdutoLimpeza() {

    for (let p of listaLimpeza) {

        console.log("Código de Barras: ", p.getCodigo_de_barras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

function listarEnlatados() {

    for (let p of listaEnlatados) {

        console.log("Código de Barras: ", p.getCodigo_de_barras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

function listarPadaria() {

    for (let p of listaPadaria) {

        console.log("Código de Barras: ", p.getCodigo_de_barras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

function listarMercearia() {

    for (let p of listaMercearia) {

        console.log("Código de Barras: ", p.getCodigo_de_barras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

function listarCereais() {

    for (let p of listaCereais) {

        console.log("Código de Barras: ", p.getCodigo_de_barras())
        console.log("Referência:", p.getReferencia())
        console.log("Disponível:", p.getQuantidade())

    }
}

// --------------------- FUNÇÃO ADICIONAR PRODUTOS NA LISTA DA CATEGORIA --------------------- 

function adicionarProduto(produto) {

    let categoria = produto.categoria

    switch (categoria) {

        case "Limpeza":

            if (existProduto(produto)) {
                console.log("Produto já cadastrado anteriormente.")
            } else {
                listaLimpeza.push(produto)
                console.log("Produto cadasatrado")
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


function removerProduto(produto) {

    let categoria = produto.categoria

    switch (categoria) {

        case "Limpeza":

            if (existProduto(produto)) {
                let index = listaLimpeza.findIndex(p => p.getCodigo_de_barras() === produto.getCodigo_de_barras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1){
                    listaLimpeza.splice(index,1)
                    console.log("Produto removido.")
                }
                
            } else {
                console.log("Produto não existe")
            }
            break;

        case "Mercadoria":

            if (existProduto(produto)) {
                let index = listaMercearia.findIndex(p => p.getCodigo_de_barras() === produto.getCodigo_de_barras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1){
                    listaMercearia.splice(index,1)
                    console.log("Produto removido.")
                }
                
            } else {
                console.log("Produto não existe")
            }
            break;

        case "Padaria":

            if (existProduto(produto)) {
                let index = listaPadaria.findIndex(p => p.getCodigo_de_barras() === produto.getCodigo_de_barras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1){
                    listaPadaria.splice(index,1)
                    console.log("Produto removido.")
                }
                
            } else {
                console.log("Produto não existe")
            }
            break;

        case "Enlatados":

            if (existProduto(produto)) {
                let index = listaEnlatados.findIndex(p => p.getCodigo_de_barras() === produto.getCodigo_de_barras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1){
                    listaEnlatados.splice(index,1)
                    console.log("Produto removido.")
                }
                
            } else {
                console.log("Produto não existe")
            }
            break;

        case "Cereais":

            if (existProduto(produto)) {
                let index = listaCereais.findIndex(p => p.getCodigo_de_barras() === produto.getCodigo_de_barras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1){
                    listaCereais.splice(index,1)
                    console.log("Produto removido.")
                }
                
            } else {
                console.log("Produto não existe")
            }
            break;

        case "AdegaBebidas":

            if (existProduto(produto)) {
                let index = listaAdegasEBebidas.findIndex(p => p.getCodigo_de_barras() === produto.getCodigo_de_barras() && p.getReferencia() === produto.getReferencia())
                if (index !== -1){
                    listaAdegasEBebidas.splice(index,1)
                    console.log("Produto removido.")
                }
                
            } else {
                console.log("Produto não existe")
            }
            break;
    }
}


function visualizacaoGeralProduto(categoria){
    
    switch (categoria){
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

function visualizacaoUnicaProduto(){
    
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
// listarBebidas();

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