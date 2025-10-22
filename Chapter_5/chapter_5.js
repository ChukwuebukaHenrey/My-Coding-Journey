// // // //Loops execute a code block a certain number of times. 
// // // //1. while loops: A while loop executes a certain block of code as long as an expression evaluates to true. if the condition evaluates to false
// // // // the code block is skipped.
// // // // while (condition) {
// // // // This block of code gets executed only if the codition is true.}

// // let numList = 0;
// // while (numList <=12) {
// //     console.log(numList);
// //     numList++;
// // }// this while loop checks if numlist is less or equal to 12 and if not it prints the number and adds 1 to numList and does so until the new
// // // value of numList becomes greater than 12.

// // let arrNames = ["John","Angel",'Micheal','Elizabeth','Winston','Ebuka'];
// // let notFound = true;
// // while ((arrNames.length>0) && (notFound)) {
// //     if (arrNames[0]==='Winston') {
// //         console.log(`Hello! ${arrNames[0]}, We have finally found you.`);
// //         notFound = false;
// //     } else {
// //         arrNames.shift();
// //     }
// // }
// // console.log(arrNames);



// // // let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza",];
// // // let notFound1 = true; 
// // // while (notFound1 && someArray.length > 0) { 
// // //   if (someArray[0] === "Louiza") { 
// // //     console.log("Found her!"); 
// // //     notFound1 = false; 
// // //   } else { 
// // //     someArray.shift(); 
// // //   } 
// // // } 

// // // let nr1 = 0;
// // // let nr2 = 1;
// // // let temp;
// // // let fibonacciArr = [];
// // // while (fibonacciArr.length < 25) {
// // //     fibonacciArr.push(nr1);
// // //     temp = nr1 + nr2;
// // //     nr1 = nr2;// this part of the code changes the value of nr1 to nr2 so it can be pushed into the fibonacciArr
// // //     nr2 = temp;
// // // }
// // // console.log(fibonacciArr);

// // // //Practice exercise 5.1
// // // // In this exercise we will create a number guessing game that takes user input and replies based on how accurate the user's guess was.
// // // //  1. Create a variable to be used as the max value for the number guessing game.
// // // //  2. Generate a random number for the solution using Math.random() and Math.floor() . You will also need to add 1 so that the value is
// // // //  returned as 1-[whatever the set max value is]. You can log this value to the console for development to see the value as you create the game,
// // // //  then when the game is complete you can comment out this consoleoutput.
// // // //  3. Create a variable that will be used for tracking whether the answer is correct or not and set it to a default Boolean value of 
// // // // false . We can update it to be true if the user guess is a match.
// // // //  4. Use a while loop to iterate a prompt that asks the user to enter a number between 1 and 5, and convert the response into a number in
// // // //  order to match the data type of the random number.
// // // //  5. Inside the while loop, check using a condition to see if the prompt value is equal to the solution number. Apply logic such that if the
// // // //  number is correct, you set the status to true and break out of the loop. Provide the player with some feedback as to whether the guess was
// // // //  high or low, and initiate another prompt until the user guesses correctly. In this way we use the loop to keep asking until the solution
// // // //  is correct, and at that point we can stop the iteration of the block ofcode.








// const maxValue = 100;
// const secretNumber = Math.floor(Math.random()*maxValue) + 1;
// let minValue = 0;
// let wrongGuess = true;
// while (wrongGuess) { 
//     let guess = prompt("Guess a Number 1 - " + maxValue); 
//     guess = Number(guess); 
//     if (guess === secretNumber) { 
//         wrongGuess = false; 
//         console.log("You got it " + secretNumber); 
//     } else if (guess > secretNumber) { 
//         console.log("Too high"); 
//     } else if (guess===null) {
//      console.log("Bro pick a fucking number");
//     } else { 
//         console.log("Too Low"); 
// };
// };


// let userName = prompt("What's your name user");
// let userInput = prompt("Pick any number of your choice from 1 to 100");
// userInput = Number(userInput);
// let minValue = 0;
// let wrongGuess = true;
// let secretNumber = 40;

// while ((userInput >= minValue) && (userInput <= 100) && (wrongGuess)) {
//         if (userInput===secretNumber) {
//             wrongGuess = false;
//             console.log(`Wow ${userName} you picked number:${secretNumber}\n
//                 Which is the right number`); 
//         } else if (userInput > secretNumber) {
//             console.log("Your guess was high, try again");
//         }
//         else {
//             console.log("Your guess was low, try again");
//         }
// }



