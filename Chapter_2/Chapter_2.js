let firstName = 'Jaden';
let lastName = 'Markeroff';
// The backslash "\" in addition to the "n" is used to create a new line doubling it adds a backslash
message = `Hello ${firstName} ${lastName}!.\nHow are you doing today?`;
console.log(message)


// Adding the "\" before a single or double quote causes js to read the it as an actual character 
// in your code and not the end of your string or varaiable value.
let message_1 = "Hello \'Ebuka', how are you doing this day?";
console.log(message_1)



let middleName;
let petName = null;// This is the intentional abscenting of a value in a variable
console.log("Are the two names the same:", middleName===petName)


// typeof is a built in operator that can check a varialbe's type using the syntax below. it works whether you use 
// brackets or not.
testVariable = 1;
typeOfTestVariable1 = typeof (testVariable);
typeOfTestVariable2 = typeof testVariable;

console.log(typeOfTestVariable1);
console.log(typeOfTestVariable2);

let str = 'ebuka';
let number = 19;
let bool = true;
let bigInt = 1234567890n;
let nul = null;
let undef = undefined;
let sym = Symbol;

console.log("str", typeof(str));
console.log("number", typeof(number));
console.log("bool", typeof(bool))
console.log("bigInt", typeof(bigInt))
console.log("nul", typeof(nul))
console.log("sym", typeof(sym))
console.log("undef", typeof(undef))


// Converting data types
let str2 = 'Fishery';
str2 = Number(str2);

number = 20;
number = String(number);

let str3 = 'I love Fishery';
str3 = Boolean(str3);
 
console.log("str",str, typeof(str))
console.log(number, typeof(number))
console.log(str3, typeof(str3))

//When converting null to a number it's converted to 0
let nullToNr = null; 
nullToNr = Number(nullToNr); 
console.log("null", nullToNr, typeof nullToNr); 

// when converting an empty string to a number it also returns a zero
let strToNr = ""; 
strToNr = Number(strToNr); 
console.log("empty string", strToNr, typeof strToNr); 

// when js can't convert a string to a number it labels it as NaN(Not a Number)
let strToNr2 = "hello"; 
strToNr2 = Number(strToNr2); 
console.log(strToNr2, typeof strToNr2);

//when converting a string including "false" to a boolean js converts them to a boolean with the exception of 
// undefined, empty strings, null, the number Zero("0") and NaN.
let strToBool2 = "false"; 
strToBool2 = Boolean(strToBool2); 
console.log(strToBool2, typeof strToBool2); 
let strToBool = 0; 
strToBool = Boolean(strToBool); 
console.log(strToBool, typeof strToBool);

// Practice exercise 2.1
let str1 = 'Laurence';  
let str4 = "Svekis";  
let val1 = undefined; 
let val2 = null; 
let myNum = 1000; 

console.log(str1, typeof(str1))
console.log(str4, typeof(str4))
console.log(val1, typeof(val1))
console.log(val2, typeof(val2))
console.log(myNum, typeof(myNum))


//Operators
// Arithmetic operators
// Addition;
number = 12;
let number2 = 8;
let result = number + number2;
console.log(result)

// the additon sign can be used to concatenate variables
let result_1 = `This calculation; ${number} + ${number2} = ${result}`;
console.log(result_1)

//Subtraction
number = 12;
number2 = 8;
result_1 = number - number2;
result_1 = `This calculation; ${number} - ${number2} = ${result_1}`;
console.log(result_1)

//multiplication
result_1 = number * number2;
result_1 = `This calculation; ${number} * ${number2} = ${result_1}`;
console.log(result_1)

//Exponential
number = 2;
number2 = 3;
result_1 = number**number2;
result_1 = `This calculation; ${number} ** ${number2} = ${result_1}`;
console.log(result_1)

//Modulus
number = 10;
number2 = 3;
result_1 =number % number2;
result_1 = `This calculation; ${number} % ${number2} = ${result_1}`;
console.log(result_1)


//Unary operators: increment and decrement operators
let nr1 = 3;
nr1++;
console.log(nr1)

let nr2 = 3;
nr2--;
console.log(nr2)

let nr5 = 4;
++nr5;
console.log(nr5)

let nr6 = 4;
--nr6;
console.log(nr6)

//postfix increment
nr1 = 4;
console.log(nr1++)
// this adds the no 1 but doesn't update it when called.
console.log(nr1)
// This shows the added number(new value) 

nr2 = 4;
console.log(nr2--)
console.log(nr2)

//prefix increment
nr1 = 4;
console.log(++nr1)

nr2 = 4;
console.log(--nr2)

