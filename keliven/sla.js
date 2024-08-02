let primeiroNome = 'Vitória'
let ultimoNome = 'Marini'
let nomeCompleto = primeiroNome + ' ' + ultimoNome

let numero1 = 10
let numero2 = 20

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1/ numero2
console.log (soma, subtracao, multiplicacao, divisao )

let estaChovendo = true
if(estaChovendo) {
    console.log('Está chovendo')
}else{
    console.log('Não está chovendo')
}

let resposta = null
let nota 
console.log(resposta, nota)

let idUnico = Symbol()

 let produto ={
    [idUnico]: 123, 
    nome: 'camiseta'
 }
 console.log (produto[idUnico], produto.nome)

 let numeroGrande = BigInt ('123456789123456789123456789123456789123456789')
 let numero = 123456789123456789123456789123456789123456789
 let numero3 = numeroGrande 
 console.log (numeroGrande, numero, '/n', numero3)