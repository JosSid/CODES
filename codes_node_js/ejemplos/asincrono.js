'use strict';

console.log('Empiezo')

function escribeTras2Segundos(texto, callback){
    setTimeout(function(){
        console.log(texto)
        callback()
    }, 2000)
};

escribeTras2Segundos('Texto 1', function(){
    escribeTras2Segundos('Texto 2', function(){
        console.log('Termino')
    })
});

