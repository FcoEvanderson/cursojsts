// Escreva uma função que recebe 2 números e retorne o maior deles

const h1 = document.querySelector('h1')
const n1 = Number(prompt('Num 1:'))
const n2 = Number(prompt('Num 2:'))

const maiorNum = (num1, num2) => (num1 === num2) ? h1.innerText = `${num1} and ${num2} are the same`:
    (num1 > num2) ? h1.innerText = `${num1} is bigger than ${num2}` 
    : h1.innerText = `${num2} is bigger than ${num1}`

maiorNum(n1, n2)