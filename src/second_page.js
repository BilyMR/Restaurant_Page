import pollo from "./pollo.jpg"
import albondiga from "./albondiga.jpg"
import plato from "./plato.jpg"
import sandwich from "./sandwich.jpg"

export default function () {
  const content = document.createElement("div")
  content.classList.add("container")

  const myPollo = new Image();
  myPollo.src = pollo;
  myPollo.classList.add("plates")
  content.appendChild(myPollo)

  let parra1 = document.createElement("div")
  parra1.textContent = "Step into our unpretentious eatery where the décor embraces the ordinary. The walls donned in neutral tones and generic artwork provide a subtle backdrop, ensuring your focus remains solely on the meal ahead."
  content.appendChild(parra1)

  const myAlbondiga = new Image();
  myAlbondiga.src = albondiga;
  myAlbondiga.classList.add("plates")
  content.appendChild(myAlbondiga)

  let parra2 = document.createElement("div")
  parra2.textContent = "Our menu, while not groundbreaking, boasts a collection of classic dishes prepared with familiarity in mind. From staple pasta dishes to timeless burgers, we aim to comfort your palate rather than challenge it."
  content.appendChild(parra2)

  const myPlato = new Image();
  myPlato.src = plato;
  myPlato.classList.add("plates")
  content.appendChild(myPlato)

  let parra3 = document.createElement("div")
  parra3.textContent = "Our service strikes a balance between attentive and unobtrusive. Expect a timely arrival of courses, and staff ready to address your needs without overwhelming your dining experience."
  content.appendChild(parra3)

  const mySandwich = new Image();
  mySandwich.src = sandwich;
  mySandwich.classList.add("plates")
  content.appendChild(mySandwich)

  let parra4 = document.createElement("div")
  parra4.textContent = "At the heart of our restaurant lies a commitment to delivering well-executed, albeit standard, fare. While not pioneering any gastronomic revolutions, our dishes promise a dependable and satisfying culinary encounter."
  content.appendChild(parra4)

  return content
}

