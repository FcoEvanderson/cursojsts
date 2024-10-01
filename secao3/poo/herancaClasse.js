class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado.')
            return
        }

        console.log(this.nome + ' ligou.')
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado.')
            return
        }

        console.log(this.nome + ' desligou.')
        this.ligado = false
    }
}

// const d1 = new DispositivoEletronico('Celular')
// d1.ligar()
// d1.ligar()
// d1.desligar()
// d1.desligar()
// console.log(d1)


class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')
console.log(s1)


class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome)
        this.temWifi = temWifi
    }

    ligar(){
        console.log('Vc alterou o método ligar.')
    }
    falaOi(){
        console.log('Oi')
    }
}

const t1 = new Tablet('iPad', true)
t1.ligar()
t1.falaOi()