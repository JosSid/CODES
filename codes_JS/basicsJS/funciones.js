//Forma Canonica
function hello(name, surname = 'Skywalker') {
    return `Hello ${name} ${surname}`;
}

console.log(hello('Josep','Valls'))
//Asignandola a una constante
const hello2 = function(name, surname = 'Skywalker') {
    return `Hello ${name} ${surname}`;
}

console.log(hello2('Josep','Valls'))
//Con Arrow Function
const hello3 = (name, surname = 'Skywalker') => {
    return `Hello ${name} ${surname}`;
}

console.log(hello3('Josep','Valls'))
//Con Arrow Function con el RETURN incorporado
const hello4 = (name, surname = 'Skywalker') => `Hello ${name} ${surname}`;

console.log(hello4('Josep','Valls'))

const hello5 = name => `Hello ${name}`

console.log(hello5('Josep'))

//Otros Ejemplos
/**
 * @description Devuelve un String en formato `${nombre} es ${empleo}`
 * @param {String} nombre 
 * @param {String} empleo 
 * @returns {String}
 */
function foo(nombre, empleo) {
    return `${nombre} es ${empleo}`
}

let resultado1 = foo('Josep', 'Programador')
resultado1 = foo('Pepe', 'Chapuzas')

console.log(resultado1)

const foo2 = function (nombre, empleo) {
    return `${nombre} es ${empleo}`
}

console.log(foo2('Antonio', 'Panadero'))

const foo3 = (nombre, empleo) => {
    return `${nombre} es ${empleo}`
}

console.log(foo3('Manolo', 'Fontanero'))

const foo4 = (nombre, empleo) => `${nombre} es ${empleo}`

console.log(foo4('Ari', 'Profesora'))