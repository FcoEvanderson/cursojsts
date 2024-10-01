const nome = 'Luiz Otávio'
const idade = 30
const peso = 84
const altura = 1.80

function getImc (peso, altura) {
    let imc = peso / (altura ** 2)
    return imc
}

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura}`,
            `de altura e seu IMC é de ${getImc(peso, altura)}`)