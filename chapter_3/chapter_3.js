// //Maths Calculation
// // This isn't part of the chapter
// let num = Math.round(4.8);// this rounds up to the nearest whole number
// console.log(num);
// num = Math.ceil(5.1);// this rounds up to the nearest whole number regardess of whether or not he value has a decimal less than ".5"
// console.log(num);
// num = Math.floor(4.9);// This rounds down to the nearest whole number
// console.log(num);
// num = Math.trunc(4.9);//Math.trunc() in JavaScript removes (truncates) the decimal/fractional part of a number and just keeps the integer part
// console.log(num);
// num = (0.343553).toFixed(3);// This reduces the number to your desired decimal place in this case three.
// console.log(num);
// num = Math.pow(3, 6);// this raises a desired number(the first one) to a power (the second value)
// console.log(num);
// num = Math.max(3, 6, 10);
// console.log(num);
// num = Math.min(3, 6, 10);
// console.log(num);
// num = Math.random();// returns a random number
// console.log(num);
// let float = (0.3 - 0.1).toFixed(2);
// console.log(float);



// // JavaScript Multiple Values
// // Reference Data types
// // Object: These are more like dictionaries just like those in py. you specify your desired object, assign it to curly braces within 
// // that are your key:value pairs.


// let personDetail = {
//   firstName: "Helen",
//   lastName: "Albert",
//   favColor: "Purple",
//   country: "Nigeria",
//   city: "Lagos",
// };

// console.log(personDetail);

// //The values of an object can be accessed in two ways;
// // DotNotation
// // Bracket Notation

// console.log(personDetail.firstName);// DotNotation

// console.log(personDetail["country"]);// Bracket Notation



// // String Methods: 

// // String Methods  EXERCISES
// // Exercise 1: Using toUpperCase and toLowerCase
// // Problem: Convert a string to all uppercase and then to all lowercase

// let string = "dwayne johnson";
// console.log("Hello", string.toUpperCase());

// // Exercise 2
// // Capitalize only the first letter of the string (e.g., "Hello world").
// string = "dwayne johnson";
// console.log("Hello", string.toLowerCase());

// // Exercise 3: Using trim
// // Problem: Remove leading and trailing whitespace from a string.
// const text = "   Hello World   ";
// console.log(text);
// console.log(text.trim());

// // Exercise 4: Using includes
// // Problem: Check if a string contains the word "cat".
// const text1 = "I have a cat and a dog";
// console.log(text1.includes("cat"));// this method allows you check whether or not a letter, word is in a string, array is in an array or 
// // part of a larger string. 


// // Exercise 5: Using replace
// // Problem: Replace the first occurrence of "dog" with "cat" in a string.

// let text2 = "I have a dog and another dog";
// text2 = text2.replace("dog","cat");// this basically helps you swap part of your text with another. The replace method requires at least two
// // arguments with the first being the text you want to be added to your code and the second is the text that you want to replace it with
// console.log(text2);

// // ReplaceAll:  this is a modification of the main method replace but unlike the replace that replaces the first occurances of a specified text 
// // even when the it occurs multiple times. the ReplaceAll() replaces all instances or occurances of the text like so;
// let string2 = "Hello there! My name is sydney, i love visiting sydney.";
// string2 = string2.replaceAll("sydney", "France");
// console.log(string2);

// // The split() method: 




// //Arrays and their properties; Arrays also fall under the reference data types. Arrays are lists of values.  These values can be of all data 
// // types and an array can even contain other arrays. There are two types of arrays; Nested arrays and simple arrays

// const arr = ["hi,there", 20, true]// this is the right way to store arrays. This is also a simple array
// console.log(arr);

// console.log(typeof arr[0])// arrays store different types of data types and has an indexing similar to py in the sense that the first item in
// // an array has an index of zero but its positional value in the array is one("1")
// console.log(typeof arr[1])
// console.log(typeof arr[2])



// arr[0] = "I am Jose Maurinho" // The items in an array can be moded by calling the array and indicating the index of the item you wish
// //  to mod followed by the new value. An array that's created using "const" can't be changed but the items within it can be moded.
// console.log(arr[0]);

// //arr = ["i love fishes"] removing this comment will cause an error.

// console.log(arr);

//Accessing elements
// let cars = ["Mercedes Benz","BMW","Ferrari","Acura",]
// //js allows you access items in an array the same way python does; arr then square brackets[] within it the index
// console.log(cars[0]);

// console.log(cars[34]); 
// console.log(cars[-1]);// when using negative indices or an index greater than the highest index of the array js reads them as undefined.

// // Overwriting elements:
// cars[0] = "Tesla";// this is called the overwriting method it allows you overwrites your desired elements in this case the tesla
// console.log(cars);// It's done by calling the array specifying the index and then giving it the desired value.

