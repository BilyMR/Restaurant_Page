

const pageTwo = paginaDos()

export default function () {
  const content = document.createElement("div")


  const aboutButton = document.createElement("button")
  aboutButton.textContent = "About Us"
  aboutButton.addEventListener("click", () => {
    content.appendChild(pageTwo)
  })
  return [content, aboutButton]
}
