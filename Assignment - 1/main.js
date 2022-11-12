// person class with constructor
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}

// woman subclass
class Woman extends Person {
    constructor(name, country) {
        super(name);
        // add extra propert for woman class
        this.country = country;
    }
    greet() {
        // access parent(Person) greet() function
        super.greet();
        console.log("Where Are You From ?");
        console.log(`I am from ${this.country} !!`);
    }
}

// man subclass
class Man extends Person{
    constructor(name, country) {
        super(name);
        // add extra propert for man class
        this.country = country;
    }
    greet() {
        // access parent(Person) greet() function
        super.greet();
        console.log("Where Are You From ?");
        console.log(`I am from ${this.country} !!`);
    }
}

// create object from Person Class
const person = new Person(
    "Anonymous"
    ).greet();

// create object from Woman Class
const woman1 = new Woman(
    "Pritika Thapa",
    "India"
    ).greet();

// create object from Man Class
const man1 = new Man(
    "Pradip Thapa",
    "Nepal"
    ).greet();
