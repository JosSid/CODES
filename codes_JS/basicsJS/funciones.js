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

