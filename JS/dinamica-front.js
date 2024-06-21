// import * as funcao from '../JS/function.js';

// import { Produto } from '../JS/Produto.js';


// let listaLimpeza = [

//     { codigo_de_barras: "7896006758016", quantidade: 99, referencia: "PAPEL HIGIÊNICO NEVE", categoria: "Limpeza", imagem: "https://acdn.mitiendanube.com/stores/455/258/products/78960187047321-11141ff854695952b116607591667237-640-0.png" },
//     { codigo_de_barras: "7891010554321", quantidade: 90, referencia: "COTONETE JOHNSON & JOHNSON", categoria: "Limpeza", imagem: "https://ingavinhos.vtexassets.com/arquivos/ids/159984-800-auto?v=637879651190700000&width=800&height=auto&aspect=true" },
//     { codigo_de_barras: "7891234567890", quantidade: 80, referencia: "BOM AR TALCO", categoria: "Limpeza", imagem: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/20595/medium/desodorizador-bom-ar-cheiro-talco-360ml_92323.png" },
//     { codigo_de_barras: "7894900522018", quantidade: 70, referencia: "DESINFETANTE PINHO BRIL LAVANDA", categoria: "Limpeza", imagem: "https://www.designi.com.br/images/preview/10010011.jpg" },
//     { codigo_de_barras: "7896094902309", quantidade: 60, referencia: "SABÃO EM PÓ BRILHANTE", categoria: "Limpeza", imagem: "https://www.brilhante.com.br/images/h0nadbhvm6m4/xoPSpsGMoM5KYjb95nExm/e399ac6111ed4d57d7d56dd1bcac253c/Nl9iYWcucG5n/1080w-1080h/sab%C3%A3o-em-p%C3%B3-brilhante-limpeza-total.jpg" }

// ];


// // function salvarCOD() {
// //     const codigo = document.getElementById('codigo').value;
// //     localStorage.setItem('codigo', codigo);
// // }


// document.addEventListener("DOMContentLoaded", function () {
//     // const botaoConfirmar = document.getElementById('confirmar-codigo');
//     // if (botaoConfirmar) {
//     //     botaoConfirmar.addEventListener('click', salvarCOD);
//     // }

//     const botaoAdicionar = document.getElementById('bnt-cd');
//     if (botaoAdicionar) {
//         botaoAdicionar.addEventListener('click', adicionar);
//     }
// });

// function adicionar() {
//     return new Promise((resolve) => {
//         const codigo = document.getElementById('codigo').value;
//         const referencia = document.getElementById('referencia').value;
//         const quantidade = document.getElementById('quantidade').value;
//         const categorias = document.getElementById('categorias').value;
//         console.log('oi 2')

//         setTimeout(() => {

//             console.log(localStorage.getItem("listalimpeza") ? localStorage.getItem("listalimpeza") : "ok")

//             let produto = new Produto(codigo, referencia, quantidade, categorias);

//             switch (categorias) {

//                 case "Limpeza":
                    
//                     if (localStorage.hasOwnProperty("listaLimpeza")) {
//                         listaLimpeza = JSON.parse(localStorage.getItem("listaLimpeza"))

//                         console.log("Produto QUASE cadastrado")

//                     }

//                     listaLimpeza.push({codigo, quantidade, referencia, categorias,imagem})
//                     localStorage.setItem("listaLimpeza", JSON.stringify(listaLimpeza));

//                     console.log("Produto cadastrado")
//                     console.log('oi 3')
                    
//                 }
//                     resolve();
//             }, 2000);
//     });
// }
// /*
// function adicionar() {
//     return new Promise((resolve) => {
//             const codigo_de_barras = document.getElementById('codigo').value;
//             const referencia = document.getElementById('referencia').value;
//             const quantidade = document.getElementById('quantidade-produto').value;
//             const categoria = document.getElementById('categorias').value;

//         setTimeout(() => {
//             addEventListener('click', () => {
//                 let produto = new Produto(codigo_de_barras, quantidade, referencia,categoria);
//                 adicionarProduto(produto);
//             });

//             resolve();

//         }, 2000);
//     });
// };
// */

// // console.log(funcao.listarBebidas)



document.addEventListener("DOMContentLoaded", () => {
    alert('carregou')
    const produtoForm = document.getElementById("produtoForm");
    const listaProdutos = document.getElementById("listaProdutos");

    // Função para carregar produtos do localStorage
    function carregarProdutos() {
        const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        produtos.forEach(produto => adicionarProdutoNaLista(produto));
    }

    // Função para adicionar produto na lista visual
    function adicionarProdutoNaLista(produto) {
        const li = document.createElement("li");
        li.textContent = `Nome: ${produto.referencia}, quantidade: ${produto.quantidade}, codigo: ${produto.codigo}, categoria ${produto.categorias}`;
        listaProdutos.appendChild(li);
    }

    // Função para salvar produtos no localStorage
    function salvarProdutoNoLocalStorage(produto) {
        const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        produtos.push(produto);
        localStorage.setItem("produtos", JSON.stringify(produtos));
    }

    // Evento de submissão do formulário
    produtoForm.addEventListener('click', (event) => {
        
        event.preventDefault();

        const referencia = document.getElementById("referencia").value;
        const quantidade = document.getElementById("quantidade").value;
        const codigo = document.getElementById("codigo").value;
        const categorias = document.getElementById("categorias").value;

        const novoProduto = { referencia,quantidade,codigo,categorias };

        adicionarProdutoNaLista(novoProduto);
        salvarProdutoNoLocalStorage(novoProduto);

        // Limpar o formulário após submissão
        produtoForm.reset();
    });

    // Carregar produtos ao iniciar a página
    carregarProdutos();
});