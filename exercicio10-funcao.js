import { dog } from "./exercicio10-dados.js"

function lista(dogs) {
    dogs.forEach(dog => {
        console.log('Entregando petiscos para ' + dog)
    }
    )
}


lista(dog);