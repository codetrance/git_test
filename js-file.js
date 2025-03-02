// Add p tag with red text
const container = document.querySelector("#container");

const contentP = document.createElement("p");
contentP.classList.add("content");
contentP.textContent = "Hey I'm red!";
contentP.style.color = "red";

container.appendChild(contentP);

// add h3 tag with blue text
// const container = document.querySelector("#container");

const contenth3 = document.createElement("h3");
contenth3.classList.add("content");
contenth3.textContent = "I'm a blue h3!";
contenth3.style.color = "blue";

container.appendChild(contenth3);

const contentDIV = document.createElement("h3");
contentDIV.classList.add("content");
contentDIV.textContent = "I'm in a div";
contentDIV.style.border = "3px solid black";

const contentP2 = document.createElement("p");
contentP2.classList.add("content");
contentP2.textContent = "ME TOO!";
contentDIV.appendChild(contentP2);
container.appendChild(contentDIV);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello New World");
btn.addEventListener("click", () => {
  alert("Hello Third World");
});
btn.addEventListener("mouseover", () => {
  button.style.backgroundColor = "lightblue";
});

function alertFunction() {
  alert("YAY! YOU DID IT BABE!");
}

// btn1.onclick = alertFunction;

btn1.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => alert(button.id));
});
console.log(buttons);

const container = document.querySelector("#button-container");
const addButton = document.querySelector("#addButton");

let buttonCount = 1; // Track the number of buttons added

// addButton.addEventListener("click", () => {
//   const newButton = document.createElement("button"); // Create a new button
//   newButton.textContent = `Button ${buttonCount}`;
//   newButton.id = `btn${buttonCount}`; // Assign a unique ID
//   buttonCount++;

//   // Add a click event listener to the new button
//   newButton.addEventListener("click", () => {
//     alert(`You clicked ${newButton.id}`);
//   });

//   container.appendChild(newButton); // Append the new button to the container
// });
