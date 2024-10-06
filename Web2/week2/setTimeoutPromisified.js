function setTimeoutPromisified(duration){
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

const callback = () => {
    console.log("5 Seconds have passed! ");
}

setTimeoutPromisified(5000)
.then(callback);