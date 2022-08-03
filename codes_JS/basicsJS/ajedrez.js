//TODO:Crear tablero de ajedrez
/* console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B') */

const filaPar = 'B N B N B N B N'
const filaImpar = 'N B N B N B N B'

const totalFilas = 8
for (let i = 0 ; i < totalFilas; i++) {
    if( i % 2 === 0) {
        console.log(filaPar)
    } else {
        console.log(filaImpar)
    }
}

console.log('=====================================')
console.log('=====================================')
console.log('=====================================')

for ( let i = 0 ; i < totalFilas; i ++) {//Para cada columna
    let fila = []
    for ( let j = 0; j < totalFilas; j++) {//Para cada fila
        if((i + j) % 2 === 0) {//Mezclamos los indices para garantizar la alternancia
            fila.push('B')
        } else {
            fila.push('N')
        }
    }
    console.log(fila.join(' '))// Join para convertir los elementos de un array a un string con pegamento(split pra alo contrario)
    
}