nr1 = 4; 
nr2 = 5; 
let nr3 = 2; 
console.log(nr1++ + ++nr2 * nr3++); 

let inc = 20;
const postInc = inc++ + inc++;// the first inc++ changes the value of inc to 21 but displays the old value of 20, the second inc++ changes 
// the value of inc from 21 to 22 but displays the old value of 21 and on addition gives 41 but the new value of inc is now 22

const preInc = ++inc + ++inc// the first ++inc changes the value of inc from 22 to 23 and the second changes it from 23 to 24, both diplays 
// the current value unlike inc++. on addition the value of preInc becomes (23 + 24 = 47). inc now becomes 24

const mixInc = inc++ + ++inc;// the first inc++ changes the value of inc to 25 but displays the old value "24" but the ++inc changes it 
// from 25 to 26 and displays 26 which on addition gives 50 with the current value of in being 26. 
console.log(preInc,postInc,mixInc)



//Assignment operators;
let x = 3;
x +=1;
//This is a shorthand for writing x = x + 5
console.log(x)

x -= 1;
//This is a shorthand for writing x = x -1
console.log(x)

x *= 2;
//This is a shorthand for writing x = x * 2
console.log(x)

x /= 2;
//This is a shorthand for writing x = x / 2
console.log(x)

x **= 2;
//This is a shorthand for writing x = x **2
console.log(x)

x %= 2;
//This is a shorthand for writing x = x % 2
console.log(x)


// Comparison operators
//The outcome of the comparison operators is always a Boolean, true, or false
// double equals operator(loose equality)
let a = 5;
let b = "5";
//this comparison operator only checks for equal values regardless of the data type
// since they both have the value 5 it returns true
y = 8
x = 10
console.log(x==y)

console.log(x===y)
// the triple equals operator(strict equality), this checks whether both the data type and the value are the same since the data tpe aren't 
// equal it prints false.

console.log(x != y)// the not equal operator(loose inequality): this returns true only when they have different values regardless of the data type
// since the values of x and y = 5 this returns false

console.log(x !== y)// The strict inequality operator checks for both data type and data values and returns true since both are different


// Greater than and smaller than
x = 5;
y = 3;
console.log(x>y)
console.log(y>x)
console.log(x>=y)
console.log(y>=x)
console.log(x<y)
console.log(y<x)
console.log(y<=x)
console.log(x<=y)


//Logical operators
//And: this can only return true when both conditions are true and is represented by the "&&" sign.
console.log(x > y && y < x)
result = x + y;
let result2 = y>=x;
console.log(result && result2)

//Or:This return true when at least one or both conditions are true and is represented by the "||" sign.
let Q1 = 3;
let Q2 = 7;
console.log(Q1 > Q2 || Q1 < Q2 )// (Q1 < Q2) is true but (Q1 > Q2) is false but it prints true instead.


//Not: This  negate a Boolean. It can be done with the exclamation mark, which reads as not:
 x = false; 
console.log(!x); // This will log true, since it will simply flip the value of the Boolean.

x = 5;
y = 3;
console.log(!(y > x))// Though Y isn't greater than x and should print false but because of the exclamtion mark it returns true

// Create a variable that contains a value in miles, convert it to kilometers, andlog the value in kilometers in the following format:
// The distance of 130 kms is equal to 209.2142 miles
//For reference, 1 mile equals 1.60934 kilometers.
let milesValue = 90;
let kilometerValue = milesValue * 1.60934;
message = `The distance of ${kilometerValue} kms is equal to 90 miles `;
console.log(message)

// BMI calculator 
// Set values for height in inches and weight in pounds, then convert the 
// values to centimeters and kilos, outputting the results to the console: 
// 1 inch is equal to 2.54cm 2.2046 pounds is equal to 1 kilo
//  Output the results. Then, calculate and log the BMI: this is equal to weight(in kilos) divided by squared height (in meters).
//  Output the results to the console.
let heightInInches = 50;
let weightInPounds = 80;

let centimeters = heightInInches * 2.54;
let kiloValue = weightInPounds * 2.2046;
console.log(centimeters)
console.log(kiloValue)

let meters = centimeters * 100;
result = kiloValue * (meters**2);
message = `This is the BMI result; ${result}`;
console.log(message)


let firstNum = 5; 
let secondNum = 10; 
firstNum++; 
secondNum--; 
let total = ++firstNum + secondNum; 
console.log(total); 
let total2 = 500 + 100 / 5 + total--; 
console.log(total2);

let ab = "Hello"
ab = prompt("How are you today")
console.log(ab);