//  const max = 5; 
// const ranNumber = Math.floor(Math.random() * max) + 1; 
// //console.log(ranNumber);
//  let correct = false; 
// while (!correct) { 
//     let guess = prompt("Guess a Number 1 - " + max); 
//     guess = Number(guess); 
//     if (guess === ranNumber) { 
//         correct = true; 
//         console.log("You got it " + ranNumber); 
//     } else if (guess > ranNumber) { 
//         console.log("Too high"); 
//     } else { 
//         console.log("Too Low"); 
//     } 
// }  





// // // //do while loops: these loops 
// let number; 
// do { 
//   number = prompt("Please enter a number between 0 and 100: "); 
// } while (!(number >= 0 && number < 100)); 
// console.log(number);
// while (!(number >= 0 && number < 100));
// // // The loop continues if the entered number is NOT between 0 (inclusive) and 100 (exclusive).
// // // number >= 0 && number < 100 checks if the number is in the valid range.
// // //The ! (not) operator means the loop repeats if the number is outside this range.

// // // // Practice exercise 5.2`

// // // //  In this exercise, we will create a basic counter that will increase a dynamic variable by a consistent step value, up to an upper limit.
// // // //  1. Set the starting counter to 0
// // // //  2. Create a variable, step , to increase your counter by
// // // //  3. Add a do while loop, printing the counter to the console and incrementing it by the step amount each loop
// // // //  4. Continue to loop until the counter is equal to 100 or more than 100


// let counter = 0;
// let step = 5;
// do {
//     console.log(`Current count = ${counter}`);
//     counter += step;
// } while (counter < 100);
// console.log(counter); // Final value after loop ends


// // // // for loops: it's a little shorter than the while and do while loops 
// // // arrNum = [];
// // // for (let i = 0; i < 11 ; i++) {
// // //   arrNum.push(i);
// // // }
// // // console.log(arrNum);


// // // In this exercise we will use a for loop to create an array that holds objects.
// // // Starting with creating a blank array, the block of code within the loop will create an object that gets inserted into the array.
// // // 1. Setup a blank array, myWork .
// // // 2. Using a for loop, create a list of 10 objects, each of which is a numbered lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an 
// // // alternating true / false status for every other item to indicate whether the class will be running this year. For example: name: 'Lesson 1', status: true 
// // // 3. You can specify the status by using a ternary operator that checks whether the modulo of the given lesson value is equal to zero and by
// // //  setting up a Boolean value to alternate the values each iteration.
// // // 4. Create a lesson using a temporary object variable, containing the name (lesson with the numeric value) and predefined status 
// // // (which we setup in the previous step).
// // // 5. Push the objects to the myWork array.
// // // 6. Output the array to the console.


// let myWork = [];
// for (let i = 1; i <= 10; i++) {
//     let lesson = {
//         name: `Lesson ${i}`,
//         status: i % 2 === 1 ? true : false // true for odd, false for even
//     };
//     myWork.push(lesson);
// }
// console.log(myWork);



// // //Nested Loops: These aren't always recommended but is advised to have knowledge on. Its basically placing a loop within a 
// // // loop whick is useful for stuff like this.

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//   arrOfArrays.push([]);// what does this part do
// for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);
//   }
// }
// console.table(arrOfArrays); 


// // //  1. To create a table generator, first create an empty array, myTable , to hold your table data.
// // //  2. Set variable values for the number of rows and columns. This will allow us to dynamically control how many rows and columns we want
// // //  within the table. Separating the values from the main code helps make updates to the dimensions easier.
// // //  3. Set up a counter variable with an initial value of 0 . The counter will be used to set the content and count the values of the cells 
// // // within the table.
// // //  4. Create a for loop with conditions to set the number of iterations, and to construct each row of the table. Within it, set up a new 
// // // temporary array (tempTable ) to hold each row of data. The columns will be nested within the rows, generating each cell needed for the column.
// // //  5. Nest a second loop within the first to count the columns. Columns are
// // //  run within the row loop so that we have a uniform number of columns
// // //  within the table.
// // //  6. Increment the main counter each iteration of the inner loop, so that we
// // //  track a master count of each one of the cells and how many cells are
// // //  created.
// // //  7. Push the counter values to the temporary array, 
// // // tempTable . Since the
// // //  array is a nested array representing a table, the values of the counter
// // //  can also be used to illustrate the cell values next to each other in the
// // //  table. Although these are separate arrays representing new rows, the
// // //  value of the counter will help illustrate the overall sequence of cells in
// // //  the final table.
// // // 8. Push the temporary array to the main table. As each iteration builds a
// // //  new row of array items, this will continue to build the main table in the
// // //  array.
// // //  9. Output into the console with console.table(myTable). This will show
// // //  you a visual representation of the table structure.


