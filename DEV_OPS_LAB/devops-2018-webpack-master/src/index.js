import "./style.css";
import Placeholder from "./placeholder.png";
import printMe from "./print.js";

function component() {
  let element = document.createElement("div");
  element.innerHTML = "Hello webpack";
  element.classList.add("hello");

  var btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  let myIcon = new Image();
  myIcon.src = Placeholder;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
