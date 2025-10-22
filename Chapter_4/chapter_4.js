// // // // Logic Statements: Logical statements allow us to make multiple paths in our code.
// // // // there are several types of logic statements
// 1. If and if else statements
let rain = true;
// this is an if else statement
if (rain) { 
  console.log("Don't forget your umbrella!");
} else {
  console.log("Enjoy the sunshine!");
}

// // // // if() {
// // // //     //Whatever is in this block will execute if the condition is true
// // // // } else {
// // // //     //we don't need an else block, it is optional 
// // // //   // this code will only be executed if the expression is false
// // // // }

// // // let hobby = "gaming";
// // // if (hobby == "reading") {
// // //     console.log("You love reading!");
// // // } else {
// // //     console.log("You have other hobbies!");
// // // }


// // // let hobby1 = "dancing"; // when checking equality in the if statement, use == or === rather than = due to the fact that this will check for value equality
// // // // in this case it converts coding to a boolean and runs it as true
// // // if(hobby1 = "coding"){ 
// // //   console.log("** I love coding too! **"); 
// // // } else { 
// // //   console.log("** Can you teach me that? **"); 
// // // } 

// // // // Practice exercise 4.1
// // // //1. Create a variable with a Boolean value.
// // // // 2. Output the value of the variable to the console.
// // // // 3. Check whether the variable is true and if so, output a message to the console, using the following syntax: if(myVariable){ 
// // // //action 
// // // //}
// // // //  Add another if statement with an ! in front of the variable to check whether the condition is not true, and create a message that will be
// // // //  printed to the console in that instance. You should have two if statements, one with an ! and the other without. You could also use
// // // //  an if and an else statement instead—experiment!
// // // // 5. Change the variable to the opposite to see how the result changes.

// // // let sunshine = true;
// // // console.log(sunshine);

// // // if (sunshine) { // this is an if statement
// // //     console.log("Enjoy the Sunshine");
    
// // // }

// // // if (!sunshine) {
// // //     console.log("No sunshine for you party horse");// because the "!" changes the boolean value of an expression or variable and the if statment block 
// // // // only runs when true the message isn't displayed.
    
// // // }

// // // // 2. Else if statements
// // // let age  = 20;
// // // let stage = ""; 
// // // let ticketPrice = null;
// // // if (age < 3) {
// // //     ticketPrice = 0;
// // //     stage = "baby";
// // // } else if (age>=3 && age<12) {
// // //     ticketPrice = 5;
// // //     stage = "child";
// // // } else if (age>=12 && age<20) {
// // //     ticketPrice = 6;
// // //     stage = "teenager";
// // // } else {
// // //     ticketPrice = 10;
// // //     stage = "Grown Up";
// // // }
// // // console.log(`You are a ${stage} and your ticket price is $${ticketPrice}`);// there are two ways of using variables alongside strings the first
// // // // is using the "$" and placing the variable within curly braces and the entire thing in backticks

// // // console.log("you are a "+stage+" and your ticket price is $"+ticketPrice );// Or concatinating the strings and the variable using the arithemetic
// // // // + like so. 


// // // //  If *a value falls into a certain category*, then *a certain action will happen*, else if *the value falls into a different category than
// // // //  the previous statement*, then *a certain action will happen*, else if *the value falls into a different category than either of 
// // // // the previous brackets*, then *a certain action will happen

// // // let age1 = 10; 
// // // let cost = 0; 
// // // let message; 
// // // if (age1 < 3) { 
// // //     cost = 0; 
// // //     message = "Access is free under three."; 
// // // } else if (age1 >= 3 && age1 < 12) { 
// // //     cost = 5; 
// // //     message ="With the child discount, the fee is 5 dollars"; 
// // // } else if (age1 >= 12 && age1 < 65) { 
// // //     cost = 10; 
// // //     message ="A regular ticket costs 10 dollars."; 
// // // } else { 
// // //     cost = 7; 
// // //     message ="A ticket is 7 dollars."; 
// // // } 
// // // console.log(message); 
// // // console.log("Your Total cost "+cost);


// // // // Practice exercise 4.2
// // // //  1. Create a prompt to ask the user's age
// // // //  2. Convert the response from the prompt to a number
// // // //  3. Declare a message variable that you will use to hold the console message for the user
// // // //  4. If the input age is equal to or greater than 21, set the message variableto confirm entry to a venue and the ability to purchase 
// // // // alcohol
// // // //  5. If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol
// // // //  6. Provide a default else statement to set the message variable to deny entry if none are true
// // // //  7. Output the response message variable to the console.


