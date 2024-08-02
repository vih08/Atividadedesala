/*Declare uma variável frase e atribua a ela o valor "JavaScript é incrível!"
Use um método de string para encontrar o comprimento de frase e exiba no console
Extraia a palavra "incrível" de frase e exiba no console
substitua a palavra "incrível" por "fantástico" em frase e exiba o resultado no console.*/

let frase= 'JavaScript é incrível'
let comprimento = frase.length
console.log(comprimento)

let palavra = frase.slice(13, 21)
console.log(palavra)

let substituir = frase.replace('incrível', 'fantástico')
console.log(substituir)
