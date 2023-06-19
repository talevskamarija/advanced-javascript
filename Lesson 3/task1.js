function addAsync(x, y) {
    return new Promise((resolve, reject) => {
        if(x === undefined || y === undefined) reject('Parameters must be a number!');
        resolve(x+y);
    })
}
  
addAsync(undefined,6)
    .then((value) => console.log(value))    
    .catch((error) => console.log(error));