// // // let age2 = prompt("How old are you?"); 
// // // age2 = Number(age2); 
// // // let message1; 
// // // if(age2 >= 21){ 
// // //     message1 = "You can enter and drink."; 
// // // }else if(age2 >= 19){ 
// // //     message1 = "You can enter but not drink."; 
// // // }else{ 
// // //     message1 = "You are not allowed in!"; 
// // // } 
// // // console.log(message1);

// // // // 3. Conditional ternary operators
// // // // the conditional ternary operator is a shorthand way of writing an if-else statement
// // // // it takes three operands: a condition, a value if the condition is true, and a value if the condition is false
// // // // the syntax is: condition ? valueIfTrue : valueIfFalse
let age3 = 20;
let message2 = (age3 >= 21) ? "You can enter and drink." : (age3 >= 19) ? "You can enter but not drink." : "You are not allowed in!";
console.log(message2);

// // NESTED TENARY OPERATOR
// //

score = 70; //  its basically another way of writing the if else statement where the key in this case score is passed alongside a condition
// and the "?" represent if true while the ":" represent else-if with the last value representing the default.
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : score >= 100
    ? "E"
    : "F";

console.log(grade)

// // // // Practice exercise 4.3
// // // //  1. Create a Boolean value for an ID variable
// // // //  2. Using a ternary operator, create a message variable that will check
// // // //  whether their ID is valid and either allow a person into a venue or not
// // // //  3. Output the response to the console

// // // let idValid = true;
// // // let message3 = idValid ? "You can enter the venue." : "You cannot enter the venue.";
// // // console.log(message3);


// // // // switch statements
// // // // The switch operator helps you execute different code blocks based on the value of an expression
// switch(expression) { 
// case value1: 
// // code to be executed 
// break; 
// case value2: 
// // code to be executed 
// break; 
// case value-n: 
// // code to be executed 
// break; 
// }

activity = "brunching"; // this is the current activity
switch (activity) {// the activity variable is the expression being evaluated and it also represents the key the switch operator will use
//  to find a matching case
    case "wakingUp":// each case represents an if statement for different activities.
        console.log("The time is 7:00 AM");
        break;
    case "eatinglunch":
        console.log("The time is 12:00 PM");
        break;
    case "goingtobed":
        console.log("The time is 10:00 PM");
        break;

    default://If it does not find a match with any of the cases and a default case is present, then it will execute the code associated with
    // the default case. The default case is optional.It's just like the else statement in an if-else chain.
        console.log("Bro is still sleeping.");
        break;
}


// // //Practice exercise 4.4
// // // In this exercise, we'll create a Magic 8-Ball random answer generator:
// // // 1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 
// // //    6 possible results. You can increase this number as you add more results.
// // // 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
// // // 3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
// // // 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values 
// // // for each case, assigning new values depending on the results from the random value.
// // // 5. Output the user's original question, plus the randomly selected case response, to the console after the user enters their question.

// let randomVariable1 = Math.random();
// let randomVariable2 = Math.random();
// let randomVariable3 = Math.random();
// let randomVariable4= Math.random();
// let randomVariable5 = Math.random();
// let randomVariable6 = Math.random();

// let tempValue = [];
// while (tempValue.length > 0) {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
// }


// randomVariable1 = randomVariable1 * 5;
// Math.trunc(randomVariable1);
// randomVariable1 = Math.floor();

// // console.log(randomVariable1);

// stringValue = prompt("Hello! Pick a number from 1 to 6");
// stringValue = Number[stringValue];

// switch (stringValue) {
//     case randomVariable1:
//         message = `You picked the number ${randomVariable1}`
//         console.log(message);
//         break;
    
//     case randomVariable2:
//         message = `You picked the number ${randomVariable2}`
//         break;

//     case randomVariable3:
//         message = `You picked the number ${randomVariable3}`
//         break;

//     case randomVariable4:
//         message = `You picked the number ${randomVariable4}`        
//         break;

//     case randomVariable5:
//         message = `You picked the number ${randomVariable5}`     
//         break;

//     case randomVariable6:
//         message = `You picked the number ${randomVariable6}`        
//         break;

//     default:
//         message = "Bro pick a number from 1 to 6"        
//         break;

// }
// let endResponse = `Hello ${message}`;
// console.log(endResponse);



// // //  Combining cases
// // // When two or more cases have the same block of code they can be stacked up on each other like so

// // let studentGrade = "F";
// // switch (studentGrade) {
// //     case "A":
// //         console.log("Nice work");
// //         break;

// //     case "B":
// //     case "C":
// //         console.log("Not Bad");
// //         break;

// //     case "D":
// //     case "E":
// //         console.log("This is kinda Bad bro");
// //         break;
    
// //     case "F":
// //         console.log("What The hell bro! This is trash");
// //         break;

// //     default:
// //         console.log("I don't even know what grade this is");
// //         break;
// // }


