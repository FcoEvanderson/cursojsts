function* generator1(){
    // (Cóodigo 1 aqui...)
    yield 'Valor 1'
    // (Cóodigo 2 aqui...)
    yield 'Valor 2'
    // (Cóodigo 3 aqui...)
    yield 'Valor 3'
}

//Infinity Generator
function* generator2(){
    let i = 0

    while(true){
        yield i
        i++
    }
}

function* generator3(){
    yield 0
    yield 1
    yield 2
}

function* generator4(){
    yield* generator3()
    yield 3
    yield 4
    yield 5
}

const g4 = generator4()

function* generator5(){
    yield function() {
        console.log('Vim do y1')
    }

    // ...

    yield function(){
        console.log('Vim do y2')
    }
}

const g5 = generator5()