const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const write = require('./modules/write')
const read = require('./modules/read')

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Evan'},
//     {nome: 'Iasmin'},
// ]
// const json = JSON.stringify(pessoas, '', 2)
// write(caminhoArquivo, json)

async function lerAquivo (caminho){
    const dados = await read(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val.nome))
}
lerAquivo(caminhoArquivo)