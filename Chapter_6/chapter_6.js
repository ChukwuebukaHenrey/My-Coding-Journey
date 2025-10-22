// //Functions help you write cleaner low maintainace programs: Functions are a group of statements, variable declarations, loops, and so on
// //that are bundled together.
// // Basic Functions
// //  See if you can write a function for yourself. We want to write a function that adds two numbers.
// // 1. Create a function that takes two parameters, adds the parameters together, and returns the result.
// // 2. Set up two different variables with two different values.
// // 3. Use your function on the two variables, and output the result using console.log .
// // 4. Create a second call to the function using two more numbers as arguments sent to the function.
// // function addNumbers(x,y) {
// //     variable1 = x + y;
// //     console.log(variable1);
// // }
// // addNumbers(3,4);

// const nameArr = ['tall','fat','fair','small','big'];
// let request;
// let ranNum;
// function randomGen(name) {
//     request = prompt("What's your name!");
//     ranNum = Math.floor(Math.random()*5);
//     // nameArr = nameArr[ranNum];
//     console.log("Hi " + request+ " " +nameArr[ranNum]);
// }

// randomGen(request);

// // Parameters and arguments: params are what's inside the parenthesis of the function while arguments are the ones within the function call parenthesis
// // Create a basic calculator that takes two numbers and one string value indicating an operation. If the operation equals add, the two numbers should  subtracted from one another. If there is no option specified, the value of the
// //  option should be add .

// //  The result of this function needs to be logged. Test your function by invoking it with different operators and no operator specified.
// //  1. Set up two variables containing number values.
// //  2. Set up a variable to hold an operator, either + or -.
// //  3. Create a function that retrieves the two values and the operator string value within its parameters. Use those values with a condition to check
// //  if the operator is + or -, and add or subtract the values accordingly (remember if not presented with a valid operator, the function should
// //  default to addition).
// //  4. Within console.log() , call the function using your variables and output the response to the console.
// //  5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.


// let operation = ["+","-"];
// let input;
// function calculator(x,operands,y) {
//     input = prompt("number, operation, number");
//     input = Number(input);
//    for (let i = 0; i < operation.length; i++) {
//     operands = operation[i];
//         if (operands === "+") {
//             variable2 = x + y;
//         } else if(operands ==="-") {
//             variable2 = x - y;
//         } else {
//             variable2 = x + y;
//         };
//     console.log( variable2);
//    };
   
   
// }

// calculator(input);

// // const val1 = 10; 
// // const val2 = 5; 
// // let operat = "-"; 
// // function cal(a, b, op) { 
// //   if (op == "-") { 
// //     console.log(a - b); 
// //   } else { 
// //     console.log(a + b); 
// //   } 
// // } 
// // cal(val1, val2, operat); 

// //Default or unsuitable parameters: Default params are used as a default param when the arguments required aren't available

// // function addNumbers(x=2, y=3) {// As you can see the args required in the function calls aren't there causing js to use the hardcoded params
// //     variable1 = x + y;
// //     console.log(variable1);
// // }
// // addNumbers();

// // Arrow Function: they're basically shorthand notations for writing functions in js though they must either be called as a variable or passed 
// // as  an argument before they can be used.
// // function name = (params1,params2) => code body;
// // Here's the syntax for it (param1, param2) => body of the function; 

// // Or for no parameters:
// //  () => body of the function; 

// // Or for one parameter (no parentheses are needed here):
// //  param => body of the function; 

// // Or for a multiline function with two parameters:
// //  (param1, param2) => { 
// // // line 1; 
// // // any number of lines; 
// // };

// // let addition = (x,y) => {
// //     variable1 = x + y;
// //     console.log(variable1);
// // }
// // addition(2,7);

// // the forEach method can be used with the arrow functions for an array so as to enable you work with every item an array without using loops
// const namesArr = ['reggy','mike','tony','ralph'];
// namesArr.forEach(e => {
//     console.log(e);
    
// });

// // spread Operators: (...) they're pretty easy to use they basically allow you pass the element of an array as an arg in a function.
// //they also allow you add an entire array to another or to any function call. They are used outside the function

