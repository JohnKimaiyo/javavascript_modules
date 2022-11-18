export default class User {
    costructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName(user) {
    console.log(`user name is ${user.age}`)
}

export function printAge(user) {
    console.log(`user is ${user.age} year old`)
}