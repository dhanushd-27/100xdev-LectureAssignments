function fetchPromisified(){
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fetch("https://randomuser.me/api")
            resolve(data.json());
        } catch (error) {
            reject(error);
        }
    });
}

function callback(data){
    console.log("Data fetched successfully");
    console.log(data);
}

fetchPromisified()
.then((data) => {
    callback(data)
})