// // if else statement can also be run in a similar way only a little different
// let babyAge = 1;
// if (babyAge < 1 || babyAge===1) {
//     console.log("It's a new born");
// } else if (babyAge >1 || babyAge===2) {
//     console.log("That's not a new born baby");
// } else{
//     console.log("Where's your baby");
// }


// // // Practice exercise 4.5
// // //  1. Create a variable called  prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
// // //  2. Convert the prompt response to a number data type
// // //  3. Create a variable to use for the output message containing the value "My Selection: "
// // //  4. Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is
// // //  selected
// // //  5. Use the switch break to add combined results for prizes
// // //  6. Output the message back to the user by concatenating your prize variable strings and the output message string

// promptResponse = prompt("Set the value by selecting a number between 1and 5");
// promptResponse = Number(promptResponse);
// let prize = promptResponse;
// let response = "";
// let Output = "My Selection: " +prize;

// switch (prize) {
//     case 1:
//         response = "You have been awarded with a brand new Laptop";
//         break;
//     case 2:
//         response = "You have been awarded with a brand new Motorcycle";
//         break;
//     case 3:
//         response = "You have been awarded with a brand new Gas Cooker";
//         break;
//     case 4:
//         response = "You have been awarded with a brand new Porsche 911";
//         break;
//     case 5:
//         response = "You have been awarded with a brand new Phone";
//         break;

//     default:
//         response = "Pick a number between 1 and 5 oth inclusive"
//         break;
// }

// Output = "Your Selection: No. "+prize+" "+response;
// console.log(Output);


// //Chapter projects
// // 1. Evaluating a number game: Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value
// // in your code. Output the result to the user.
// let selectedNumber = prompt("Enter a number and i'll check whether it's\ngreater than, equal to, or less than my secret number");
// selectedNumber = Number(selectedNumber);
// let secretNumber = 20;
// if (selectedNumber > secretNumber) {
//     console.log(`Your selected number:${selectedNumber} is greater than ${secretNumber}`);
// }else {
//     console.log(`Your selected number:${selectedNumber} is not greater than ${secretNumber}`);
// }

// if (selectedNumber === secretNumber) {
//     console.log(`Your selected number:${selectedNumber} is equal to ${secretNumber}`);
// }else {
//     console.log(`Your selected number:${selectedNumber} is not equal to ${secretNumber}`);
// }

// if (selectedNumber < secretNumber) {
//     console.log(`Your selected number:${selectedNumber} is less than ${secretNumber}`);
// }else {
//     console.log(`Your selected number:${selectedNumber} is  not less than ${secretNumber}`);
// //}



// //  2. Friend checker game:Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend 
// // if the name selected is known in the case statements. You can add a default response that you don't know the person if it's an unknown name.
// // Output the result into the console.

// let userInput = prompt("Enter your name and i'll confirm if you're a friend");
// let response = "";
// switch (userInput) {
//     case "John":
//         response = `Hello ${userInput} how are you doing today`;
//         break;
//     case "Micah":
//         response = `${userInput} how are you doing today`;
//         break;
//     case "William":
//         response = `${userInput} how are you doing today`;
//         break;

//     default:
//         response = `i don't know who ${userInput} is`;
//         break;
// }
// console.log(response)


// 3. Rock Paper Scissors game
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
//2. Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. 
// The number represents the index values in the array of the 3 items.
//3. Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the
//computer of the matching item from the array.
//4. Create a condition to handle the player and computer selections. If both are the same, this results in a tie.
//5. Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, but
//you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.
//6. Add a new output message that shows the player selection versus the computer selection and the result of the game.

let Rock = "Rock";
let Scissors ="Scissors";
Paper = "Paper";

let gameItems = [Rock,Scissors,Paper];
let Player = Math.trunc(3*Math.random());
let Computer = Math.trunc(3*Math.random());

let message = "Player "+ gameItems[Player]+" vs Computer "+ gameItems[Computer];
if (Player===Computer) {
    message += " it's a tie"
} else if (Player>Computer) {
    if(Player===0 && Computer===1){
        message += " Player Wins"
    }else {
        message += " Computer Wins"
    }
} else if(Computer>Player) {
    if (Player===0 && Computer===2) {
        message += " Computer Wins"
    } else {
        message += " Player Wins"
    }
} else if(Player>Computer) {
    if (Player===1 && Computer===2) {
        message += " Player Wins"
    } else {
        message += " Computer Wins"
    }
}
console.log(`${message}`);


// let val = 100;
// console.log(val % 2);// this checks if it has a remainder when divided

// let check = (val % 2) ? `Odd` : `Even`; // Basically the whole code is asking if 100 is divided by 2 is there a remainder
// check = `${val} is ${check}`; 
// console.log(check);
