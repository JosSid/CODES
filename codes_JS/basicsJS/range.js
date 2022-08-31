//Nos devuelve un array con los numeros dentro del rango establecido y segun el valor step
/**
 * 
 * @param {number} start 
 * @param {number} end 
 * @param {number} step 
 * @returns Array
 */
function range (start, end, step = 1) {
/*     if ( step === undefined) step = 1 */
    let result = []
    if (step > 0){
        for( let i = start; i <= end; i+= step){
            result.push(i)
        }

    } else {
        for( let i = start; i >= end; i+= step){
            result.push(i)
    }
}
    return result
}

console.log(range(2,10,2))
console.log(range(22,10,-2))
console.log(range(2,10))