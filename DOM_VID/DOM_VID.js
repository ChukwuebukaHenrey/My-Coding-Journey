// // // // // // console.dir(document)
// // // // // // console.log(document.domain);
// // // // // // console.log(document.title);
// // // // // // console.log(document.URL);
// // // // // document.title = "Ebuka's Item Lister";
// // // // // // console.log(document.doctype);
// // // // // // console.log(document.head);
// // // // // // console.log(document.body);
// // // // console.log(document.all);
// // // // console.log(document.all[1]);
// // // // // // console.log(document.forms);
// // // // // // console.log(document.links);// html collection isnt an array

// // // // // //Get elementById //
// // // // console.log(document.getElementById('btn'));
// // // // let button = document.getElementById('btn');
// // // // console.log(button);
// // // // // // button.textContent = "Gimme the Money";
// // // // // // button.innerText = "Hello";
// // // // // console.log(button.textContent); // this doesn't
// // // // // console.log(button.innerText);// this respects css styling

// // // // let addText =document.getElementById('addText');
// // // // addText.style.color = 'white'
// // // // // // addText.innerHTML = '<h3>Dont lose Hope</h3>';

// // // //Get ElementsByClassName //
// // // // var itemList = document.getElementsByClassName("li_class");
// // // // console.log(itemList);
// // // // console.log(itemList[1]);
// // // // itemList[1].style.fontWeight = 'bold';
// // // // itemList[1].textContent = 'Victorious';

// // // // //This allows us to change the content of an entire class at once
// // // // for (let i = 0; i < itemList.length; i++) {
// // // //     itemList[i].style.backgroundColor = 'red';
// // // // };

// // // //Get ElementsByTagName //
// // // var li = document.getElementsByTagName("li");
// // // console.log(li);
// // // console.log(li[1]);
// // // li[1].textContent = 'Victorious';
// // // li[1].style.fontWeight = 'bold';

// // // // //This allows us to change the content of an entire class at once
// // // // for (let i = 0; i < li.length; i++) {
// // // //     li[i].style.backgroundColor = 'red';
// // // // };

// // //  //QUERYSELECTOR: IT'S ONLY USED TO SELECT ONE ITEM REGARDLESS OF THE NUMBER OF ITEMS AVAILABLE.
// // // // let header = document.querySelector("#topBanner");
// // // // header.style.backgroundColor = 'blue';

// // // // let input = document.querySelector('input');
// // // // input.value = 'God be With You'// there are two input types the submit for the button and this one. But this one comes first in the code block so it's picked.

// // // let item = document.querySelector('.li_class');
// // // item.style.color = 'blue';

// // // let lastItem = document.querySelector('.li_class:last-child');
// // // lastItem.style.color = "red";

// let thirdItem = document.querySelector('.li_class:nth-child(2)')///////the indexing starts at 1
// thirdItem.style.color = "orange";

// // // //QUERYSELECTORALL
// // // title = document.getElementsByClassName('title')
// // // // console.log(title);
// // // // title[1].textContent = "Hello"
// // // // title[0].textContent = "What Up My Gee";

// // // let odd = document.querySelectorAll('.li_class:nth-child(odd)');

// // // for (let i = 0; i < odd.length; i++) {
// // //     odd[i].style.backgroundColor = 'rgba(203, 206, 203, 0.849)'
// // // };

// // // let even = document.querySelectorAll('.li_class:nth-child(even)');

// // // for (let i = 0; i < even.length; i++) {
// // //     even[i].style.backgroundColor = 'whitesmoke'
// // // };

// // // //TRAVERSING THE DOM
// let listItem = document.querySelector(".li_class");
// // // parentNode
// // // console.log(listItem.parentNode);//we're trying to target the parent of the li_class "hobbies"
// // // listItem.parentNode.style.backgroundColor = 'blue'
// // // console.log(listItem.parentNode.parentNode);// through this chaining method we can find the parent of any element till the first element
// // // console.log(listItem.parentNode.parentNode.parentNode);

// // //parentElement; Similar to parentNode
// // // console.log(listItem.parentElement);//we're trying to target the parent of the li_class "hobbies"
// // // listItem.parentElement.style.backgroundColor = 'blue'
// // // console.log(listItem.parentElement.parentElement);// through this chaining method we can find the parent of any element till the first element
// // // console.log(listItem.parentElement.parentElement.parentElement);

// // //childNodes;
// hobbies = document.querySelector(".hobbies");
// // // console.log(hobbies.childNodes);// this adds whitespace, therefore giving you a false value of th total amount of children or elements within your desired array or list
// // // // there're four elements within hobbies but this guy says there are 9 elements. if the whitespaces are deleted the number becomes for

// // // console.log(hobbies.children);// this guy is much preferred it gives only the real elements not white space or line breaks
// // // console.log(hobbies.children[1]);
// // // hobbies.children[1].style.backgroundColor = 'yellow';

// // // //firstChild: similar to the childNode in the sense that it adds whitespaces as well as line breaks
// // // console.log(hobbies.firstChild);

// // firstElementChild
// console.log(hobbies.firstElementChild);
// hobbies.firstElementChild.textContent = 'yo';

// // // // lastChild
// // // console.log(hobbies.lastChild);
// // // // hobbies.lastChild.textContent = 'winner Man';//// it gives the whitespace at the end of the four list item the content winner man
// // // // hobbies.lastChild.style.color = 'blue';

// // // // lastElementChild
// // // console.log(hobbies.lastElementChild);
// // // hobbies.lastElementChild.textContent = 'hello four';// this doeesn't count whitespaces
// // // hobbies.lastElementChild.style.color = 'blue';

// // // //nextSibling: this gives us the whitespace or line break
// // // console.log(hobbies.nextSibling);

