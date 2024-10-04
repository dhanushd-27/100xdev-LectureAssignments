// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user){
    if(user.gender.toLowerCase() == "male"){
        console.log(`Hello Mr. ${user.name}, I guess your age is ${user.age}`);
    }
    else{
        console.log(`Hello Ms. ${user.name}, I guess your age is ${user.age}`);
    }
}

function canVote(user){
    if(user.age > 18){
        if(user.gender.toLowerCase() == "male"){
            console.log(`Hello Mr. ${user.name}, I guess your age is ${user.age}, You can vote`);
        }
        else{
            console.log(`Hello Ms. ${user.name}, I guess your age is ${user.age}, You can vote`);
        }
    }
    else{
        if(user.gender.toLowerCase() == "male"){
            console.log(`Hello Mr. ${user.name}, I guess your age is ${user.age}, You cannot vote`);
        }
        else{
            console.log(`Hello Ms. ${user.name}, I guess your age is ${user.age}, You cannot vote`);
        }
    }
}

const user = {
    name: "Orca",
    age: 300,
    gender: "Male"
}

greet(user);
canVote(user);