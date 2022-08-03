//Muestro por pantalla del 0 al 9
let i = 0
do {
    /* console.log(i) */
    i++
} while(i < 10)

//Ahora con While primero evalua

let j = 0
while(j < 10) {
    /* console.log(j) */
    j++
}

//Bucle FOR

let languages = ['Spanish', 'Catalan', 'English', 'Italian', 'Deutsch,', 'JS', 'Python']

/* for ( i = 0; i < languages.length; i++) {
    console.log(languages[i])
}*/

for ( let i in languages) {
    console.log(languages[i])
    if ( i  > 3) {
        break // si quiero parar el bucle
    }
} 

for ( let language in languages) {
    console.log(languages[language])
}