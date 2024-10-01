// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra ou não a chave
        value: estoque, //valor
        writable: false, //pode ou não alterar
        configurable: true //configurável ou não 
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))



function Produto2(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra ou não a chave
        value: estoque, //valor
        writable: false, //pode ou não alterar
        configurable: true //configurável ou não 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra ou não a chave
            value: nome, //valor
            writable: false, //pode ou não alterar
            configurable: true //configurável ou não  
        },
        preco: {
            enumerable: true, //mostra ou não a chave
            value: preco, //valor
            writable: false, //pode ou não alterar
            configurable: true //configurável ou não 
        }
    })
}

const p2 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p2))

for (let chave in p2) {
    console.log(chave)
}