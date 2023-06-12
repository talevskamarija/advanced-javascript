// Define the products
const water = {
    name: 'Jana',
    price: 30
};

const bread = {
    name: 'Silbo',
    price: 50
};

// Define the shopping basket
const basket = [];

// Fill the shopping basket with products
basket.push(water);
basket.push(bread);
console.log(basket);

// Calculate the total ammount that should be paid
const total = basket.map(product => product.price).reduce((a, b) => a + b);
console.log('The total price is:', total);