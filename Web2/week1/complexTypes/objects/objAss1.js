// Write a function that takes a user as an input and greets them with their name and age

function greet(user){
    console.log(`Hello ${user.name}, I guess your age is ${user.age}`);
}

const user = {
    name: "Orca",
    age: "x"
}

greet(user);