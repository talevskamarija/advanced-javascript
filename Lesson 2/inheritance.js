class Animal {
    legs;

    constructor(legs) {
        this.legs = legs;
    }

    walk() {
        console.log('Walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }

    fly() {
        console.log('The bird can fly');
    }
}

const parrot = new Bird(2);
parrot.walk();
parrot.fly();


