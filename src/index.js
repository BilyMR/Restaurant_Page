import "./style.css";
import paginaUno from "./first_page.js";
import paginaDos from "./second_page.js"
import paginaTres from "./third_page"

function elements() {
  const content = document.createElement("div");

  /*const pageOne = paginaUno()
  content.appendChild(pageOne)
  */
  /*
   const pageTwo = paginaDos()
   content.appendChild(pageTwo)
   */
  const pageThree = paginaTres()
  content.appendChild(pageThree)
  return content
}

document.body.appendChild(elements())