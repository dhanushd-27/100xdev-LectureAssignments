// Write a function called sum that finds the sum from 1 to a number

function sumOfN(n){
    let sum = 0;

    for(i = 1; i <= n; i++) sum += i;

    return sum;
}

const n = 5;
const sum = sumOfN(n);

console.log(`Sum of ${n} integers is: ${sum}`);