import "./style.css";
import paginaUno from "./first_page.js";
import paginaDos from "./second_page.js"
import paginaTres from "./third_page";
import { frontButton, menuButton, aboutButton } from "./buttons";

function elements() {
  const content = document.createElement("div");
  content.classList.add("content")

  const pageOne = paginaUno()
  const pageTwo = paginaDos()
  const pageThree = paginaTres()

  frontButton.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(pageOne)
  })

  menuButton.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(pageTwo)
  })

  aboutButton.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(pageThree)
  })

  content.appendChild(frontButton)
  content.appendChild(menuButton)
  content.appendChild(aboutButton)

  return content
}

document.body.appendChild(elements())