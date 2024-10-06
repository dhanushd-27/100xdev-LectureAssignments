const fs = require("fs");

function readFilePromisified(){
    return new Promise((resolve, reject) => {
        fs.readFile('./a.txt', 'utf-8', (err, data) => {
            resolve(data);
        })
    });
}

readFilePromisified()
.then((data) => {
    console.log("File has been read \n");
    console.log(data);
})