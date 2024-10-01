// import * as MyModel from "./modulo1";
import Pessoa, { nome, sobrenome, idade, soma } from "./modulo1"

const p1 = new Pessoa(nome, sobrenome)
console.log(p1)

console.log(nome, sobrenome, idade)
console.log(soma(5, 4))
// console.log(multiplica(5, 10))