// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//reduce(function(acumulador, valor, indice, array){})
const somaTudo = numeros.reduce((acumulador, valor) => acumulador += valor, 0)
const pares =  numeros.filter(valor => valor % 2 === 0)
// console.log(pares)



// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
]

const older = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(older)