// let spread = ['love','eating','good'];
// let message = ['i',...spread,'food'];
// console.log(message);


// let subtract = (x,y,z,m) => {
//     console.log( x + y + z + m);
// }

// let arr1 = [2,5]
// let arr2 = [3,5]
// subtract(...arr1,...arr2);

// //Rest parameter:This is used inside the function parameter 
// function greeting1(params1, params2) {
//     console.log(params1,params2);
// }
// greeting1("hi","hello","gooday");


function greeting2(params1, ...params2) {// the rest parameter allows coverts the parameter bearing it to an array allowing you insert multiple
    //args to a param that should only take one
    console.log(params1,params2);
}
greeting2("hi","hello","gooday");

// // Returning function values
// function adder(x,y) {
//     console.log(x+y);
// }
// // Without adding a return value to this code js logs in the result of the code as well as undefined
// let adderVar = adder(2,2);
// console.log(adderVar);


function adder1(x,y) {// to counter this the return value is added to the function to store the result of the function rather than logging it
    return(x+y); // directly in the console
}
// let adderVar1 = adder1(3,2);
// console.log(adderVar1);

let resultArr = [];// this is another use of the return value
for (let i = 0; i < 10 + 1; i++) {
    let result = adder1(i,i*2);
    resultArr.push(result);
}
console.log(resultArr);


// // Modify the calculator that you made in Practice exercise 6.2 to return added values instead of printing them. Then, call the function 10 or more
// //  times in a loop, and store the results in an array. Once the loop finishes, output the final array into the console.

// // 1. Set up an empty array to store the values that will be calculated within the loop.
// //  2. Create a loop that runs 10 times, incrementing by 1 each time, creating two values each iteration. For the first value, multiply the value of the
// //  loop count by 5. For the second value, multiply the value of the loop counter by itself.
// //  3. Create a function that returns the value of the two parameters passed into the function when it is called. Add the values together, 
// // returning  the result.
// //  4. Within the loop, call the calculation function, passing in the two values as arguments into the function and storing the returned result in a
// //  response variable.
// //  5. Still within the loop, push the result values into the array as it iterates through the loop.
// //  6. After the loop is complete, output the value of the array into the console.
// //  7. You should see the values  [0, 6, 14, 24, 36, 50, 66, 84, 104,126] for the array in the console.

// const resultArr2 = [];
// let response;
// for (let i = 0; i < 10 + 1; i++) {
//         result1 = i*5;
//         result2 = i*i;
//     let resultFunction = (params1,params2) => {
//         return(params1+params2);     
//     }
//     response =resultFunction(result1,result2);
//     resultArr2.push(response);

// }
// console.log(resultArr2);

// // Returning with arrow functions:
// let sumCal = (x,y) => x + y;// one line arrow funcs can be written without using the return statements.
// console.log(sumCal(2,2));

//  let addTwoNumbers = (x, y) => { 
// console.log("Adding..."); 
// return x + y; 
// }
//  console.log(addTwoNumbers(2,7));
 
// // Variable scope in functions;
// // Local variables in functions: these are variables defined and called within function scopes and block scopes and all the keywords used for 
// // defining a variable can be used in this -

// // 1. Global vs Local Scope
// // Create a variable outside a function and another inside the function. Print both inside the function and outside. Observe which one is accessible where.

// // 2. Block Scope with let
// // Write a program where you declare a variable inside an if block using let. Try printing it inside and outside the block. What happens?

// // 3. Function Scope with var
// // Write a program where you declare a variable inside a function using var. Try accessing it outside the function. What happens?

// // 4. Re-declaring Variables
// // Create two variables with the same name using:
// // var → inside the same scope
// // let → inside the same scope
// // What happens in both cases?

// //  The difference between let and var is that var is function-scoped, which is the concept we described above. 
// // let is actually not function scoped but block-scoped. A block is defined by two curly braces 
// // code within those braces is where let is still available.

// function doingStuff() { 
// if (true) { 
// var x = "local"; 
//   } 
// console.log(x); 
// } 
// doingStuff();

// // function doingStuff1() { 
// //   if (true) { 
// //     let x = "local"; 
// //   } 
// //   console.log(x); 
// // } 
// // doingStuff1(); 

// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);
// function creatingNewScope(x) {
//  console.log("Access to global vars inside function." , globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// // immediately invoked function expression (IIFE):is a way of expressing a function so that it gets 
// // invoked immediately. It is anonymous,it doesn't have a name, and it is self-executing.

// (function () {
//  console.log("IIFE!");
// })();

// let number = 1000;
// (function () {
//     let  number = 100;
//     console.log(number);
// }) ();

// let anonymousVal = "Ebuka jr";
// (function (params){
//     message = "Hi there! "+ "\n"+ params;
//     console.log(message);
    
// }) (anonymousVal);

// // // Recursive functions
// // function getRecursive(nr) {
// //  console.log(nr);
// //  if (nr > 0) {
// //  getRecursive(--nr);
// //  }
// // };
// // getRecursive(3);

// function logRecursive(nr) {
//  console.log("Started function:", nr);
//  if (nr > 0) {
//  logRecursive(nr - 1);
//  } else {
//  console.log("done with recursion");
//  }
//  console.log("Ended function:", nr);
// }
// logRecursive(3);


// // function factorialCal(nr) {
// //   console.log(nr);
// //   if (nr===0) {
// //     return 1;
// //   } else {
// //     return nr * factorialCal(--nr);
// //   }
// // };
// // console.log(factorialCal(5));


// //  console.log(nr);
// //  if (nr === 0) {
// //  return 1;
// //  }
// //  else {
// //  return nr * calcFactorial(--nr);
// //  }
// // }
// // console.log(calcFactorial(4));

// // Nested functions:
// function doOuterFunctionStuff(nr) {
//  console.log("Outer function");
//  doInnerFunctionStuff(nr);
//  function doInnerFunctionStuff(x) {
//  console.log(x + 7);
//  console.log("I can access outer variables:", nr);
//  }
// }
// doOuterFunctionStuff(2);

// // let start = 10;
// // function loop1(val) {
// //  console.log(val);
// //  if (val < 1) {
// //  return;
// //  }
// //  return loop1(val - 1);
// // }
// // loop1(start);
// // function loop2(val) {
// //  console.log(val);
// //  if (val > 0) {
// //  val--;
// //  return loop2(val);
// //  }
// //  return;
// // }
// // loop2(start);


// // Anonymous functions: They're basically nameless funcs that can be called by assigning them to a var like so.
// let namelessFunction = function (param) {
//     console.log("I have no name yet");
//     console.log("Hello "+ param);
// };
// namelessFunction("yeti"); 

// let  adderCal = function (someValue,someOtherValue) {
//     return someValue + someOtherValue;
// };
// console.log(adderCal(2,2));

// // Function callbacks:It's passing a function as an argument to another function.
// function doFlexibleStuff(executeStuff) {
//  executeStuff();
//  console.log("Inside doFlexibleStuffFunction.");
// };
// doFlexibleStuff(namelessFunction);

// // The setTimeout() function:It is a very special function that is executing a certain function after a specified amount of time that it will wait first.
// let youGotThis = function () {
//  console.log("You're doing really well, keep coding!");
// };
// setTimeout(youGotThis, 1000);// func name , time limit.


// // Chapter projects
// // const main = function counter(i) {
// //  console.log(i);
// //  if (i < 10) {
// //  return counter(i + 1);
// //  }
// //  return;
// // }
// // main(0);


// const timer1 = ()=> console.log("One");
// const timer2 = ()=> console.log("Two");
// const timer3 = ()=> console.log("Three");
// const timer4 = ()=> console.log("Four");

// // timer4();
// // setTimeout(timer3,200);
// // setTimeout(timer1,300);
// // setTimeout(timer2,400);
// // setTimeout(timer1,900);


// let testFunction = function(){
//  console.log("Hello");
// }();

// (function () {
//  console.log("Welcome");
// })();
// (function () {
//  let firstName = "Laurence";
// })();
// let result = (function () {
//  let firstName = "Laurence";
//  return firstName;
// })();
// console.log(result);
// (function (firstName) {
//  console.log("My Name is " + firstName);
// })("Laurence");






