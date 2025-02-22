import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const maiusculas = document.querySelector('.chk-maiusculas')
const minusculas = document.querySelector('.chk-minusculas')
const numeros = document.querySelector('.chk-numeros')
const simbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gerar()
    })
}

function gerar(){
    const senha = geraSenha(
        qtdCaracteres.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked,
    )
    return senha || 'Nada Selecionado.'
}