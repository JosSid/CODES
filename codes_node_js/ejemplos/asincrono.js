'use strict';

console.log('Empiezo')

function escribeTras2Segundos(texto, callback){
    setTimeout(function(){
        console.log(texto)
        callback()
    }, 2000)
};
//Llamar a la funcion fn, n veces
function serie(n, fn, callbackTerminacion){
    if(n === 0){
        callbackTerminacion();
        return
    }
    n--
    fn(`Texto ${n}`, function(){
        serie(n, fn, callbackTerminacion);
    });
};

function serie2(arr, fn, callbackTerminacion){
    if(arr.length === 0){
        callbackTerminacion();
        return
    }
    fn(`Texto ${arr.shift()}`, function(){
        serie2(arr, fn, callbackTerminacion);
    });
}



/* serie(6, escribeTras2Segundos, function(){
    console.log('Termino')
}); */

serie2([1,2,3,4,5,6], escribeTras2Segundos, function(){
    console.log('Termino')
})