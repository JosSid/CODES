'use strict';

const EventEmitter = require('events');

//Nos creamos un emisor de eventos
const emisor = new EventEmitter();

emisor.on('Llamada de teléfono', function(quienLlama){   if(quienLlama === 'madre'){
    return
}
    console.log('Ring ring')
});

//Nos suscribimos solo al primer evento que ocurra
emisor.once('Llamada de teléfono', function(quienLlama) {
    console.log('Brrrr brrrrrr')
});

emisor.emit('Llamada de teléfono', 'madre');
emisor.emit('Llamada de teléfono', 'madre');
emisor.emit('Llamada de teléfono', 'madre');

