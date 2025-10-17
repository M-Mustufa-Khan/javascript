// Promises practice

let complete = true

let prom = new Promise(function(resolve, reject){
    if (complete) {
        resolve("Here is an Resolvetion")
    }else{
        reject("Here is an Rejection")
    }
})

let onFullfilment = (result) => {
    console.log(result);
}
let onRejection = (error) => {
    console.log(error);
}

prom.then(onFullfilment)
prom.catch(onRejection)
