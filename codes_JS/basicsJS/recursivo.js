//Crear una tienda virtual
//Los productos tendran un ID cuyo primer valor sera la cantidad
//Habra descuentos por comprar cantidades
//Terndra un carrito de la compra

function reverseString(str) {
  // base case: when there's no string to reverse
  if (str === '') {
      return ''
  } else {
  // recursive case: 
  // (1) grab the last character of current string, 
  // (2) call the same function 
  // (3) pass in a substring that does NOT include the last character
  // (4) return (1) + (2)
      return str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
  }
}
console.log(otraString('ho'.substring(0,2)))
console.log(reverseString('hola como estas'))


function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  }else if(endNum - startNum < 0) {
    var numbers = rangeOfNumbers(startNum -1, endNum)
    numbers.unshift(startNum)
    return numbers
  }
   else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(-4,-1))

//Escribe un programa que invierta una cadena usando recursión. Dada la cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf".
//Escribe un programa que devuelva el número de veces que aparece una letra en una cadena. Tu programa debería recibir una cadena y la letra.
//let programa = (cadena, letra) => {...}
//Después, debe devolver el número de veces que la letra aparece en la cadena. Dado el texto "JavaScript" y la letra  "a", su programa debe devolver 2.‌‌‌‌
//Pista: Intenta averiguar cuándo quieres que la función deje de llamarse a sí misma y cómo devolver una versión más pequeña del problema cada vez que la función se llama a sí misma. 

function giraString(string) {
  const newString = []
  let i = string.length - 1
  do {
    newString.push(string[i])
    i--
  }
  while (i >= 0){
      
  }
  return newString
}

/* console.log(giraString('Que pasa tio').join(' ')) */

function otraString(string) {
  if (string.length <= 1){
    return[string]
  } else{
    let newString = string[string.length - 1] + otraString(string.substring(0, string.length -1))

    return newString
  }
}

console.log(otraString('hola pepe'))

let str = ''; 
let num = 0; 
let result = str || (num = 2); 
console.log(result); // ¿Qué imprime? 

const a = (n) => {
  if(n <= 0){
    
   
  }else{
     a(n -1)
  }
  console.log(n)
}

a(6)

/* function foo(i) {
  if (i < 0)
    return;
  console.log('inicio: ' + i);
   foo(i - 1); 
  console.log('fin: ' + i);
}
foo(6); */