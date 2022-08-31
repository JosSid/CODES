let myArr = [ 2, 4, 6, 8]
//Con reduce
let myNewArray = myArr.reduce(function(a, b){ return a + b })
 // con bucle for   
let myArr2 = function(arr){
    let suma = 0
    for(let i = 0; i < arr.length; i++) {
        suma += arr[i]
    }
    return suma
}
let myArr3 = [ 2, 4, 6, 8, 10]

console.log(myNewArray)
console.log(myArr2(myArr3))