import "./style.css";
import paginaUno from "./first_page.js";
import paginaDos from "./second_page.js"
import paginaTres from "./third_page";
import { frontButton, menuButton, aboutButton } from "./buttons";

function elements() {
  const content = document.createElement("div");
  content.classList.add("content")

  const container = document.createElement("div")
  container.classList.add("Container")

  const pageOne = paginaUno()
  const pageTwo = paginaDos()
  const pageThree = paginaTres()

  frontButton.addEventListener("click", () => {
    container.innerHTML = ""
    container.appendChild(pageOne)
  })

  menuButton.addEventListener("click", () => {
    container.innerHTML = ""
    container.appendChild(pageTwo)
  })

  aboutButton.addEventListener("click", () => {
    container.innerHTML = ""
    container.appendChild(pageThree)
  })

  content.appendChild(frontButton)
  content.appendChild(menuButton)
  content.appendChild(aboutButton)
  content.appendChild(container)

  return content
}

document.body.appendChild(elements())