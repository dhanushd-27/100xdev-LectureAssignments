// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function getEven(elements){
    let evenEle = [];

    for(let i = 0; i < elements.length; i++){
        if(elements[i] % 2 == 0) evenEle.push(elements[i]);
    }

    console.log(evenEle);
}

const elements = [1, 2, 3, 4, 5, 6, 7, 8];
getEven(elements);