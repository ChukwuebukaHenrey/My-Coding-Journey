// Dynamic Element Manipulation: Using the DOM

//  ***Basic DOM traversing***
console.dir(document.body);
document.title = 'Chapter 10 js';
console.log(document.title);
// childNodes is more a complete term than children. Children just
//  contain all the HTML elements, so are really the nodes. childNodes
//  also contain text nodes and comments. With children, however, you can use
//  the ID, and therefore they are easier to use.

 let yellow = document.body.children.first.children.heading;
 console.log(yellow);
 console.log(document.body.children.first.children.forest.children.tree2.children.shrubbery.children.treasure);


let heading2 = document.body.children.first.children[1]
heading2.id = 'Heading2'
console.log(heading2);


const btns = document.querySelectorAll('button');
for (let i = 1; i < btns.length ; i++) {
    
    btns[i].id = 'Btn' + i;
}

console.log(btns);






// const header = document.getElementById('heading');
// header.classList.add('headoo')



 
