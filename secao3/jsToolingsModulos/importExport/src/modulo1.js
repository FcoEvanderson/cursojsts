// const nome = 'Fco'
// const sobrenome = 'Evan'
// const idade = 30

// const soma = (x, y) => x + y

// export { nome, sobrenome, idade, soma }

export const nome = 'Fco'
export const sobrenome = 'Evan'
export const idade = 30

export function soma(x,y){
    return x + y
}

export default class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }
}

// export default (x, y) => x * y

// export {nome, sobrenome, idade, soma}