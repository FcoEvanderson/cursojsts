//Filter -> Sempre retorna um array com a mesma quantidade 
//de elementos, ou menos 

//Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//filter(function(valor, indice, array){})
const numerosFiltrados = numeros.filter(valor => valor > 10)
// console.log(numerosFiltrados)



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termine com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5)
const pessoasVelhas = pessoas.filter(valor => valor.idade > 50)
const terminaComA = pessoas.filter(valor => 
    valor.nome.toLowerCase().endsWith('a'))
console.log(terminaComA)