// cars[4] = "Renault";
// cars[-1] = "Kia";

// console.log(cars[4]);// this works even though the index doesn't exist in the array it isn't advisable to do so
// console.log(cars[-1]);
// console.log(cars);





// // Length; this is a built-in property that helps check the total number of items in an array. And can be called like so:
// console.log("Length of Cars =", cars.length);

// let emptyArray = [];
// let fruits = ["mango","orange","pineapple"]
// console.log("length of fruits = ", fruits.length);
// console.log("length of emptyArrays = ", emptyArray.length);


// numbers = [22,43,64];//When you add an item to an existing array using the overwriting method js creates additional index positions for the 
// // missing indexes. numbers has a total length of 3 and has 2 as it's highest index but on adding an additional index greater than the 
// // index and total length causes js to create an empty index position for the missing ones.
// numbers[5] = 12;
// console.log(numbers.length);// Now the total length becomes 6 amd the highest index becomes 5.



// //Practice exercise 3.1
// //. Create an array to use as your shopping list with 3 items: "Milk,"
// // "Bread," and "Apples."
// //. Check your list length in the console.
// //. Update "Bread" to "Bananas."
// //. Output your entire list to the console.

// let shoppingList = ["Milk","Bread","Apples"];
// console.log("This is the length of my shopping list:", shoppingList.length);

// shoppingList[1] = "Banana";
// console.log(shoppingList);




// // Array methods:
// // Adding and replacing elements "The proper WAY!!!"
// // The PUSH Method: This adds items to the back of an array giving it a new index position unlike the overwriting method which 
// // completely replaces it.
// shoppingList.push("tangerine");
// console.log(shoppingList);
// console.log("This is the length of my shopping list:", shoppingList.length);



// // The SPLICE Method: This allows you add items or elements to an array at any index of your choice
// shoppingList.splice(1,0, "Baked Beans", "Cupcakes")
// console.log(shoppingList);
// // The splice method takes on multiple parameters, in this it's taking two with the first parameter ("1") representing the index position
// // we want our newly spliced or added elements to begin and the second parameter ("0") representing the number of element, items to delete.


// shoppingList.splice(1,4, "Rice", "Icecream");// On changing  the second parameter to "4" the output returns an array of four items this is 
// console.log(shoppingList); // because there were 4 items behind the insertion. increasing the value of the second parameter to a value greater
// console.log("This is the length of my shopping list:", shoppingList.length);// the number of items left js still runs because there's no more stuff to delete.

// // The CONCAT Method: This method allows you add an array into another array as well as add values to that array like so;
// let arrNr1 = [1,2,3];// from line 213 we can see that the first array is written first then the concat method with the secod array being the
// let arrNr2 = [4,5,6];// argument for the concat method.
// arrNr1 = arrNr1.concat(arrNr2); 
// console.log(arrNr1);
// // elements, items can be added to the array through the concat method by making the new additional elements the arguments for the concat method
// let arrNr4 = arrNr1.concat(7,8,9);  
// console.log(arrNr4);


// // Deleting elements;
// // The POP Method: This allows you delete the last element in an array
// console.log("Before pop",arrNr4);
// arrNr4.pop();
// console.log("After pop", arrNr4);

// // The SHIFT Method: This allows you delete the first element in your array 
// console.log("Before shift",arrNr4);
// arrNr4.shift();
// console.log("After shift", arrNr4);

// // // // shift()
let fruits2 = ["mango", "orange", "pawpaw"];
// this method removes the first element of an array and returns it
console.log(fruits2.shift());

// Unshift method
let fruits = ["mango", "orange", "pineapple"]
fruits.unshift("watermelon");// this adds a new element to the front of the list.
console.log(fruits);


// // The SPLICE Method also allows you delete elements by giving it two indices with the first being where it's to begin and the second index
// console.log("Before Splicing",arrNr4);// tells js how many elements to delete in this case three elements after starting from the first arg(index 1)
// arrNr4.splice(1,3);
// console.log("After Splicing", arrNr4);

// // // // Slice?()
let fruits3 = ["mango", "apples", "pawpaw", "cherry", "Golden Melon", "Pear"];
//console.log(fruits3.slice(2, 5));
console.log(fruits.slice(2,)); ////this returns the last two elements in the array
// // This is similar to the slice method in py this method allows select a copy of your
// // desired section in an array by specifying the first parameter which is the index you want your copy to begin and 
// // specifing the last index which is where your copy ends with the element bearing that index being excluded from the copy


// // The OPERATOR DELETE: This isn't a method but an operator that allows you convert an index of an element in an array to undefined rather than 
// // permanently deleting the the index itself. i.e it makes the element in the index "undefined" but retains the index
// delete (arrNr4[0]);
// console.log("Using Delete",arrNr4);


