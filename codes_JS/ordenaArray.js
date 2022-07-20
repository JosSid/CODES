// TODO ordenar este array con los pares primero y los impares luego, en caso de empate, orden ascendente
let arr = [3,4,6,7,2,1] // [2,4,6,1,3,7]

arr.sort(function(a, b) {
   return a - b
});

arr.sort(function(a,b) {
    if ( b % 2 == 1) {
        return -1
    } 
});

arr.sort(function(a,b) {
    if ( a % 2 == 1 && b % 2 == 1) {
        return -1
    } 
});  

console.log(arr)