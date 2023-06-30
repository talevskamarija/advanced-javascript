// void function example
function sayHello(): void { 
    console.log('Hello!')
} 

sayHello();

// unknown variable
let unknownNum: unknown;
unknownNum = 10; 
console.log(unknownNum)
 
// enums examples
enum directions {
    North = 'north',
    East = 'east',
    South = 'south',
    West = 'west'
}
console.log(directions);

// union types
let test: number|string;
 
test = 1;
test = "Hello";
console.log(test);

// tuple
let arrTuple: [number, string] = [1, "HI"];
console.log(arrTuple);

// functions
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}

function numbersMultiplication(width: number, height: number): void {
    console.log(width*height);
}

function sum(num1: number, num2: number, num3?: number) {
    return num1 + num2 + (num3 || 0);
}


console.log(pow(2));

// types
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carY: CarYear = 2023;
const carT: CarType = "Kia";
const carM: CarModel = "Sportage";

const newCar: Car = {
  year: carY,
  type: carT,
  model: carM
};

console.log(newCar);

// interface
interface Person {
    name: string,
    age: number
}

const p1 : Person = {
    name: "Nikola",
    age: 22
}
console.log(p1);

// generics

const arr = [1, 2, 3]
const array: Array<number> = [1, 2, 3] 


function printsNumber(value: number): number {
    console.log(value)
    return value;
}
   
  function printsString(value: string): string {
    console.log(value)
    return value;
}

function print<T>(arg: T): T {
  console.log(arg)
  return arg;
}

print<number>(10);
print<string>("Hello");
 
