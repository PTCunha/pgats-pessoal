//expor - comando que deve rodar no console
/* npm init -y  ->
 é usado no terminal para inicializar rapidamente um projeto Node.js, criando automaticamente um arquivo package.json com valores padrão, que armazena as informações do projeto, como nome, versão, dependências, scripts, autor etc
 */
// npm init -yt 

function exibirNomePet(paramNomePet){
    console.log(`O nome do pet é ${paramNomePet}`)
}

exibirNomePet('Pipoca')
exibirNomePet('Muca')
exibirNomePet('Maju')

/*
    Sintaxe CommonJs:
        module.exports = {} / require('') 
    ESM - Ecmascript Standard Modules
        export {} / import
*/
export {
    exibirNomePet
}