// //  Finding elements; The FIND Method:
// //  If you want to check whether a value is present in an array, you can use the find() method

// // The  indexOf() method: This method allows you find the index location of a specific element on an array. The element whose index you wish
// console.log(shoppingList);// to find should be specified in the indexOf() paranthesis
// console.log("The item Icecream is at index:",shoppingList.indexOf("Icecream"));

// console.log(shoppingList.push("Milk"));// this adds milk to the back
// shoppingList.splice(2,0, "Milk"); // this adds it to the index "2"
// console.log(shoppingList);

// console.log("Here's the second occurance of Milk;",shoppingList.indexOf("Milk",0));// first arg = element to be searched, 
// // second arg = index to start from

// console.log("I also have milk at index:",shoppingList.lastIndexOf("Milk"));// this method allows you check the index of the last occurance of
// // an element in an array.
// console.log("Here's the index of Bread;",shoppingList.indexOf("Bread"));// when an element doesn't exist in an array but is being searched for throught the indexOf() method
// // js returns "-1"



// // Sorting Elements: The SORT Method: this allows you arrange numbers and strings in an array from low to high and from A-Z
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"]; 
// console.log(names.sort());

// numbers = [1,4,6,2,3];
// console.log(numbers.sort());

// console.log(names.reverse());// this reverses the order of the array("Not necessarily in alphabetical or ascending order")
// console.log(numbers.reverse());


// // Practice exercise 3.2
// //  1. Create an empty array to use as a shopping list.
// //  2. Add 
// // Milk , 
// // Bread , and 
// // 3. Update "
// //  Apples to your list.
// //  Bread " with 
// // Bananas and 
// // Eggs .
// //  4. Remove the last item from the array and output it into the console.
// //  5. Sort the list alphabetically.
// //  6. Find and output the index value of 
// // Milk .
// //  7. After 
// // Bananas , add 
// // Carrots and 
// // Lettuce .
// //  8. Create a new list containing 
// // Juice and 
// // Pop .
// //  9. Combine both lists, adding the new list twice to the end of the first list.
// //  10. Get the last index value of pop
// // Pop and output it to the console.

// let shoppingList2 = ["Milk"]
// shoppingList2.push("Apples","Bananas","Eggs");
// console.log(shoppingList2);

// console.log(shoppingList2.pop());
// console.log(shoppingList2.sort());
// console.log(shoppingList2.indexOf("Milk"));
// console.log(shoppingList2.indexOf("Bananas"));
// shoppingList2.splice(1,0, "Carrots","Lettuce");
// console.log(shoppingList2);

// let newList = [];
// newList.push("Juice","Pop");
// console.log(shoppingList2.concat(newList, newList));
// console.log(shoppingList2.lastIndexOf("Pop"));



// Multidimensional arrays
// Two dimensional Arrays: they can also be accessed the same way nested arrays are accessed
// let size1 = [1,2,3];
// let size2 = [4,5,6];
// let size3 = [7,8,9];
// let sizes = [size1,size2,size3];
// console.log("This is a two dimensional array;",size1,size2,size3);

// // This is a nested array i.e an array housing other arrays
// let brands =[
//   ["Lexus","Toyota","Mclaren"],
//   ["BMW","Audi","Range Rover"],
//   ["Acura","Hyundai","Honda"]
// ]
// console.log(brands[1][1]);// Nested arrays can be accessed by calling the array and then the index position of the value
// // you wish to print.
// console.log("I love the",brands[1][0],"brand");


//Objects
let personDetail = {
  firstName: "Helen",
  lastName: "Albert",
  favColor: "Purple",
  country: "Nigeria",
  city: "Lagos",
};

console.log(personDetail);

// DotNotation
// Bracket Notation

console.log(personDetail.firstName);
console.log(personDetail["country"]);

// A variable can be assigned to the property or key of an object like so but it works predominantly using the bracket notation.
// and these variables can be called using the syntax below.
let variable = "lastName";
console.log(personDetail[variable]);
// we can update the value accessing this way, it is the exact same as when we would have accessed it with the literal string
personDetail[variable] = "Chinonso";
console.log(personDetail.lastName);


//  Practice exercise 3.4
//  1. Create a new myCar object for a car. Add some properties, including,but not limited to, make and model , and values for a
//  typical car or your car. Feel free to use booleans, strings, or numbers.
//  2. Create a variable that can hold the string value color . This variable containing a string value color can now be used to 
// reference the property name within myCar . Then, use the variable within the square bracket notation to assign a new value to 
// the color property in myCar .
//  3. Use that same variable and assign a new property string value to it,such as forSale . Use the bracket notation once again to
//  assign a new value to the  forSale property to indicate whether the car is available for purchase.
//  4. Output make and model into the console.
// 5. Output the value of forSale into the console.