// // const myTable = [];
// // const noRows = 4;
// // const noColumns = 4;
// // let counter = 0;
// // for (let i = 0; i < 5; i++) {
// //   let tempTable = [];
// //   for (let j = 0; j < 4; j++) {
// //     counter++;
// //     tempTable.push(counter); 
// //   }
// //   myTable.push(tempTable);
// // }

// // console.table(myTable);


// // //  Loops and arrays

// // // let names = ['ebuka','daniella','mitch','reggy','wilfred'];
// // // for (let i = 0; i < names.length; i++) {
// // //   console.log(names[i]);
  
// // // }

// names = ['ebuka','daniella','mitch','reggy','wilfred'];
// for (let i = 0; i < names.length; i++) {
//   console.log(`Hello There! ${names[i].toUpperCase()}`);

// }

// names = ['ebuka','daniella','mitch','reggy','wilfred'];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith("d")) {
//     delete names[i];
//     continue;
//   }
//   names[i] = "Hello There " + names[i];
  
// }
// console.log(names);



// // //  1. Create a grid array variable.
// // //  2. Set a value of  64 for the number of cells.
// // //  3. Set a counter to  0 .
// // //  4. Create a global variable to be used for the row array.
// // //  5. Create a loop that will iterate up to the number of cells you want in the array, plus one to include the zero value. In our example, 
// // // we would use 64+1.
// // //  6. Add an outer if statement, which uses modulo to check if the main counter is divisible by 8 or whatever number of columns you want.
// // //  7. Inside the preceding if statement, add another if statement to check if the row is undefined, indicating whether it is the first run 
// // //  or whether the row is complete. If the row has been defined, then add the row to the main grid array.
// // //  8. To finish off the outer  if statement, if the counter is divisible by 8, clear the  row array—it has already been added to the grid 
// // //  by the inner  if statement.
// // //  9. At the end of the for loop, increment of the main counter by 1.
// // //  10. Set up a temporary variable to hold the value of the counter and push it to the row array.
// // //  11. Within the loop iteration, check if the value of the counter is equal to the total number of columns you want; if it is, then add the current row to the grid.
// // //  12. Please note that the extra cell will not be added to the grid since there aren't enough cells to make a new row within the condition 
// // //  that adds the rows to the grid. An alternative solution would be to remove the +1 from the loop condition and add grid.push(row) after the 
// // // loop is completed, both of which will provide the same solution output.
// // //  13. Output the grid into the console.

// // // const gridArray = [];
// // // const noCells = 64;
// // // let counter1 = 0;
// // // let rowArray;
// // // for (let i = 0; i < noCells + 1; i++) {
// // //   if (counter1%8===0) {
// // //     if (rowArray !== undefined) {
// // //       gridArray.push(rowArray);
// // //     }
// // //   }
  
// // //   counter1++;
// // //   let temp = counter1;
// // //   rowArray.push(temp);

// // //   if (counter1===8) {
// // //     gridArray.push(rowArray);
// // //   }
// // // }

// // // console.table(gridArray);



// const grid = []; 
// const cells = 64; 
// let counter2 = 0; 
// let row; 
// for (let x = 0; x < cells + 1; x++) { // this is the part that creates the rows for the table
// if (counter2 % 8 == 0) { 
// if (row != undefined) {         
//             grid.push(row); 
//         } 
//         row = []; 
//     } 
//     counter2++; 
// let temp = counter2; 
//     row.push(temp); 
// } 
// console.table(grid);

// //  for of loop: This is somewhat similar to the for loops in py only a little bit different
// let names = ['ebuka','daniella','mitch','reggy','wilfred'];
// for (let name of names) { // This is the syntax for the for of loop 
//   console.log(name);
// }

// // // Practice exercise 5.6... This exercise will construct an array as it loops through the incrementing values of x. Once the array is done, 
// // // this exercise also will demonstrate several ways to output array contents.

// // //  1. Create an empty array
// // //  2. Run a loop 10 times, adding a new incrementing value to the array
// // //  3. Log the array into the console
// // //  4. Use the for loop to iterate through the array (adjust the number of iterations to however many values are in your array) and output into
// // //  the console
// // //  5. Use the for of loop to output the value into the console from the array.

// const fakeArr = [];
// for (let i = 0; i < 10; i++) {
//       fakeArr.push(i + 1);
// }
// console.log(fakeArr);

// for (let i = 0; i < fakeArr.length; i++) {
//       console.log(fakeArr[i]);
// }
// console.log(fakeArr);

