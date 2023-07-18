const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(3), 3000)
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(1), 1000)
);

Promise.race([promise1, promise2]).then(console.log);
