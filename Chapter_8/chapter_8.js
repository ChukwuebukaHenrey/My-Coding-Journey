//Array methods:
    //forEach():The for each method allows you pass a function to all the elements in an array
    let arr = ["grapefruit", 4, "hello", 5.6, true];
    function printStuff(element, index) {
    // these arent keywords.
    // when you use a function with two parameters on an array it
    // automatically works on the element and it's index location
    console.log("Printing stuff:", element, "on array position:", index);
    }
    arr.forEach(printStuff);

    //filter(): This method allows you work with or modify the elements of an array.
    // They require a function as a parameter and the function must return a boolean
    // They allow select or filter certain elements in an array that meets a specific requirement set by you.
    let arr1 = ["squirrel", 5, "Tjed", new Date(), true];
    function checkString(element) {
    return typeof element === "string";
    }
    
    let filterArr = arr1.filter(checkString);
    console.log(filterArr);

    //every():This method allows check for a condition on every element in an array.
    console.log(arr1.every(checkString)); // this checks if all the element in the array arr1 are strings.

    // //copyWithin():This helps with replacing part of an array with another part of the array.
    // array.copyWithin(target, start, end)
    // // Start copying from index 3 → 5.6 Stop before index 4 Place it at index 0

    arr = ["grapefruit", 4, "hello", 5.6, true];
    arr.copyWithin(0, 3, 4);

    let arr2 = ["grapefruit", 4, "hello", 5.6, true, false];
    arr2.copyWithin(0, 3);
    console.log(arr2);
    // It is important to keep in mind that this function changes the content of the
    // original array, but will never change the length of the original array.


    // map(): this method allows you change all the values of all existing elements in an array and creates a new one with the instruction it gets.
    const numArr = [1, 2, 3, 4, 5];
    let mapped_arr = numArr.map(function (x) {
    // the map(); allows us change the values of an array
    return x + 1;
    });
    console.log(mapped_arr);

    const numArr2 = [1, 2, 3, 4, 5];
    let mapped_arr2 = numArr2.map((x) => x + 1);
    console.log(mapped_arr2);

    //indexOf(): Finding the first occurrence in an array
    const greetings = ["bye", "hello", "hi there", "gooday", "bye"];
    let lastIndex = greetings.indexOf("bye");
    console.log(lastIndex);

    //lastIndexOf: Finding the last occurrence in an array
    let lastIndexOff = greetings.lastIndexOf("bye");
    console.log(lastIndexOff);

    console.log(greetings.lastIndexOf("hi")); // this returns -1 whether using index of or lastIndexOf since the value doesnt exist in the array.

    // Using the array map() method, update an array's contents. Take the
    // following steps:
    // 1. Create an array of numbers.
    // 2. Using the array map method and an anonymous function, return an
    // updated array, multiplying all the numbers in the array by 2. Output
    // the result into the console.
    // 3. As an alternative method, use the arrow function format to multiply
    // each element of the array by 2 with the array map() method in one
    // line of code.
    // 4. Log the result onto the console.

    const numbers2 = [1, 2, 3, 4, 15];
    let multiplied = numbers2.map(
        function (x) {
            return x * 2;
        }
    );
    console.log(multiplied);


    const numbers = [1, 2, 3, 4, 5];
    let updatedNumbers = numbers.map((x) => x * 2); // the function used here is called an anonymous or nameless function and the arg for the
    // param x is gotten from the elements of the array numbers.
    console.log(updatedNumbers);


// String methods
//Concat():
let s1 = 'Erling';
let s2 = "Halaand";
let s3 = s1.concat(" ",s2);
console.log(s3);// this doesnt change the value of the strings it just returns the combined value

//split();It converts a string to an array, they require an identifier or a marker that when js encounters will break the chain and convert the element before into an array
let result = s3.split(" ");
console.log(result);

let fruits = "apple,mango,banana";
let fruitsArr = fruits.split(",");
console.log(fruitsArr);

//join(); This converts an array to a string by providing a character or value that'll break the chain of array items.
let fruitStr = fruitsArr.join(",");
console.log(fruitStr);


