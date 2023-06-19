const promise = new Promise((resolve, reject) => {
    reject('An error occured!');
});

promise.catch((err) => console.log(err));