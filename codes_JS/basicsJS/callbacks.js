const legolas = {
    name: 'Legolas',
    attackSpeed: 20,
    attackDamage: 10
}

const gimly = {
    name: 'Gimly',
    attackSpeed: 7,
    attackDamage: 15
}

function atacar(personaje, attackFunc) {
    let attack = attackFunc(personaje)
    console.log(`${personaje.name} ataca con ataque ${attack.weapon} causing ${attack.damage} with speed ${attack.speed}`)
}

function attackWithSword(person) {
    return {
        weapon: 'sword',
        speed: person.attackSpeed + 16,
        damage: person.attackDamage + 23
    }
}

function attackWithBowAndArrow(person) {
    return {
        weapon: 'bow&arrow',
        speed: person.attackSpeed + 24,
        damage: person.attackDamage + 13
    }

}

function attackWithAxe(person) {
    return {
        weapon: 'axe',
        speed: person.attackSpeed + 17,
        damage: person.attackDamage + 28
    }

}

atacar(legolas, attackWithSword)
atacar(legolas, attackWithBowAndArrow)
atacar(gimly, attackWithSword)
atacar(gimly, attackWithAxe)