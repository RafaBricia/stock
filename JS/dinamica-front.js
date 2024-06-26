let listaInicial = [
    { codigo_de_barras: "7896006758016", quantidade: 99, referencia: "PAPEL HIGIÊNICO NEVE", categoria: "Limpeza", imagem: "https://acdn.mitiendanube.com/stores/455/258/products/78960187047321-11141ff854695952b116607591667237-640-0.png" },
    { codigo_de_barras: "7891010554321", quantidade: 90, referencia: "COTONETE JOHNSON & JOHNSON", categoria: "Limpeza", imagem: "https://gruposoares.vtexassets.com/arquivos/ids/166090/Cotonetes-Johnson---Johnson-75-unidades.jpg?v=637905043284600000" },
    { codigo_de_barras: "7891234567890", quantidade: 80, referencia: "BOM AR TALCO", categoria: "Limpeza", imagem: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/20595/medium/desodorizador-bom-ar-cheiro-talco-360ml_92323.png" },
    { codigo_de_barras: "7894900522018", quantidade: 70, referencia: "DESINFETANTE PINHO BRIL LAVANDA", categoria: "Limpeza", imagem: "https://www.designi.com.br/images/preview/10010011.jpg" },
    { codigo_de_barras: "7896094902309", quantidade: 60, referencia: "SABÃO EM PÓ BRILHANTE", categoria: "Limpeza", imagem: "https://www.brilhante.com.br/images/h0nadbhvm6m4/xoPSpsGMoM5KYjb95nExm/e399ac6111ed4d57d7d56dd1bcac253c/Nl9iYWcucG5n/1080w-1080h/sab%C3%A3o-em-p%C3%B3-brilhante-limpeza-total.jpg" },

    { codigo_de_barras: "17897001080175", quantidade: 60, referencia: "FARINHA DE TRIGO COCAMAR", categoria: "Cereais", imagem: "https://cocamarstore.vtexassets.com/arquivos/ids/158680-800-800?v=637484340703600000&width=800&height=800&aspect=true" },
    { codigo_de_barras: "7893500020158", quantidade: 200, referencia: "ARROZ TIO JÕAO", categoria: "Cereais", imagem: "https://static.paodeacucar.com/img/uploads/1/678/510678.jpg" },
    { codigo_de_barras: "7896006744108", quantidade: 180, referencia: "FEIJÃO CARIOCA CAMIL", categoria: "Cereais", imagem: "https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/mkp-feijao-carioca-1kg-removebg-preview.png" },
    { codigo_de_barras: "7891000102626", quantidade: 160, referencia: "AVEIA FLOCOS FINOS NESTLE", categoria: "Cereais", imagem: "https://m.media-amazon.com/images/I/91SQwkLqNjL.jpg" },
    { codigo_de_barras: "17891000030056", quantidade: 140, referencia: "CAFÉ NESCAFÉ", categoria: "Cereais", imagem: "https://w7.pngwing.com/pngs/30/533/png-transparent-instant-coffee-nescafe-decaffeination-drink-coffee-food-coffee-grocery-store.png" },

    { codigo_de_barras: "5449000000996", quantidade: 132, referencia: "COCA COLA LATA", categoria: "AdegaEBebidas", imagem: "https://sudoestedistribuidora.com.br/wp-content/uploads/2023/02/REFRIGERANTE-COCA-COLA-LATA-ZERO-350ML.png" },
    { codigo_de_barras: "7891234567895", quantidade: 100, referencia: "ÁGUA MINERAL INDAIÁ COM GÁS", categoria: "AdegaEBebidas", imagem: "https://redemix.vteximg.com.br/arquivos/ids/212919-1000-1000/7896445490550.jpg?v=638350619728100000" },
    { codigo_de_barras: "", quantidade: 150, referencia: "SUCO NATURAL ONE LARANJA", categoria: "AdegaEBebidas", imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/83140-suco-de-laranja-natural-one-300ml.20221007152342.jpg " },
    { codigo_de_barras: "7891000054321", quantidade: 120, referencia: "IOGURTE NESTLE", categoria: "AdegaEBebidas", imagem: "https://www.designi.com.br/images/preview/10809892.jpg" },
    { codigo_de_barras: "7891234567890", quantidade: 110, referencia: "VINHO QUINTA DO MORGADO SUAVE", categoria: "AdegaEBebidas", imagem: "https://ingavinhos.vtexassets.com/arquivos/ids/159984-800-auto?v=637879651190700000&width=800&height=auto&aspect=true" },

    { codigo_de_barras: "7596324589159", quantidade: 240, referencia: "TOMATE", categoria: "Mercearia", imagem: "https://images.squarespace-cdn.com/content/5b8edfa12714e508f756f481/1539110920439-EEUGCLT2DKKSQFASP7EI/image-asset.jpeg?content-type=image%2Fjpeg" },
    { codigo_de_barras: "7596599783456", quantidade: 300, referencia: "PÊRA", categoria: "Mercearia", imagem: "https://cdn.awsli.com.br/600x450/1294/1294025/produto/62628625/a58c65eee7.jpg" },
    { codigo_de_barras: "7596788456321", quantidade: 280, referencia: "BANANA", categoria: "Mercearia", imagem: "https://ceagesp.gov.br/wp-content/uploads/2019/12/Banana_pratapng.png" },
    { codigo_de_barras: "7598744623987", quantidade: 260, referencia: "ALFACE", categoria: "Mercearia", imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXLRNX5rQcbWp5_4urlC9oIfwlbp90JvTpbMknoK2oKFdd1mTR" },
    { codigo_de_barras: "7591235674851", quantidade: 240, referencia: "BATATA INGLESA", categoria: "Mercearia", imagem: "https://www.redeservebem.com/cdn/shop/products/produto_341_batata_inglesa_copy_1200x1200.jpg?v=1654782055" },

    { codigo_de_barras: "7596875694789", quantidade: 123, referencia: "PÃO FRANCÊS", categoria: "Padaria", imagem: "https://redemix.vteximg.com.br/arquivos/ids/214544-1000-1000/6914.jpg?v=638351307421600000" },
    { codigo_de_barras: "7698455689423", quantidade: 15, referencia: "COXINHA DE FRANGO", categoria: "Padaria", tipo: "Salgado", imagem: "https://i.pinimg.com/originals/a8/15/8f/a8158fa8d14610fce67345e85e3171e7.png" },
    { codigo_de_barras: "7895789611230", quantidade: 150, referencia: "BOLO DE LARANJA", categoria: "Padaria", imagem: "https://www.designi.com.br/images/preview/10097378.jpg" },
    { codigo_de_barras: "7898215150138", quantidade: 110, referencia: "QUEIJO MUSSARELA ", categoria: "Padaria", imagem: "https://piracanjuba-institucional-prd.s3.sa-east-1.amazonaws.com/product_images/image/848x1007px_mockup_mussarela_500g-626.webp" },
    { codigo_de_barras: "7891962051345", quantidade: 90, referencia: "PÃO INTEGRAL VISCONTI", categoria: "Padaria", imagem: "https://farmaciaindiana.vtexassets.com/arquivos/ids/236307/7891962051345.jpg?v=637498773746600000" },

    { codigo_de_barras: "7891089100018", quantidade: 261, referencia: "AZEITONA LA VIOLETA", categoria: "Enlatados", imagem: "https://www.lavioletera.com.br/modules/brucimgdownload/imagens/produto/10068%20-%2099479%20-%20AZEITONA%20VERDE%20COM%20CAROCO%20GRAUDA%20LA%20VIOLETERA%2012X360G.png" },
    { codigo_de_barras: "7894321811758", quantidade: 180, referencia: "SARDINHA COM ÓLEO COQUEIRO", categoria: "Enlatados", imagem: "https://emporio4estrelas.vtexassets.com/arquivos/ids/160034/Sardinha-com-Oleo-125g-Coqueiro.png?v=637251472889900000" },
    { codigo_de_barras: "7891000120101", quantidade: 200, referencia: "CREME DE LEITE NESTLE", categoria: "Enlatados", imagem: "https://imagens.gimba.com.br/objetosmidia/ExibirObjetoMidia?Id=86812&width=414&height=414" },
    { codigo_de_barras: "7896433641025", quantidade: 150, referencia: "KITUT FIAMBRE,", categoria: "Enlatados", imagem: "https://destro.fbitsstatic.net/img/p/fiambre-kitut-de-carne-bovina-lata-320g-81247/267802.jpg?w=500&h=500&v=no-change&qs=ignore" },
    { codigo_de_barras: "7896102502305", quantidade: 132, referencia: "EXTRATO DE TOMATE QUERO LATA", categoria: "Enlatados", imagem: "https://rafasupervarejao.com.br/32029/7896102502305-extrato-de-tomate-quero-350g.jpg" }


];

let storageDefined = localStorage.getItem('listaProdutos');
let categoriaPesquisada;
if (!storageDefined || storageDefined === 'undefined') {
    localStorage.setItem('listaProdutos', JSON.stringify(listaInicial));
}

let listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));


function salveImageBase64(image) {

    const reader = new FileReader();
    reader.onload = function (e) {
        const imageUrl = e.target.result;
        return imageUrl;
    }

}


document.addEventListener("DOMContentLoaded", () => {
    const produtoForm = document.getElementById("produtoForm");


    const pesquisa = document.getElementById('pesquisa-produto');

    // Função para salvar produtos no localStorage
    function salvarProdutoNoLocalStorage(produto) {
        listaProdutos.push(produto);

        localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos));
    }

    // Evento de submissão do formulário
    if (pesquisa) {

        pesquisa.addEventListener('change', (event) => {
            listaProdutos.forEach(element => {
                if (element.referencia.toLowerCase() === event.target.value.toLowerCase()
                    || element.codigo_de_barras.toLowerCase() === event.target.value.toLowerCase()) {

                    let categoria = element.categoria;

                    localStorage.setItem('produtoPesquisado', JSON.stringify(element))
                    switch (categoria) {

                        case "Limpeza":
                            categoriaPesquisada = 'limpeza';
                            window.location.href = "../HTML/tela-visualização-bebida-estendida-2.html";
                            break;

                        case "Cereais":
                            categoriaPesquisada = 'cereais';

                            window.location.href = "../HTML/tela-visualização-bebida-estendida-2.html";
                            break;

                        case "AdegaEBebidas":
                            categoriaPesquisada = 'adegaEBebidas';

                            window.location.href = "../HTML/tela-visualização-bebida-estendida-2.html";
                            break;
                        case "Padaria":
                            categoriaPesquisada = 'padaria';

                            window.location.href = "../HTML/tela-visualização-bebida-estendida-2.html";
                            break;
                        case "Enlatados":
                            categoriaPesquisada = 'enlatados';

                            window.location.href = "../HTML/tela-visualização-bebida-estendida-2.html";
                            break;
                        case "Mercearia":
                            categoriaPesquisada = 'mercearia';

                            window.location.href = "../HTML/tela-visualização-bebida-estendida-2.html";
                            break;
                    }
                }

            });

        });
    }

    let visualizacaoProduto = document.getElementById('produtoDetalhado');

    if (visualizacaoProduto) {
        document.getElementById('produtoDetalhado').style.display = 'block';
        let produtoPesquisado = JSON.parse(localStorage.getItem('produtoPesquisado'))
        document.getElementById('fotoAmpliada').src = produtoPesquisado.imagem;

        document.getElementById('codigoVisualizacao').innerHTML += `${produtoPesquisado.codigo_de_barras}`

        document.getElementById('referenciaVisualizacao').innerHTML += `${produtoPesquisado.referencia}`

        document.getElementById('quantidadeVisualizacao').innerHTML += `${produtoPesquisado.quantidade}`

        function remover(){
            localStorage.setItem("produtoPesquisado", JSON.stringify(element))
        }
        

        localStorage.removeItem('produtoPesquisado')

    }

    if (produtoForm) {
        produtoForm.addEventListener('click', (event) => {

            event.preventDefault();
            const codigo_de_barras = document.getElementById("codigo").value ? document.getElementById("codigo").value : null;
            const referencia = document.getElementById("referencia").value ? document.getElementById("referencia").value : null;
            const quantidade = document.getElementById("quantidade").value ? document.getElementById("quantidade").value : null;
            const categoria = document.getElementById("categorias").value ? document.getElementById("categorias").value : null;

            const fileInput = document.getElementById("add-image");
            const imageFile = fileInput.files[0];
            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imageUrl = e.target.result;
                    const novoProduto = { codigo_de_barras, referencia, quantidade, categoria, imagem: imageUrl };
                    salvarProdutoNoLocalStorage(novoProduto);
                };
                reader.readAsDataURL(imageFile);
            } else {
                const novoProduto = { codigo_de_barras, referencia, quantidade, categoria };
                salvarProdutoNoLocalStorage(novoProduto);
            }
        });
    }


    // ------------------------ VISUALIZAR CATEGORIA DE BEBIDAS --------------------------

    let visualizacaoListaProdutos = document.getElementById('listaProdutosBebidas');

    if (visualizacaoListaProdutos) {
        listaProdutos.forEach((element, index) => {
            if (element.categoria === 'AdegaEBebidas') {
                let produtoLinha = document.createElement('div');
                produtoLinha.classList.add('produto-linha');
                produtoLinha.id = `produto-linha-${index}`;
                let botaoRemocaoId = `removerLinha-${index}`
                let abrirProduto = `abrirProduto-${index}`

                produtoLinha.innerHTML = `
                    <img src="${element.imagem}" alt="foto de produto" class="produto" height="80px" width="80px">
                    <div id="dados-do-produto" class="visualizacao-multipla">
                        <ul >
                        <a id="${abrirProduto}" href="./tela-visualização-bebida-estendida-2.html">
                            <li class="codigo"><strong>Código de Barras:</strong> ${element.codigo_de_barras}</li>
                            <li class="referencia"><strong>Referência:</strong> ${element.referencia}</li>
                            <li class="disponivel not-transparent"><strong>Disponível:</strong> ${element.quantidade}</li>
                        </a></ul>
                    </div>
                    <a>
                        <button type="button" class="button-lixeira" id="${botaoRemocaoId}"><img src="../ÍCONES/lixeira cinza icone.svg" alt="" height="50px" width="50px"></button>
                    </a>
                `;
                visualizacaoListaProdutos.appendChild(produtoLinha);

                let elementBotaoRemovao = document.getElementById(botaoRemocaoId)
                elementBotaoRemovao.addEventListener('click', () => {
                    const produtoLinha = document.getElementById(`produto-linha-${index}`);
                    listaProdutos.splice(index, 1)
                    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos))
                    if (produtoLinha) {
                        produtoLinha.remove();
                    }
                });

                let elementAbrirProduto = document.getElementById(abrirProduto)
                elementAbrirProduto.addEventListener('click', () => {
                    console.log(element)
                    localStorage.setItem("produtoPesquisado", JSON.stringify(element))

                });


            }

        });

    }


    // ------------------------ VISUALIZAR CATEGORIA DE CEREAIS --------------------------

    let visualizacaoListaCereais = document.getElementById('listaProdutosCereais');

    if (visualizacaoListaCereais) {
        listaProdutos.forEach((element, index) => {
            if (element.categoria === 'Cereais') {
                let produtoLinha = document.createElement('div');
                produtoLinha.classList.add('produto-linha');
                produtoLinha.id = `produto-linha-${index}`;
                let botaoRemocaoId = `removerLinha-${index}`
                let abrirProduto = `abrirProduto-${index}`

                produtoLinha.innerHTML = `
                    <img src="${element.imagem}" alt="foto de produto" class="produto" height="80px" width="80px">
                    <div id="dados-do-produto" class="visualizacao-multipla">
                        <ul >
                        <a id="${abrirProduto}" href="./tela-visualização-bebida-estendida-2.html">
                            <li class="codigo"><strong>Código de Barras:</strong> ${element.codigo_de_barras}</li>
                            <li class="referencia"><strong>Referência:</strong> ${element.referencia}</li>
                            <li class="disponivel not-transparent"><strong>Disponível:</strong> ${element.quantidade}</li>
                        </a></ul>
                    </div>
                    <a>
                        <button type="button" class="button-lixeira" id="${botaoRemocaoId}"><img src="../ÍCONES/lixeira cinza icone.svg" alt="" height="50px" width="50px"></button>
                    </a>
                `;
                visualizacaoListaCereais.appendChild(produtoLinha);

                let elementBotaoRemovao = document.getElementById(botaoRemocaoId)
                elementBotaoRemovao.addEventListener('click', () => {
                    const produtoLinha = document.getElementById(`produto-linha-${index}`);
                    listaProdutos.splice(index, 1)
                    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos))
                    if (produtoLinha) {
                        produtoLinha.remove();
                    }
                });

                let elementAbrirProduto = document.getElementById(abrirProduto)
                elementAbrirProduto.addEventListener('click', () => {
                    console.log(element)
                    localStorage.setItem("produtoPesquisado", JSON.stringify(element))

                });


            }

        });

    }


    // ------------------------ VISUALIZAR CATEGORIA DE LIMPEZA --------------------------

    let visualizacaoListaLimpeza = document.getElementById('listaProdutosLimpeza');

    if (visualizacaoListaLimpeza) {
        listaProdutos.forEach((element, index) => {
            if (element.categoria === 'Limpeza') {
                let produtoLinha = document.createElement('div');
                produtoLinha.classList.add('produto-linha');
                produtoLinha.id = `produto-linha-${index}`;
                let botaoRemocaoId = `removerLinha-${index}`
                let abrirProduto = `abrirProduto-${index}`

                produtoLinha.innerHTML = `
                    <img src="${element.imagem}" alt="foto de produto" class="produto" height="80px" width="80px">
                    <div id="dados-do-produto" class="visualizacao-multipla">
                        <ul >
                        <a id="${abrirProduto}" href="./tela-visualização-bebida-estendida-2.html">
                            <li class="codigo"><strong>Código de Barras:</strong> ${element.codigo_de_barras}</li>
                            <li class="referencia"><strong>Referência:</strong> ${element.referencia}</li>
                            <li class="disponivel not-transparent"><strong>Disponível:</strong> ${element.quantidade}</li>
                        </a></ul>
                    </div>
                    <a>
                        <button type="button" class="button-lixeira" id="${botaoRemocaoId}"><img src="../ÍCONES/lixeira cinza icone.svg" alt="" height="50px" width="50px"></button>
                    </a>
                `;
                visualizacaoListaLimpeza.appendChild(produtoLinha);

                let elementBotaoRemovao = document.getElementById(botaoRemocaoId)
                elementBotaoRemovao.addEventListener('click', () => {
                    const produtoLinha = document.getElementById(`produto-linha-${index}`);
                    listaProdutos.splice(index, 1)
                    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos))
                    if (produtoLinha) {
                        produtoLinha.remove();
                    }
                });

                let elementAbrirProduto = document.getElementById(abrirProduto)
                elementAbrirProduto.addEventListener('click', () => {
                    console.log(element)
                    localStorage.setItem("produtoPesquisado", JSON.stringify(element))

                });


            }

        });

    }

    // ------------------------ VISUALIZAR CATEGORIA DE ENLATADOS --------------------------

    let visualizacaoListaEnlatados = document.getElementById('listaProdutosEnlatados');

    if (visualizacaoListaEnlatados) {
        listaProdutos.forEach((element, index) => {
            if (element.categoria === 'Enlatados') {
                let produtoLinha = document.createElement('div');
                produtoLinha.classList.add('produto-linha');
                produtoLinha.id = `produto-linha-${index}`;
                let botaoRemocaoId = `removerLinha-${index}`
                let abrirProduto = `abrirProduto-${index}`

                produtoLinha.innerHTML = `
                    <img src="${element.imagem}" alt="foto de produto" class="produto" height="80px" width="80px">
                    <div id="dados-do-produto" class="visualizacao-multipla">
                        <ul >
                        <a id="${abrirProduto}" href="./tela-visualização-bebida-estendida-2.html">
                            <li class="codigo"><strong>Código de Barras:</strong> ${element.codigo_de_barras}</li>
                            <li class="referencia"><strong>Referência:</strong> ${element.referencia}</li>
                            <li class="disponivel not-transparent"><strong>Disponível:</strong> ${element.quantidade}</li>
                        </a></ul>
                    </div>
                    <a>
                        <button type="button" class="button-lixeira" id="${botaoRemocaoId}"><img src="../ÍCONES/lixeira cinza icone.svg" alt="" height="50px" width="50px"></button>
                    </a>
                `;
                visualizacaoListaEnlatados.appendChild(produtoLinha);

                let elementBotaoRemovao = document.getElementById(botaoRemocaoId)
                elementBotaoRemovao.addEventListener('click', () => {
                    const produtoLinha = document.getElementById(`produto-linha-${index}`);
                    listaProdutos.splice(index, 1)
                    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos))
                    if (produtoLinha) {
                        produtoLinha.remove();
                    }
                });

                let elementAbrirProduto = document.getElementById(abrirProduto)
                elementAbrirProduto.addEventListener('click', () => {
                    console.log(element)
                    localStorage.setItem("produtoPesquisado", JSON.stringify(element))

                });


            }

        });

    }


    // ------------------------ VISUALIZAR CATEGORIA DE MERCEARIA --------------------------

    let visualizacaoListaMercearia = document.getElementById('listaProdutosMercearia');

    if (visualizacaoListaMercearia) {
        listaProdutos.forEach((element, index) => {
            if (element.categoria === 'Mercearia') {
                let produtoLinha = document.createElement('div');
                produtoLinha.classList.add('produto-linha');
                produtoLinha.id = `produto-linha-${index}`;
                let botaoRemocaoId = `removerLinha-${index}`
                let abrirProduto = `abrirProduto-${index}`

                produtoLinha.innerHTML = `
                     <img src="${element.imagem}" alt="foto de produto" class="produto" height="80px" width="80px">
                     <div id="dados-do-produto" class="visualizacao-multipla">
                         <ul >
                         <a id="${abrirProduto}" href="./tela-visualização-bebida-estendida-2.html">
                             <li class="codigo"><strong>Código de Barras:</strong> ${element.codigo_de_barras}</li>
                             <li class="referencia"><strong>Referência:</strong> ${element.referencia}</li>
                             <li class="disponivel not-transparent"><strong>Disponível:</strong> ${element.quantidade}</li>
                         </a></ul>
                     </div>
                     <a>
                         <button type="button" class="button-lixeira" id="${botaoRemocaoId}"><img src="../ÍCONES/lixeira cinza icone.svg" alt="" height="50px" width="50px"></button>
                     </a>
                 `;
                visualizacaoListaMercearia.appendChild(produtoLinha);

                let elementBotaoRemovao = document.getElementById(botaoRemocaoId)
                elementBotaoRemovao.addEventListener('click', () => {
                    const produtoLinha = document.getElementById(`produto-linha-${index}`);
                    listaProdutos.splice(index, 1)
                    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos))
                    if (produtoLinha) {
                        produtoLinha.remove();
                    }
                });

                let elementAbrirProduto = document.getElementById(abrirProduto)
                elementAbrirProduto.addEventListener('click', () => {
                    console.log(element)
                    localStorage.setItem("produtoPesquisado", JSON.stringify(element))

                });


            }

        });

    }

    // ------------------------ VISUALIZAR CATEGORIA DE PADARIA --------------------------

    let visualizacaoListaPadaria = document.getElementById('listaProdutosPadaria');

    if (visualizacaoListaPadaria) {
        listaProdutos.forEach((element, index) => {
            if (element.categoria === 'Padaria') {
                let produtoLinha = document.createElement('div');
                produtoLinha.classList.add('produto-linha');
                produtoLinha.id = `produto-linha-${index}`;
                let botaoRemocaoId = `removerLinha-${index}`
                let abrirProduto = `abrirProduto-${index}`

                produtoLinha.innerHTML = `
                    <img src="${element.imagem}" alt="foto de produto" class="produto" height="80px" width="80px">
                    <div id="dados-do-produto" class="visualizacao-multipla">
                        <ul >
                        <a id="${abrirProduto}" href="./tela-visualização-bebida-estendida-2.html">
                            <li class="codigo"><strong>Código de Barras:</strong> ${element.codigo_de_barras}</li>
                            <li class="referencia"><strong>Referência:</strong> ${element.referencia}</li>
                            <li class="disponivel not-transparent"><strong>Disponível:</strong> ${element.quantidade}</li>
                        </a></ul>
                    </div>
                    <a href=./tela-verificar-remove.html>
                        <button type="button" class="button-lixeira" id="${botaoRemocaoId}"><img src="../ÍCONES/lixeira cinza icone.svg" alt="" height="50px" width="50px"></button>
                    </a>
                `;
                visualizacaoListaPadaria.appendChild(produtoLinha);

                let elementBotaoRemovao = document.getElementById(botaoRemocaoId)
                elementBotaoRemovao.addEventListener('click', () => {
                    const produtoLinha = document.getElementById(`produto-linha-${index}`);
                    listaProdutos.splice(index, 1)
                    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos))
                    if (produtoLinha) {
                        produtoLinha.remove();
                    }
                });

                let elementAbrirProduto = document.getElementById(abrirProduto)
                elementAbrirProduto.addEventListener('click', () => {
                    console.log(element)
                    localStorage.setItem("produtoPesquisado", JSON.stringify(element))

                });
            }
        });
    }
});


