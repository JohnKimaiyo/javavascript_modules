export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName(user) {
    console.log(`Users name is ${user.age}`)
}

export function printAge(user) {
    console.log(`User is ${user.age} years old`)
}