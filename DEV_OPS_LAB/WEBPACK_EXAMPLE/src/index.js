import "./style.css"

function component() {
  let element = document.createElement("div");
  element.innerHTML = "Hello webpack 23";
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());
