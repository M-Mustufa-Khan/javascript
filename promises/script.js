// Promises practice

let complete = true

let prom = new Promise(function(resolve, reject){
    console.log("Fetching Data, Please Wait...");
    setTimeout(() => {
        if (complete) {
        resolve("Here is an Resolvetion")
    }else{
        reject("Here is an Rejection")
    }
    }, 3000)
})

// let onFullfilment = (result) => {
//     console.log(result);
// }
// let onRejection = (error) => {
//     console.log(error);
// }

prom.then((result) => {
    console.log(result);
})
prom.catch((error) =>{
    console.log(error);
})
