export default class User{
    constructor(name,age){
this.name = name;
this.age = age;
    }
}

export function printName (user){
console.log(`this is my name ${user.name}`)
}

export function printAge(user){
    console.log(`this is my age ${user.age}`)
}

