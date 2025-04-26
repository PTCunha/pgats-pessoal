console.log(`10 > 5 = ${ 10 > 5 }`)


/*
  >   - maior que
  >=  - maior ou igual que
  <   - menor que
  <=  - menor ou igual que
  ==  - igualdade somente de valores
  !=  - diferença somente de valores
  === - igualdade de valores e tipo de dado
*/

// console.log(`10 > 5 = ${ 10 > 5 }`) // verdadeiro = true
// console.log("10 > 5 = ${ 10 > 5 }") // verdadeiro = true

// maior que
console.log(10 > 5) // verdadeiro
console.log(10 > 20) // falso

// maior ou igual
console.log(10 >= 10) // verdadeiro
console.log(10 >= 9) // verdadeiro

// menor que 
console.log(10 < 5) // falso
console.log(10 < 20) // verdadeiro
// menor ou igual 

console.log(10 <= 10) // verdadeiro
console.log(10 <= 9) // falso

// igualdade somente de valores

console.log(1 == '1')
console.log(true == 1) // verdadeiro
console.log(false == 1) // falso
console.log(null == undefined) // verdadeiro
console.log('' == 0) // verdadeiro

// igualdade de valores e tipo de dado
console.log(1 === '1') // falso
console.log(true === 1) // falso
console.log(false === 1) // falso

// diferença de valores
console.log(1 != 2) // verdadeiro
console.log(1 !== 2) // verdadeiro


/**
  &&  - E / AND
  ||  - OU / OR
  !   - NÃO / NOT
*/

// && - E / AND
const nomeDog = "Pipoca"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10

console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres) // true

// || - OU / OR
const dog = {
  adotado: false,
  peso: 5.3
}

console.log(dog.adotado || dog.peso < 10) // verdadeiro

console.log(true || true) // verdadeiro
console.log(true || false) // verdadeiro
console.log(false || true) // verdadeiro
console.log(false || false) // falso

// !   - NÃO / NOT

console.log(true) // verdadeiro
console.log(!true)

/**
  + adição
  - subtração
  * multiplicação
  / divisão
  % resto
  ** exponencial
 */

  console.log(1 + 1) // 2
  console.log(10 - 7) // 3
  console.log(2 * 2) // 4
  
  console.log(11 / 2)
  console.log(11 % 2)
  
  console.log(4 ** 4)
  
  console.log(2 + 3 * 4) //  precedencia - multiplicao, adicao
  console.log((2 + 3) * 4) //  precedência - dentro do parenteses, depois o que está fora
  
  // 3 * 4 == 12
  // 12 + 2 == 14

  console.log(11 / 2) // 5.5
console.log(parseInt(11 / 2)) // 5.5 -> 5

// arredondamento

// arredonda para baixo
console.log(Math.floor(5.8))

// arredonda para cima
console.log(Math.ceil(5.8))

// arredonda para o mais próximo
console.log(Math.round(5.8))
console.log(Math.round(5.4))
console.log(Math.round(5.5))

// 
const valorDecimal = 2.123123
console.log(valorDecimal.toFixed(3))
————
/**
 
  -- decremento
  ++ incremento

  ?  ternário
  
 */

// incremento
let pesoDoDog = 10
console.log(pesoDoDog)

pesoDoDog++
console.log(pesoDoDog)

// decremento
let pesoDoTutor = 100
console.log(pesoDoTutor)

pesoDoTutor--
console.log(pesoDoTutor)

// ternário
// const porte = pesoDoDog <= 10 ? 'pequeno' : 'médio' 

const pesoDoDogOperadorTernario = 21
const porte = pesoDoDogOperadorTernario <= 10 // se if
              ? 'pequeno'
              : pesoDoDogOperadorTernario <= 20 // senao se / else if
              ? 'médio'
              : 'grande' // senao

              // pesoDoDogOperadorTernario <= 10 ? 'pequeno' : pesoDoDogOperadorTernario <= 20 ? 'médio' : 'grande'

              // console.log(porte)

{/* <condicao> ? <acao se verdadeiro> : <acao se falso> */}