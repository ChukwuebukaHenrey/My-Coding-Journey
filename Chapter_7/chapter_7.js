// Classes are the blueprints for making objects and working with oop in general. They make it easy to create multiple objects with similar
// props creating an object for them wolud take lot's of time but classes help reduce that time.
// The constructor method is a special method that we use to initialize objects with our class blueprint. There can only be one constructor
// in a class. This constructor contains properties that will be set when initiating the class.

// class Person {
//   constructor(name, age, DOB, country = "Canada") {
//     // Just like in objects default values can also be set using the syntax. Canada has been set as a default value for country.
//     //The constructor is required when creating classes because they contain the parameters required to create
//     // the object of your choice.
//     this.name = name; //The properties of the class can be recognized by the "this" keyword in front of them. The this keyword refers to the
//     // object it belongs to, so it is the first property of the instance of ClassName .
//     this.DOB = DOB;
//     this.country = country;
//     this.age = age;
//   }
// }
// const user1 = new Person("Ebuka", 20, 2005, "Nigeria"); // The new keyword infront of the class person is required to make new instances of the
// // object from the class person.
// console.log("Hi i'm " + user1.name); // Your order of arg passing should match the contructors params order.
// console.log(user1);

// const incomplete = new Person("Patrick"); // When an object is created from a class without providing all the argumets required js returns undefined
// console.log(incomplete);

// Practice exercise 7.1
// Take the following steps to create a person class, and print instances of friends' names:
// 1. Create a class for Person including the constructor for firstname and lastname .
// 2. Create a variable and assign a value of the new Person object using your friend's first and last names.
// 3. Now add a second variable with another friend's name using their firstname and last name.
// 4. Output both friends into the console with a greeting of hello.
// YOU ALREADY DID THAT.

// Methods: these are just functions created within classes and are made available for use by any object created from that class.

class Person2 {
  constructor(firstname, lastname, age, DOB, country = "Canada") {
    this.firstname = firstname;
    this.lastname = lastname;
    this.DOB = DOB;
    this.country = country;
    this.age = age;
  }

  greet() {
    console.log("Hi there", this.firstname);
  }

  fullname() {
    console.log(this.firstname + " " + this.lastname);
  }
}

const user2 = new Person2("Gerrald", "Mitchell");
user2.greet();

// Practice exercise 7.2
// Get your friend's full name:
// 1. Using the Person class from Practice exercise 7.1, add a method
// called fullname , which returns the concatenated value of firstname
// and lastname when invoked.
// 2. Create values for person1 and person2 using two friends' first and
// last names.
// 3. Using the fullname method within the class, return the full name of
// one or both people.

const user3 = new Person2("Micheal", "Angello");
user2.fullname();
user3.fullname();

// Properties: these are the same as those in objects, they are fields that hold values for an object's keys and can be accessed outside the
// class as seen in earlier code. The props of a class can be made inaccessible outside a class like so.
class ClassName {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
}

let p = new ClassName("Mickey", "Mouse"); // this will return undefined
console.log(p.firstname, p.lastname);

