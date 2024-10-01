//Declaração de Funções

//Function hoisting
function falaOi() {
    console.log('Iae')
}
falaOi()

//First-class objects
//Function expression
const souUmDado = function(){
    console.log('Sou um dado.')
}
souUmDado()

function executarFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao()
}
executarFuncao(souUmDado)

// Arrow Function
const arrowFunction = () => {
    console.log('Arrow Function')
}
arrowFunction()

const arrowFunction2 = () => console.log('Arrow Function')
arrowFunction2()

// Dentro de um objeto
const objeto = {
    falar: function (){
        console.log('Estou falando...')
    }
}

const objeto2 = {
    falar2(){
        console.log('Estou falando...')
    }
}