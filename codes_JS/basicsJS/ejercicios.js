const mascotas = [
    {name: 'Pepe', age: 12, animal: 'perro'},
    {name: 'Juan', age: 15, animal: 'gato'},
    {name: 'Luis', age: 9, animal: 'raton'}
]



let pepe = mascotas.filter(e => e.age < 10)
console.log(pepe)

let mascotas1 = mascotas.map(e => Object.assign({}, e))

mascotas.forEach(element => {
    element.animal !== 'gato' ? element.animal = 'tigre' : element.animal = element.animal
    console.log(element.animal)
});
console.log(mascotas1[0].age)
console.log(mascotas)

const perros = ['juan','alberto', 'ana', 'andres', 'zoilo']
console.log(perros)
const perros2 = [...perros]
const perros1 = perros.sort()

console.log(perros1)
console.log(perros)
console.log(perros2)

const perros5 = mascotas.map(e => e.age *= 2 )
perros5.sort()
console.log(perros5)

let parImpar = (numero) => {
    if (numero === 0) {
        return 'Par';
    } else if (numero === 1) {
        return 'Impar';
    } else {
        return parImpar(numero - 2);
    }
};
console.log(parImpar(20900))

function sum(a,b){
    return a + b
}

let per = sum(7,3)

console.log(per)

function min(a,b) {
    if (a > b){
        return b
    }
    else{
        return a
    }
}

console.log(min(3,5))