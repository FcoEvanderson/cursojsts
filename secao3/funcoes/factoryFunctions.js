// Factory Function (Função Fábrica)
//Constructor Function (Função construtora)
function createPerson(name, surname, h, w){
    return {
        name, 
        surname,

        //Getter
        get fullName(){
            return `${this.name} ${this.surname}`
        },

        //Setter
        set fullName(valor){
            valor = valor.split(' ')
            this.name = valor.shift()
            this.surname = valor.join(' ')
        },

        talk: function(subject) {
            return `${name} ${surname} is talking about ${subject}`
        },
        height: h,
        weight: w,
        imc(){
            const indice = this.weight / (this.height ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = createPerson('Francisco', 'Evanderson', 1.67, 78)
const p2 = createPerson('Dona', 'Meiry', 1.47, 60)
const p3 = createPerson('Seu', 'Serejo', 1.61, 67)

console.log(p3.imc)