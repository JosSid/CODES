// DONE: ordenar este array con los pares primero y los impares luego, en caso de empate, orden ascendente
let arr = [3,4,6,7,2,1] // [2,4,6,1,3,7]
let arr1 = [45,14,76,90,87,32,15,24,23]
arr1.sort(function(a, b) { //Primero los coloco en orden ascendente
   return a - b
});

arr1.sort(function(a,b) { //Segundo coloco los pares a la izquierda y los impares a la derecha
    if ( b % 2 == 1) {
        return -1
    } 
});

arr1.sort(function(a,b) {  // Por ultimo ordeno los impares en orden ascendente
    if ( a % 2 == 1 && b % 2 == 1) {
        return -1
    } 
});  

console.log(arr1)