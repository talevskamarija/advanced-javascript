const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(3), 3000)
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(1), 1000)
);
const promise3 = Promise.reject("Error");

Promise.any([promise1, promise2, promise3]).then(console.log);
