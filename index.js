/*console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'TesteNome',
    turma: 'pgads'
},
{
    nome: 'TesteNome 2',
    turma: 'pgads'
}])*/


// informacoes de um dog que nao mudam
/*const nome = 'Muca'
const raca = 'York'
const sexo = 'Fêmea'
const cor = 'Marrom'
const dataDeNascimento = '08/11/2019'
const porte = 'Minimo'

// informacoes que mudam
let idade = 5
let peso  = 5.8
let vacinado = true
let castrado = false
let tamanho = 'M'*/
const cabeca = ['teste', 'teste2'];
const eita = ['Eita', 'Eita2'];


const irmao = [
    {
    nome: 'Thor',
    idade: 5
    },{
    nome: 'Hela',
    idade: 3
    }
]

console.table(irmao)
console.table(cabeca)
console.table(eita)

const turma = '02'
// Concatenação de strings
console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril")
// Interpolação de strings
console.log(`Aula 03 da Turma ${turma} no Sábado dia 05 de Abril`) //Tem que ser CRASE, não pode ser Aspas Simples

