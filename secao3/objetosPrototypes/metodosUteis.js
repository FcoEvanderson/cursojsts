/*
Object.values
Object.entries
Obejct.assign (des, any)
Object.getOwnPropertyDescriptor (o, 'prop')
... (spread)

Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (defina uma propriedade)
*/

// const produto = {nome: 'Produto', preco: 1.8}
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// produto.nome = 'Outra coisa'
// delete produto.nome
// console.log(produto)

const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'}

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}