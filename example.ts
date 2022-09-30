// TYPE ANNOTATIONS


// // for vars
// let strExample: string = "Waddup";
// let yes: boolean = true;

// // for functions
// function add(a: number, b: number) {
//     return a + b;
// }

// INFERED TYPES

// for vars & ds
let strExample = "Waddup";
let yes = true;
let number = 69;

let numbers = [23, 456, 2134, 5646, 435];
let strings = ["bow", "you", "caught", "me", "of", "guard"];

// this will raise a Runtime error not affecting the compiled code
// in 'tsconfig.ts' file you can change this behaviour
// number = "string"; 


// the return type can be inferred
function add(a: number, b: number) {
    return a + b;
}

let result = add(3, 5); // type number

// Union Types (type OR another type)

let somethingNew: number | string = 45;
somethingNew = "newer";

const something = ["42", 42, true];

// OBJECTS AND INTERFACES

// describing a Person
interface Person {
    name: string;
    age: number;
    address: string;
    currentTime(): Date; // can be optional as well
};

function greetPerson(person: Person) {
    return `Moin ${person.name}, du bist ${person.age} Jahre alt. Es ist ${person.currentTime()}`
}

const person = {
    name: "fotze",
    age: 69,
    address: "something",
    currentTime() {
        return new Date;
    },
}

// greeting instance of a Person
console.log(greetPerson(person));


// OPTIONAL PROPERTIES

interface Dog {
    name: string;
    age: number;
    // optional property (undefined if not specified)
    owner?: Person;
}

function greetDog(dog: Dog) {
    const dogOwner = dog.owner?.name;
    return `Hello ${dog.name}, ${dogOwner} is searching for you!`
}

const dog = {
    name: "dog",
    age: 7,
    owner: person,
}
console.log(greetDog(dog));


// CLASSES (since ES2015)


// class Food {
//     // manual defining class vars
//     name: string;
//     tasty: boolean;
//     price: number;

//     // constructor
//     constructor(name: string, tasty: boolean, price: number) {
//         this.name = name;
//         this.tasty = tasty;
//         this.price = price;
//     }
// }

class Food {
    // constructor (public var = instance var)
    constructor(
        public name: string, // other access modifiers are 'protected', 'private'
        public tasty: boolean,
        public price: number) { }
}

// new food instance
const isTasty: boolean = true;
const food = new Food("sushi", isTasty, 23);

console.log(food);


// GENERICS

// sorting types
function sortItems<T>(items: T[], greater: (a: T, b: T) => number) {
    return items.sort(greater)
}

// sorting numbers
const sortedNumbers = sortItems<number>(numbers, (a, b) => a - b);

console.log(sortedNumbers);


// TYPE ASSERTIONS (compile time check)



// ANY, UNKNOWN, NEVER




// @ts-ignore / @ts-nocheck
