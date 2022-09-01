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

function Agente(nombre) {
    //heredar el constructor de las personas
    //llamar al constructor de personas con mi this
    Persona.call(this, nombre)
}

// heredamos propiedades de las personas
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const brown = new Agente('Brown')

brown.saluda();