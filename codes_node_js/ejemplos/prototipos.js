'use strict';

//definimos una funcióm constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;
}


//Construimos un objeto
const luis = new Persona('Luis');
const pepe = new Persona('Pepe')

//añadir propiedades al prototipo de las Personas
Persona.prototype.saluda = function () {
    console.log('Hola soy',this.nombre);
}

luis.saluda();
pepe.saluda();