// Getters and setters: these are props in js that allow one modify or change the props of a private field. They get the keywords get and set
// They look like functions but aren't they're called accessors.
// encapsulation: this is the process whereby a class is in total control of the data and content within it and is made private.
class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    // The getter uses the get keyword to function the getter doesnt require any parameter and doesn't allow you mod the code. it only
    // returns the value of private property assigned to it.
    return this.#firstname;
  }
  set firstname(firstname) {
    // The setter allows you mod the value of the property given to it as well as allowing you add more logic to the code. They dont return any value
    if (firstname.startsWith("M")) {
      this.#firstname = firstname; // THIS VALIDATOR works on Zain
    } else {
      this.#firstname = "M" + firstname;
    }
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

let Z = new Person("Mickey", "Mouse");
console.log(Z.firstname, Z.lastname);
Z.firstname = "zain";
console.log(Z);

// Inheritance: This concept of oop allows a child class or object from a parent class to be inherit the methods and code blocks as well as properties
// from the parent class.

class Vehicle {
  constructor(color, maxspeed, make, model) {
    this.color = color;
    this.maxspeed = maxspeed;
    this.make = make;
    this.model = model;
  }
  move() {
    console.log("This vehicle is moving at", this.maxspeed);
  }
}
class Car extends Vehicle {
  // The new class (child class) has been created from the parent class vehicle through the extends keyword.
  // The inheritance concept allows the car class to inherit all attributes of the parent class Vehicle alongside it's methods
  constructor(color, maxspeed, make, model, fuel) {
    super(color, maxspeed, make, model); //This makes sure that the fields from the parent are set as well and that the methods are available
    // without having to do anything else: they are automatically inherited. IT'S NOT OPTIONAL it must be there else you'll get a reference error.
    this.fuel = fuel;
  }

  speedBoost() {
    console.log("The", this.make, this.model, "has received a speed boost");
  }
}

let car1 = new Car("Blue", "50mph", "Lexus", "Rx 330", "flexifuel");
console.log(car1);
car1.speedBoost();
car1.move();

//Prototypes: prototypes are basically the building blocks of objects, on top every class there's a prototype. Whenever a class is created
// without specifying the fields that class automatically inherits from the prototype. A prototype is a property holding all the properties
// and methods of an object. So, adding a function to prototype is adding a function to the class.You can use prototype to add properties or
// methods to an object,

Vehicle.prototype.intro = function () {
  // The prototype helps us add functions or methods to an object or a class like so. this method is also
  // available to the child class car as well as the object car1
  console.log("Hi i have a", this.make, this.model);
};
car1.intro();

// Practice exercise 7.3
// Create a class that contains properties for different animal species and the
// sound that each species makes, and create two (or more) animals:
// 1. Create a method that prints a given animal and its sound.
// 2. Add a prototype with another action for the animal.
// 3. Output an entire animal object into the console.
class Animals {
    constructor(name,sound,color,size) {
        this.name = name;
        this.sound = sound;
        this.color = color;
        this.size =size;
    }
    identifier () {
        console.log(this.name, this.sound);
    };
};

Animals.prototype.animalColor = function () {
    console.log("The",this.name,"has a",this.color,"color");
};

let animal_1 = new Animals("Lion","Roars","Golden Brown","large");
let animal_2 = new Animals("Elephant","Trumpets","grayish brown","Very large");

animal_1.identifier();
animal_1.identifier();
animal_1.animalColor();
animal_2.animalColor();


// Chapter projects
// Employee tracking app
// Create a class to track the employees of a company:
// 1. Use first names, last names, and the number of years worked as values
// in the constructor.
// 2. Create two or more people with values for their first names, last
// names, and the number of years they've worked at the company. Add
// the people into an array.
// 3. Set up a prototype to return the details of the person's first and last
// names and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console,
// adding some text to make the output a full sentence.

class Bafuto_Employees {    
    constructor (firstname, lastname,number_of_years) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.number_of_years =number_of_years;
    }

}

const employee_1 = new Bafuto_Employees("Ay","Oluwatobi",5);
const employee_2 = new Bafuto_Employees("Taiwo","Adebayo",10);

Bafuto_Employees.prototype.employeeDetails = function () {
    console.log("Employee",this.firstname,this.lastname,"has being working for",this.number_of_years,"years");
};

employee_1.employeeDetails();
employee_2.employeeDetails();


// Menu items price calculator
// Create a class which will allow you to work out the combined price of a
// number of items, and interact with it to work out the total cost of different
// orders.
// 1. Create a class that contains the prices of two menu items as private
// field declarations.
// 2. Use the constructor in the class to get the argument values (how many
// of each item are being bought).
// 3. Create a method to calculate and return the total cost depending on
// how many of each item the user selects.
// 4. Use a getter property to grab the value output by the calculation
// method.
// 5. Create two or three objects with different combinations of menu
// selections, and output the total cost in the console.

// let input = prompt("bread or egg");
// let amount = prompt("input amount");
// amount = Number(amount);
// tempVar;
// if (input==="egg") {
//    tempVar = "egg";
// } else if (input === "bread") {
//     tempVar = "bread";
// }else{
//     console.log("pick one");
// };

// class Menu_Price_Calculator {
//     #eggPrice;
//     #breadPrice;
//     constructor(eggPrice,breadprice) {
//         this.#eggPrice = eggPrice;
//         this.#breadPrice = breadprice;
//     }

//         get breadprice () {
//             this.#breadPrice = breadprice;
//             return this.#breadPrice; 
//         };

//         get eggPrice () {
//             this.#eggPrice = eggPrice;
//             return this.#eggPrice;
//         };    
        
//         priceCal () {
//             amount * this.
//         }
//     };
   

    class Menu {
 #offer1 = 10;
 #offer2 = 20;
 constructor(val1, val2) {
 this.val1 = val1;
 this.val2 = val2;
 }

 calTotal(){
 return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
 }

 get total(){
 return this.calTotal();
 }
}

const val1 = new Menu(2,0);
const val2 = new Menu(1,3);
const val3 = new Menu(3,2);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);


// ASK CHAT GPT


