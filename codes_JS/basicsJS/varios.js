//Objeto Literal "Unico en su especie"

const obj = {
    a: 1,
    suma: function( x , y) {
        return x + y
    }

}

console.log(obj.suma(3,4))

//Tema Hoisting
//Cuando una funcion es declarada de la forma canonica puede ser invocada antes de su declaracion
nombreDelGato('Maurizzio')

function nombreDelGato(nombre) {
    console.log(`El nombre del gato es ${nombre}`)
}

//Si no esta declarada de la forma canonica no se puede invocar antes de definir la funcion