// // // //nextElementSibling: this gives us the span element after the ul class hobbies.
// // // console.log(hobbies.nextElementSibling);

// // // //previouSibling whitespace
// // // console.log(hobbies.previousSibling);

// // // //previouElementSibling no whitespace
// // // console.log(hobbies.previousElementSibling);





// // //createElement

// let newDiv = document.createElement('div');////This lets us create a new element within javascript that can be added to the dom

// newDiv.className = 'newDi';

// newDiv.id = 'newDiv1';

// newDiv.setAttribute('title','Hello new Div');//// this sets the attribute it give our new div a title of hello new div

// let newDivText = document.createTextNode('Hello MotherF*cker')

// newDiv.appendChild(newDivText)

// let topBanner1 = document.querySelector('header #topBanner');

// let h1 = document.querySelector('header #title1');

// newDiv.style.fontSize = '30px'

// console.log(newDiv);
// topBanner1.insertBefore(newDiv, title1);// this requires two parameters with the first is what we want to insert the next is what we're inserting before






// //// Events in interactive js and dom;
// // let button = document.getElementById('button').addEventListener
// // ('click', buttonClick)

// // function buttonClick(e) {// an event parameter can be to an eventlistner with a function added to it.
// // // console.log("Button Clicked")
// // document.getElementById('title1').textContent = 'i just got changed';
// // document.querySelector('#topBanner').style.backgroundColor = 'yellow';
// // console.log(e);////
// // console.log(e.target);////the ".target" gives us the content relating to the element it's fired from.
// // console.log(e.target.id);
// // console.log(e.target.className);
// // console.log(e.target.classList);//// it gives an array of the classes.

// let output = document.getElementById('output')
// // output.innerHTML = '<h3>'+e.target.id+'<h3>'//// this logs in the element id specified
// // console.log(e.type);//// this logs in the event type

// // console.log(e.clientX); //// position from left to right from the browser window were in
// // console.log(e.clientY); //// position from top to bottom from the browser window were in

// // console.log(e.offsetX); //// this give us the position from the element itself
// // console.log(e.offsetY);//// this give us the position from the element itself

// // console.log(e.altKey);////this checks if the alt key, ctrl key or shift key is being held whie clicking
// // console.log(e.ctrlKey);
// // console.log(e.shiftKey);
// // };

// let button = document.getElementById("button");
// // button.addEventListener('click', runEvent);////the addeventlistener requires two parameters an action and a function
// // button.addEventListener('dblclick', runEvent);
// // button.addEventListener('mousedown', runEvent);
// // button.addEventListener('mouseup', runEvent);

// let box = document.getElementById("tempDiv");
// // box.addEventListener("mouseenter", runEvent);////this fires when your mouse enters inside the parent element(in this case the div) or not
// // box.addEventListener("mouseleave", runEvent);////this fires when your mouse leaves parent element(tempDiv) or not

// //box.addEventListener("mouseover", runEvent);////this fires when your mouse enters the parent element as well as the children elements 
// // box.addEventListener("mouseout", runEvent);////this fires when your mouse leaves the parent element as well as the children elements 

// // box.addEventListener("mousemove", runEvent);////this fires when the mouse moves within the element
// // output.addEventListener("mousemove", runEvent);////this fires when the mouse moves within the element

// let itemInput = document.querySelector('input[type="text"]');
// let inputContent = document.querySelector('#inputContent');

// // itemInput.addEventListener('keydown', runEvent);
// // itemInput.addEventListener('keyup', runEvent);
// // itemInput.addEventListener('keypress', runEvent);

// // itemInput.addEventListener('focus', runEvent);
// // itemInput.addEventListener('blur', runEvent);

// // itemInput.addEventListener('cut', runEvent);
// // itemInput.addEventListener('paste', runEvent);

// // itemInput.addEventListener('input', runEvent);

// let select = document.querySelector('select');
// // select.addEventListener('change', runEvent)



// function runEvent(e) {
//     e.preventDefault();
// // box.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3> MouseY: '+e.offsetY+' </h3>';
// // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

// console.log("Event Type: " + e.type);
// // console.log(e.target.value);


// //  output.innerHTML = "<h3>" + e.target.value + "</h3>";
// //  console.log(e.target.value)

// };






// Dom Project
let formHolder = document.getElementById('addForm');
let Ul_Class = document.getElementById('Hobbies');
let filter = document.getElementById('searchFilter');

//Form Submit Event
formHolder.addEventListener('submit',addItem);

// Delete Item Event
Ul_Class.addEventListener('click',deleteItem);

// Filter Item Event
filter.addEventListener('keydown',filterItems);



//Add Item Function
function addItem(e) {
    e.preventDefault();//this akes sure you submit button doesnt sumbit to the browser window but to your console
    // console.log(1);/////this logs 1 when the submit button is hit

    let input = document.getElementById('ipt').value;

    let listObject = document.createElement('li');

    listObject.className = 'li_class';

    listObject.appendChild(document.createTextNode(input));

    let delBtn = document.createElement('button');
    
    delBtn.id = 'deleteButton';
    delBtn.className = 'delete';

    delBtn.appendChild(document.createTextNode('X'));

    listObject.appendChild(delBtn)

    Ul_Class.appendChild(listObject);

};

//Delete Item Function
function deleteItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure about this')) {
            let deletedItem = e.target.parentElement;
            Ul_Class.removeChild(deletedItem);
        }
    }
}

//Filter Items
function filterItems(e) {
let filterText = e.target.value.toLowerCase();
    console.log(filterText);


    let items = Ul_Class.getElementsByTagName('li');

    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(filterText) != -1) {
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })


}

