let x = "hello";

//BOM

console.log(x);
console.dir(window); //The console.dir() method shows a list of all the properties of the specified object.
console.dir(window.history.length);
console.dir(history);
console.dir(window.history.go(-1));
console.dir(window.navigator);
console.dir(location.ancestorOrigins.length);
console.dir(location.protocol);
console.dir(location.href);

const secondP = document.querySelector("#heading");
console.dir(secondP);
const p_tags = document.querySelectorAll("p");
console.dir(p_tags); //

////exe_9.3
const btnElement = document.getElementById("btn1");
btnElement.textContent = "Hello Button";
btnElement.classList.add("red");
btnElement.id = "tester";
btnElement.style.backgroundColor = "red";
// btnElement.textContent = document.URL;
console.log(document.URL);

// 1. Select the page element as a JavaScript object.
// 2. Update the textContent property of the selected page element.
// 3. Using the classList . add object method, add a class of red to the
// element.
// 4. Update the id property of the element to tester .
// Through the style object, add a backgroundColor property of red
// to the page element.
// 6. Get the document URL via document.URL and update the text of the
// output element to contain the value of the document URL. You can log
// it in the console first to ensure you have the correct value.



// Chapter project
// Manipulating HTML elements with JavaScript
// Select the element with the class output .
// 2. Create another JavaScript object called mainList and select only the
// ul tag that is within the output element. Update the ID of that ul
// tag to mainList.
// 3. Search for the tagName of each div , and output them into the console
// as an array.
// 4. Using a for loop, set the ID of each of the div tags to id with a
// numeric value of the order they appear within output. Still within the
// loop, alternate the color of the contents of each element in output to
// be red or blue.

const Output = document.getElementsByClassName('output');
const mainlist = document.querySelector('ul');
mainlist.id = 'mainlist';
const divTags = document.querySelectorAll('div');
console.log(divTags);
for (let i = 0; i < divTags.length; i++) {
  divTags[i].id = "id" + (x + 1);
  console.log(divTags[i].tagName);
  
  if (i%2 === 0) {
    divTags[i].style.color = 'red'
  } if (!(i%2 === 0)) {
   divTags[i].style.color = 'blue' 
  }
}










// const mainList = {};
// delBtn.appendChild(document.createTextNode('X'));

// const output = document.querySelector(".output");
// const mainList = output.querySelector("ul");
// mainList.id = "mainList";
// console.log(mainList);
// const eles = document.querySelectorAll("div");
// for (let x = 0; x < eles.length; x++) {
//  console.log(eles[x].tagName);
//  eles[x].id = "id" + (x + 1);
//  if (x % 2) {
//  eles[x].style.color = "red";
//  } else {
//  eles[x].style.color = "blue";
//  }
// }









console.dir(document.body);

const elementBody = document.querySelector(".main-section_container");
console.log(elementBody.childNodes[7]);
console.log(elementBody.childNodes[7].childNodes[1]);

console.log(elementBody.children[3]);
console.log(elementBody.children[3].children[0].children[0]);

console.log(document.getElementsByTagName("p").item(0));
console.log(document.getElementsByTagName("p").item(1)); //
console.log(document.getElementsByTagName("p").namedItem("second_p")); //

// let ouch = ()=> {
//     alert("Ouch stop it");
// }

// const btn =  document.getElementById('btn')
// btn.addEventListener('click',ouch);
// // console.log(btn);

