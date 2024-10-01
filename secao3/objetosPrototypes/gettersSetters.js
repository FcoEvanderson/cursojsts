function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra ou não a chave
        configurable: true, //configurável ou não 
        get: function(){
            return estoque
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem')
            }
            estoque = valor
        }
        // value: estoque, //valor
        // writable: false, //pode ou não alterar
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))