'use strict';

//funcion que devuelve un objeto
function creaVehiculo(nombre) {
    const numCilindros = 4;
    return {
        getNombre: function() {return nombre},
        setNombre: function(valor) {nombre = valor},
        saluda: function(){console.log('Hola,soy un',nombre,'y tengo',numCilindros.toString(), 'cilindros')}
    }
}

const coche = creaVehiculo('Opel Astra');

coche.saluda()