export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printAge(user) {
    console.log(`user is ${user.age} years old`)
}

export function printName(user) {
    console.log(`user name is ${user.name}`)
}