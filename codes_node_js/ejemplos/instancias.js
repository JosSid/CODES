'use strict'

//Crear una función para usarla como constructor de objetos
function Fruta(nombre) {
    this.nombre = nombre;

    this.saluda = function() {console.log(`Hola soy ${this.nombre}.`)}
};

//crear un objeto con la función constructora de objetos
const limon = new Fruta('limon');

console.log(limon);

limon.saluda();