//Ordenar un array de strings segun el ultimo caracter

function ordArrWithLastCar(array) {
    if(!Array.isArray(array)) {
        throw TypeError('La función solo admite Arrays como parametro de entrada')
    }

    if(!array.every(e => typeof e === 'string')) {
        throw TypeError('Todos los elementos del Array deben ser Strings')
    }

    return array.sort((x, y) => x.charCodeAt(x.length -1) - y.charCodeAt(y.length -1))
}

let languages = ['Python', 'JavaScript', 'C#', 'Go', 'PHP', 'Java']

try {
    let result = ordArrWithLastCar(languages)
    console.log(result)
} catch (e) {
    console.log(`Error: ${e.message}`)
}