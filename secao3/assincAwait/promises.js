function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject()
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('(1) Conectando ao BD', rand(1, 3))             // then -> resolve
    .then(resposta =>{                                   // catch -> reject
        console.log(resposta)
        return esperaAi('(2) Buscando dados no BD', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(2222, rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    }).then(() =>{
        console.log('(4) Exibindo os dados tratados na tela.')
    })
    .catch(e => {
        console.log('ERROR 404:', e)
    })

console.log('Esta msg será exibida antes de qualquer promise.')
