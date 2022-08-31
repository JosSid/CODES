//Crear calculadora

class Calculator {
    constructor(name){
        this.name = name
    }
    suma(x, y) {
        return x + y
    }
    resta(x, y) {
        return x - y
    }
    multiplicacion(x, y) {
        return x * y
    }
    division(x, y) {
        return x / y
    }

    mcd(x, y) {
        while( x != y) {
            if(x > y) {
                x -= y
            } else {
                y -= x
            }
        }
        return x
    }
}


const calculin = new Calculator('Calculín')

console.log(calculin.mcd(150, 3))

const nums = [2, 5, 8, 11, 14, 17, 20]

const nums1 = nums.map(e => e)

const nums2 = nums1.map(e => e * 2 - 1)

const nums3 = nums1.filter(e => e % 2 === 0)

const nums4 = nums1.reduce(e => e.toString() )

nums.pop()






console.log(nums)
console.log(nums1)
console.log(nums2)
console.log(nums3)
console.log(nums4)