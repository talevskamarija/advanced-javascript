// Define the Product class
class Product {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
};

const water = new Product('Jana', 30);
const bread = new Product('Silbo', 50);

console.log(water);
console.log(bread);

// Define the Backet class
class Basket {
    products;

    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
    }
}

// Extended with inheritance
class Book extends Product { 
    constructor(name, price, author) { 
        super(name, price);    
        this.author = author; 
    }
}
const book = new Book('Maliot princ', 300, 'Antoan De Sent');

const basket = new Basket([]);
basket.addProduct(water);
basket.addProduct(bread);
basket.addProduct(book);
console.log(basket);


