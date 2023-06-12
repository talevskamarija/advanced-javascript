// Remove the falsy values from an object
function compactObject (obj) {
    const newObject = {};

    Object.keys(obj).forEach(key => {
      if (obj[key]) {
        newObject[key] = obj[key];
      }
    });

    return newObject;
};

const test = {
    value: "",
    number: 0,
    exists: true
};

console.log(compactObject(test));

