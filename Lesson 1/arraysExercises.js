// Add at beggining
// Array [10, 20, 30]
// Elements 1, 2, 3
const array = [10, 20, 30];
array.unshift(1, 2, 3);
console.log(array);

// Delete the first element
array.splice(0, 1);
console.log(array);

// Replace the first element with two new elements 4, 5
array.splice(0, 1 , 4, 5);
console.log(array);

// Sort array, descending 
array.sort((a, b) => b-a); 
console.log(array);

// Reverse array
array.reverse();
console.log(array);

// Print each item and item index 
array.map((item, index) => console.log(item, index));

// Add 5 to each item and print the item
for (let item of array) {
    item += 5;
    console.log(item);
}

// Filter the items bigger then 5
console.log(array.filter(item => item > 5));