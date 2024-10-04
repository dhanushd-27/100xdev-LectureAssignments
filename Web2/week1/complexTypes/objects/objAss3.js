// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

function something(users){
    const res = users.filter(user => user.gender.toLowerCase() === "male" && user.age > 18);

    console.log(res);
}

const users = [
    {
        name: "Orca",
        age: 3,
        gender: "Male"
    },
    {
        name: "Robin",
        age: 35,
        gender: "Female"
    },
    {
        name: "Kirat",
        age: 20,
        gender: "Male"
    },
    {
        name: "O",
        age: 300,
        gender: "Male"
    }
]

something(users)