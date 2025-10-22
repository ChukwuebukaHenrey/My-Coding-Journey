// Of course 👍
// Let’s break it down very simply — like you’re 5 👦🌈

// This code makes colored boxes change color when you press a button, and then change back when you press the button again.

// 🧠 What the code remembers
let rainbowActive = false;
let oldColors = [];


// rainbowActive is like a light switch.

// false = rainbow //is OFF 🌧️

// true = rainbow //is ON 🌈

// oldColors is like a box where we keep the old colors so we can bring them back later.

// 🪄 The magic function
function toggleRainbowfy() {
  const divs = Array.from(document.querySelectorAll(".color"));


// We look for all the boxes (HTML elements) that have the class name .color.

// divs is a list of those boxes.

// 🧪 If there are no boxes
if (!divs.length) {
  console.warn("No elements with class .color found.");
  return;
}


// If there are no boxes, we just say “Hey, no boxes here!” and stop.

// 🌈 If rainbow is OFF → turn it ON
if (!rainbowActive) {
  oldColors = divs.map((d) => getComputedStyle(d).backgroundColor || "");


// First, we remember the current color of each box and keep it in oldColors.

divs.forEach((d) => {
  const color = d.dataset.color || d.id;
  if (color) {
    d.style.transition = "background-color 300ms ease";
    d.style.backgroundColor = color;
  }
});


// Then, for each box:

// We check if it has a data-color or an id (that tells us which color to use 🌈).

// We make the color change smoothly (transition).

// Then change its background to the rainbow color.

rainbowActive = true;


// Rainbow mode is ON.

// 🌥 If rainbow is ON → turn it OFF
} else {
  divs.forEach((d, i) => {
    d.style.transition = "background-color 300ms ease";
    d.style.backgroundColor = oldColors[i] || "";
  });

  rainbowActive = false;
}
};

// We go through each box again and paint it back to the old color we saved earlier.

// Rainbow mode is now OFF.

// 🖱 When the page is ready…
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("toggleBtn")
    .addEventListener("click", toggleRainbowfy);
});


// When the web page finishes loading,

// It finds the button with the ID toggleBtn,

// And makes it so that clicking the button will call the toggleRainbowfy function.

// ✅ In short:

// You press the button 🖱

// Boxes turn rainbow 🌈

// Press it again 🖱

// They go back to normal 🎨

// function changeAttr() {
//   let el = document.getElementById("square");
//   el.setAttribute("style", "background-color:red;border:1px;");
//   el.setAttribute("id", "new");
//   el.setAttribute("class", "circle");
// };
