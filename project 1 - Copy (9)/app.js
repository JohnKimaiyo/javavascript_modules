export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName(user) {
    console.log(`user name is ${user.age}`);
}

export function printAge(user) {
    console.log(`User name os ${user.age} years old`)
}