// for (let fake of fakeArr) {
//     console.log(fake);
// }



// // // Loops and objects: this is also similar to the for loops in py but this is for  objects. Looping through objects can be done in two ways
// // // 1. looping through the object's props using for in loops: this requires a variable which serves as the key for the object. Unlike the for of 
// // // loop the for in loop gives back the properties of an object and the indices of an array 
// let personDetail = {
//   firstName: "Helen",
//   lastName: "Albert",
//   favColor: "Purple",
//   country: "Nigeria",
//   city: "Lagos",
// };

// for (let detail in personDetail) { // this is the syntax of using the for in loop
//   console.log(personDetail[detail]);// i know this looks like a bracket notation and should be enclosed in quotation marks but dont do it it doesn't run
// }

// //  Practice exercise 5.7
// //  1. Create a simple object with three items in it.
// //  2. Using the for in loop, get the properties' names and values from the object and output them into the console.
// //  3. Create an array containing the same three items. Using either the loop or the for in loop, output the values from the array into the
// //  console.


// const simpleObject = {
//   name:"Ebuka",
//   age: 20,
//   country:"Nigeria"
// }

// for (let object in simpleObject) {
//   message = (simpleObject[object]);
//   console.log(`${object}: ${message}`);
  
// }

// const simpleArr = ["ebuka",20,"nigeria"];
// for (let Arr in simpleArr) {
//   console.log(simpleArr[Arr]);
// }


// // 2. Looping over objects by converting to an array: This can be done in three ways 
// // 1. converting the properties of the object to an array: in general using this method requires you convert to an array which allows you use the 
// // for of loops. the in-built function "Object.keys(objectName)" allow you convert the entire existing props of an object to a key in an array.

// const simpleObject = {
//   name:"Ebuka",
//   age: 20,
//   country:"Nigeria"
// }

// for (let object of Object.keys(simpleObject)) { // This is the built in functon at work.
//   console.log(object);
// }

// //2. converting the values of the object to an array: This also requires the built in function used in the first only changing the keys to values
// // const simpleObject = {
// //   name:"Ebuka",
// //   age: 20,
// //   country:"Nigeria"
// // }

// for (let object of Object.values(simpleObject)) { // This is the built in functon at work.
//   console.log(object);
// }

// //3. converting both the keys and values of the object to an array: This is done using a different function called the Object.entries(objectName)
// const simpleObject = {
//   name:"Ebuka",
//   age: 20,
//   country:"Nigeria"
// }

// for (let object of Object.entries(simpleObject)) { // This is the built in functon at work.
//   console.log(object);
// } 

// // The previous code can also be worked with this way.
// let simpleObject = {
//   name:"Ebuka",
//   age: 20,
//   country:"Nigeria"
// }

// let object = Object.keys(simpleObject);
// for (let i = 0; i < object.length; i++) {
//   console.log(object[i] + " : " + simpleObject[object[i]]);
// }

// //Break and Continue: break and continue are two keywords that we can use to control the flow of execution of the loop.
// // Break will stop the loop and move on to the code below the loop. continue will stop the current iteration and move back to the top of 
// // the loop, checking the condition (or in the case of a for loop, performing the statement and then checking the condition).
// let cars = [ 
//   { 
//     model: "Golf", 
//     make: "Volkswagen", 
//     year: 1999, 
//     color: "black", 
//   }, 
//   { 
//     model: "Picanto", 
//     make: "Kia", 
//     year: 2020, 
//     color: "red", 
//   }, 
//   { 
//     model: "Peugeot", 
//     make: "208", 
//     year: 2021, 
//     color: "black", 
//   }, 
//   { 
//     model: "Fiat", 
//     make: "Punto", 
//     year: 2020, 
//     color: "black", 
//   } 
// ];

// ////READ THIS:
// for (let i = 0; i < cars.length; i++) { ////i beleive the function of the i this code is to serve as a temp variable for the value iterated or loop
//   console.log(cars[i].year);////i.e it assigns every value that will be looped to temp variable i and prints it and takes in the next variable and will do that according to the range give in this case four times
// }

// for (let i = 0; i < cars.length; i++) {
//   if(cars[i].year>=2021) {
//     console.log(cars[i]);
//     if (cars[i].color==='black') {
//       console.log("I've found your car: ", cars[i]);
//       break; // the break statement here stops the loop from running as soon as it finds a match even though theyre more insatnaces of the value clor
//     }
//   }
// }

// //Continue: break can be used to quit the loop, and continue can be used to move on to the next iteration of the loop. It quits the current 
// // iteration and moves back up to check the condition and start a new iteration.


