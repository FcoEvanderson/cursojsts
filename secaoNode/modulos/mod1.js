// const nome = 'Fco'
// const sobrenome = 'Evan'

// const falaNome = () => nome + ' ' + sobrenome

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome
// this.qualquerCoisa = 'O que eu quiser exportar'

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

const nome = 'Fco'
const sobrenome = 'Evan'

module.exports = {
    nome, sobrenome, Pessoa
}

exports.outraCoisa = 'Outra coisa'