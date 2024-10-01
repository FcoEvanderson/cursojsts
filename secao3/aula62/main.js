// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divísivel por 3 = Fizz
// Número é divísivel por 5 = Buzz
// Número é divísivel por 3 e 5 = FizzBuzz
// Número NÃO divísivel por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

const fizzBuzz = (num) => 
    typeof num !== 'number' ? num : 
    num % 3 == 0 && num % 5 == 0 ? 'FizzBuzz' 
    : num % 3 == 0 ? 'Fizz' : num % 5 == 0 ? 'Buzz' : num

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}