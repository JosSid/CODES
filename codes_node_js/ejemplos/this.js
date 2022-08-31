'use strict'

//Crear una función para usarla como constructor de objetos
function Fruta(nombre) {
    this.nombre = nombre;

    this.saluda = function() {console.log(`Hola soy ${this.nombre}.`)}
};

//crear un objeto con la función constructora de objetos
const limon = new Fruta('limon');
const naranja = new Fruta('naranja');
const pera = new Fruta('pera')

//console.log(limon);

//Donde esten los parentesis de ejecucion
//mirar lo anterior al punto de la izquierda
limon.saluda(); //this --> limon

//bind hace que this haga referencia a limon creando otra funcion
//si no limon sera undefined
setTimeout(limon.saluda.bind(limon), 2000)

const funcion = limon.saluda.bind(naranja)
funcion()

setTimeout(funcion, 2000)
//call llama a la funcion pero no crea una funcion como hace bind
const saludaNaranja = limon.saluda
saludaNaranja.call(pera)