let poem = "Roses are red violets are blue, i was born pretty what happened to you";
console.log(poem.indexOf("ed"));
console.log(poem.search("ed"));// 
console.log(poem.lastIndexOf("ed"));
console.log(poem.indexOf("reggy"));// regardless of which one of the methods used this returns -1 because it doesnt exist within the string.

console.log(poem.charAt(10));// This returns the character with the specified index
console.log(poem.charAt(1000));// this returns an empty string since it's greater than the index lenght of the varible poem.

//Creating SubStrings
// The Slice(start,end): This requires at least one param which is the index location of the first character to start with while the 
// second parameter which is optional is where you want it to end
let str = "Hello there!";
let substring = str.slice(0,4);
console.log(substring);
let substring2 = str.slice(0);// This returns all the characters because an end index wasnt provided.
console.log(substring2);

// //  replace();
// // Problem: Replace the first occurrence of "dog" with "cat" in a string.

let text2 = "I have a dog and another dog";
text2 = text2.replace("dog","cat");// this basically helps you swap part of your text with another. The replace method requires at least two
// arguments with the first being the element you want to remove from your code and the second is the text that you want to replace it with
console.log(text2);

// // // ReplaceAll:  this is a modification of the main method replace but unlike the replace that replaces the first occurances of a specified text 
// // // even when the it occurs multiple times. the ReplaceAll() replaces all instances or occurances of the text like so;
// let string2 = "Hello there! My name is sydney, i love visiting sydney.";
// string2 = string2.replaceAll("sydney", "France");
// console.log(string2);



//Number methods:
//isNaN(): this checks if the value given isn't a number it can be called without the number in front
// let x = 3;
// console.log(isNaN(x));// this returns false beacuse 3 is a number
// console.log(!(isNaN(x)));// this returns true beacuse of the not operator

// //isFinite();
let y = 3;
let z = 10/10;
let str2 = 'finite'
let bool = true;
console.log(isFinite(y));
console.log(isFinite(str));
console.log(isFinite(bool));
console.log(isFinite(z));

//isInteger
// let x = 5;
// console.log(Number.isInteger(x));// the number in front is required it's not a global method

// // //toFixed();
// // let y = 1.2545;
// // console.log(y.toFixed(2));

// let z = 1.25556;
// console.log(z.toPrecision(3));// this is kinda better than the toFixed since it approximates it.


// Math methods
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


// Date methods:
let currentDateTime = new Date();//The new Date is a built-in object constructor with several other methods within it 
console.log(currentDateTime);// this logs in the time

let newTime = Date.now();// this logs the time in an arbitrary date representing the Unix epoch.
console.log(newTime);

let millidate = new Date(1000);
console.log(millidate);

let stringDate = new Date("Fri Oct 03 2025 13:22:41 GMT+0100 (West Africa Standard Time)");
console.log(stringDate);

let specificDate = new Date(2025, 9, 10, 12, 10, 15, 100);// this is the syntax to create a spefic date
console.log(specificDate);
// Please mind this very important detail here, the second parameter is the
// month. 0 is for January and 11 is for December.

// Methods to get and set the elements of a date
// the get and set methods can be used to get the dates in the date object
let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// let s = new Date();
// console.log("year:", d.setFullYear(2010));
// console.log("Month", s.setMonth(9));
// console.log("Hours", s.setHours(25));
// console.log("day of the month", s.setDate(10));

//Go and learn parsing

//Converting a date to a string:
console.log(d.toDateString());
console.log(d.toLocaleDateString());




// Output the date with the full month name into the console. When converting
// to or from arrays, remember that they are zero-based:
// 1. Set up a date object, which can be any date in the future or past. Log
// the date out into the console to see how it is typically output as a date
// object.
// 2. Set up an array with all the named months of the year. Keep them in
// sequential order so that they will match the date month output.
// 3. Get the day from the date object value, using getDate() .
// 4. Get the year from the date object value, using getFullYear() .
// 5. Get the month of the date object value, using getMonth() .
// 6. Set up a variable to hold the date of the date object and output the
// month using the numeric value as the index for the array month name.
// Due to arrays being zero-based and the month returning a value of 1-
// 12, the result needs to be subtracted by one.
// 7. Output the result into the console.