// let phones = [ 
//   { 
//     model: "Spark", 
//     make: "Tecno", 
//     year: 2023, 
//     color: "black", 
//   }, 
//   { 
//     model: "smart", 
//     make: "Infinix", 
//     year: 2020, 
//     color: "blue", 
//   }, 
//   { 
//     model: "Hot", 
//     make: "Infinix", 
//     year: 2021, 
//     color: "Gold", 
//   }, 
//   { 
//     model: "Iphone", 
//     make: "Apple", 
//     year: 2020, 
//     color: "black", 
//   } 
// ];
// // // The approach here is to just skip every car that is not black and consider all
// // //  the others that are not older than make year 2020 or later. The code will
// // //  output this
// for (let i = 0; i < phones.length; i++) {
//   if (phones[i].color!=="black")  {// This is another use of the continue statement 
//     continue;
//   } 
//   if (phones[i].year<=2020) {
//     console.log("Let's buy this one:",phones[i]);
//   }
// }

// //Practice exercise 5.8: This exercise will demonstrate how to create a string with all the digits as it loops through them. We can also set 
// // a value to skip by adding a condition that will use continue , skipping the matching condition. A second option is to do the same exercise 
// // and use the break keyword.

// // 1. Set up a string variable to use as output.
// //  2. Select a number to skip, and set that number as a variable.
// //  3. Create a for loop that counts to 10.
// //  4. Add a condition to check if the value of the looped variable is equal to the number that should be skipped.
// //  5. If the number is to be skipped in the condition, continue to the next number.
// //  6. As you iterate through the values, append the new count value to the end of the main output variable.
// //  7. Output the main variable after the loop completes.
// //  8. Reuse the code, but change the continue to \break and see the difference. It should now stop at the skip value


// let stringVar = '';
// let countvar = [];
// const skipNo = 7;
// for (let i = 1; i < 11; i++){
//   if (i=== skipNo) {
//     continue;
//   }

//   countvar.push(i);
//   // console.log(countvar);
//   stringVar = countvar.toLocaleString();//this returns a string representation of an array.
// }
// console.log(stringVar);

// let stringVar = '';
// let countvar = [];
// const skipNo = 7;
// for (let i = 1; i < 11; i++){
//   if (i=== skipNo) {
//     break;
//   }

//   countvar.push(i);
//   // console.log(countvar);
//   stringVar = countvar.toLocaleString();
// }
// console.log(stringVar);

// //break, continue, and nested loops

//  let groups = [ 
//   ["Martin", "Daniel", "Keith"], 
//   ["Margot", "Marina", "Ali"], 
//   ["Helen", "Jonah", "Sambikos"], 
// ];

// // Let's break down this example. We are looking for all the groups that have
// //  two names starting with an M. If we find such a group, we will log it.

// for (let i = 0; i < groups.length; i++) { // this creates a temp variable to store each array being looped 
//   let matches = 0; // this stores the number of groups in the main array with an m within it
// for (let j = 0; j < groups[i].length; j++) { // this loops through the already looped array "i" for any item begining with the letter m
//   if(groups[i][j].startsWith("M")){ 
//       matches++; 
//     } else { 
//       continue; // this skips any member and group without the m
//     } 
//   if (matches === 2){ 
//       console.log("Found a group with two names starting with a M")
//       console.log(groups[i]); 
//       break; 
//     } 
//   } 
// }


// for (let group of groups) {
//   for (let member of group) {
//     if (member.startsWith("M")) {
//       console.log("Found one group with an M:" + member);
//     } else
//       break;
//   }
// }

// //Chapter project:  Math multiplication table; In this project, you will create a math multiplication table using loops. You can do this 
// // using your own creativity or by following some of the following suggested steps:
// //  1. Set up a blank array to contain the final multiplication table.
// //  2. Set a value variable to specify how many values you want to multiply with one another and show the results for.
// //  3. Create an outer for loop to iterate through each row and a temp array to store the row values. Each row will be an array of cells that
// //  will be nested into the final table.
// //  4. Add an inner for loop for the column values, which will push the multiplied row and column values to the temp array.
// //  5. Add the temporary row data that contains the calculated solutions to the main array of the final table. The final result will add a row of
// //  values for the calculations.

// const myTable = []; 
// const numm = 10; 
// for(let x=0; x<numm; x++){ // this runs for rows and this runs for columns
// const temp = []; 
// for(let y = 0; y<numm; y++){ 
//         temp.push(x*y); 
//     } 
//     myTable.push(temp); 
// } 
// console.table(myTable); 


