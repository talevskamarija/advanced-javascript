const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(3), 3000)
);
const promise2 = Promise.resolve("HI");

Promise.all([promise1, promise2]).then((values) => console.log(values));

const promise3 = Promise.reject("Error");

Promise.all([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.log);
