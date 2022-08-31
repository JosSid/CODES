let persona = {
    nombre: 'Josep',
    apellido: 'Valls'
}

function saludar(person){
    return `Hola ${person.nombre} ${person.apellido}, encantado.`
}

console.log(saludar(persona))

function contarPropiedades () {
    let contador = 0;

    for(key in persona){
        contador++
    }
    return contador
}

console.log(contarPropiedades())

let dict1 = {
    nombre: 'Josep'
}

let dict2 ={
    apellido: 'Valls'
}

function unirDiccionarios (diccionario1, diccionario2) {
    let diccionarioFinal = {}

    for (let key in diccionario1){
        diccionarioFinal[key] = diccionario1[key]
    }

    for(let key in diccionario2){
        diccionarioFinal[key] = diccionario2[key]
    }

    return diccionarioFinal
}

console.log(unirDiccionarios(dict1,dict2))

const play = (player1, player2) => {
    const rules = {piedra: 'tijera', papel: 'piedra', tijera: 'papel'}
    if(player1 === player2) {
        return 'Empate'
    } else if( rules[player1] === player2) {
        console.log(rules[player1])
        return 'Gana jugador 1'
    } else {
        return 'Gana jugador 2'
    }
} 

console.log(play('tijera','piedra'))

function range (start, end, step) {
    if ( step === undefined) step = 1
    let result = []
    if (step > 0){
        for( let i = start; i <= end; i+= step){
            result.push(i)
        }

    } else {
        for( let i = start; i >= end; i+= step){
            result.push(i)
    }
}
    return result
}

console.log(range(2,10,2))
console.log(range(22,10,-2))

