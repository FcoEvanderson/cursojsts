const num = Number(prompt('Digite um número:'))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = num
texto.innerHTML += `Raiz Quadrada: <strong>${Math.sqrt(num)}</strong><br/>` // ${num ** 0.5}
texto.innerHTML += `${num} é inteiro: <strong>${Number.isInteger(num)}</strong><br/>`
texto.innerHTML += `É NaN: <strong>${Number.isNaN(num)}</strong><br/>`
texto.innerHTML += `Arredondado para baixo: <strong>${Math.floor(num)}</strong><br/>`
texto.innerHTML += `Arredondado para cima: <strong>${Math.ceil(num)}</strong><br/>` 
texto.innerHTML += `Com duas casas decimais: <strong>${num.toFixed(2)}</strong><br/>`
