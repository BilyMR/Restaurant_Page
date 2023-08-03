import "./style.css";
import paginaUno from "./first_page.js";
import paginaDos from "./second_page.js"

function elements() {
  const content = document.createElement("div");
  /*
    const pageOne = paginaUno()
    content.appendChild(pageOne)
  */
  const pageTwo = paginaDos()
  content.appendChild(pageTwo)

  return content
}

document.body.appendChild(elements())