// function createMessage(name){
//     const h1 = document.querySelector('h1')
//     h1.innerText = `Welcome, ${name}!`
// }

// const nome = window.prompt('Digite seu nome:')
// createMessage(nome)

const n1 = Number(prompt('Digite um número: '))
const n2 = Number(prompt('Digite outro: '))
incrementTwoNumbers(n1, n2)

function incrementTwoNumbers (num1, num2) {
    const h1 = document.querySelector('h1')
    alert(`A soma de ${num1} e ${num2} é ${num1 + num2}`)
}