let myCar = {
  make:"Lexus",
  model:"RX 350 2025",
  color:"white",
  price:15000000,
  forSale:true,
};

console.log(myCar.color);

let colorValue = "color";
myCar[colorValue] = "red";
console.log(myCar['color']);

console.log("Is the",myCar.make,myCar.model,"available:",myCar.forSale);

variable = "forSale";
myCar[variable] = false
console.log("Is the",myCar.make,myCar.model,"available:",myCar.forSale);


//Working with objects and arrays
//Objects in objects
 let company = { companyName: "Healthy Candy", 
                      activity: "food manufacturing", 
                      address: { 
                      street: "2nd street", 
                      number: "123", 
                      zipcode: "33116", 
                      city: "Miami", 
                      state: "Florida" 
                                      }, 
                      yearOfEstablishment: 2021  
                };
        
// objects embedded inside another object can be retrived using two ways
console.log("we are located at",company.address.city);// this is the first way //MAIN-OBJECT>SUB-OBJECT>VARIABLE PROPERTY
company["address"]["city"] = "Chicago";// this is a way of modding the value of a property within an object of this kind
console.log("we are located at",company["address"]["city"]);// this is the second way

// Arrays in objects
company = { companyName: "Healthy Candy", 
                      activity: ["Making good candy","Making Toys",
                        "Spreading Happiness"], 
                      address: { 
                      street: "2nd street", 
                      number: "123", 
                      zipcode: "33116", 
                      city: "Miami", 
                      state: "Florida" 
                                      }, 
                      yearOfEstablishment: 2021  
                };

console.log(company.activity);
let activity1 = company["activity"][0];
// activity1 = "Making chocolate Candy";
console.log(activity1);
console.log("One of our Activites at",company.companyName,"is",company.activity[0]);


//Objects in arrays
let addresses = [{ 
    street: "2nd street", 
    number: "123", 
    zipcode: "33116", 
    city: "Miami", 
    state: "Florida" 
  }, 
  { 
    street: "1st West avenue", 
    number: "5", 
    zipcode: "75001", 
    city: "Addison", 
    state: "Texas" 
  }]; 

  let streetName = addresses[1].street;
  console.log(streetName);
  
// Objects in arrays in objects
company = { companyName: "Healthy Candy", 
                      activity: ["Making good candy","Making Toys",
                        "Spreading Happiness"], 
                      address: [{ 
                                  street: "2nd street", 
                                  number: "123", 
                                  zipcode: "33116", 
                                  city: "Miami", 
                                  state: "Florida" 
                                }, 
                                { 
                                  street: "1st West avenue", 
                                  number: "5", 
                                  zipcode: "75001", 
                                  city: "Addison", 
                                  state: "Texas" 
                                }], 
                      yearOfEstablishment: 2021 , 
                };

streetName = company.address[0].street;
console.log(streetName);

// Practice exercise 3.5
//  1. Create an object named 
// called 
// friends .
//  people that contains an empty array that is
//  2. Create three variables, each containing an object, that contain one of
//  your friend's first names, last names, and an ID value.
//  3. Add the three friends to the 
// friend array.
//  4. Output it to the console

let people = {
    friends: []
};

let friend1 = {
    firstName: "John",
    lastName: "Doe",
    id: 1
};

let friend2 = {
    firstName: "Jane",
    lastName: "Smith",
    id: 2
};

let friend3 = {
    firstName: "Emily",
    lastName: "Johnson",
    id: 3
};

people.friends.push(friend1, friend2, friend3);

console.log(people);

//Company product catalog:
// 1. Create an array to hold an inventory of store items.
//2. Create three items, each having the properties of name, model, cost,and quantity.
//3. Add all three objects to the main array using an array method, and then log the inventory array to the console.
//4. Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements within
// your data structure.

let storeInventory = [];

let item1 = {
          name: "Bic Pen",
          model: "BIC Cristal",
          cost: 1.50,
          quantity: 100
};

let item2 = {
          name: "Notebook",
          model: "Spiral",
          cost: 3.00,
          quantity: 200
};

let item3 = {
          name: "Eraser",
          model: "Rubber",
          cost: 0.99,
          quantity: 150
};

storeInventory.push(item1, item2, item3);

console.log(storeInventory);

// Access the quantity of the third item
console.log("Quantity of third item:", storeInventory[2].quantity);



const milkInventory = ["Milk", "Almond Milk", "Soy Milk"];
milkInventory[0] = "Oat Milk";
console.log(milkInventory[0]);


 const myArr2 = []; 
myArr2[10] = 'test'
 console.log(myArr2); 
console.log(myArr2[2]); //empty slots were created when the array was sparsely populated

const myArr3 = [3,6,8,9,3,55,553,434]; 
myArr3.sort(); 
// myArr3.length = 1; 
console.log(myArr3[0]); //undefined
