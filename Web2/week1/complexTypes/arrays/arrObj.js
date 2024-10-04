// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function theyCanVote(users){
    const userName = [];

    for(i = 0; i < users.length; i++){
        if(users[i].age > 18){
            userName.push(users[i].name);
        }
    }

    console.log(userName);
}

const users = [{
        name: "Harkirat",
        age: 21
    },
    {
        name: "Raman",
		age: 22
    },
    {
        name: "Orca",
		age: 17
    }
]

console.log("Below list of people can vote: ");
theyCanVote(users);