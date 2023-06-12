class Person {
    name; 
    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    get age () {
        return this.#age;
    }
}

const person1 = new Person('Marija', 11);
const person2 = new Person('Marina', 13);
console.log(person1.name);
//console.log(person1.#age); // Cannot access private properties
console.log(person1.age);

class Child extends Person {
    grade; 

    constructor(name) {
        super(name);
        this.grade = grade;
    }
}
