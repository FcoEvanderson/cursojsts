import GeraCPF from './modules/geraCPF'
import './assets/style.css'

document.addEventListener('DOMContentLoaded', function(){
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCPF()
})
