import house from "./house.jpg"

export default function () {
  const content = document.createElement("div")
  content.classList.add("container")

  const aboutUsSegment = document.createElement("div")
  content.appendChild(aboutUsSegment)


  const title = document.createElement("h1")
  title.textContent = "About Us"
  aboutUsSegment.appendChild(title)

  const AUparrafo = document.createElement("p")
  AUparrafo.textContent = "At Delightful Bites, we're not just about food, we're about creating cherished moments and unforgettable flavors. With a passion for culinary excellence, our team of dedicated chefs carefully crafts each dish, infusing it with a blend of creativity and tradition. From the sizzle of a perfectly seared steak to the delicate balance of spices in our signature sauces, every bite tells a story of our commitment to quality. Our inviting ambiance and attentive service provide the perfect backdrop for you to savor these culinary journeys, whether it's a romantic dinner for two or a gathering of friends. Join us at Delightful Bites and embark on a gastronomic adventure that will awaken your senses and leave you craving for more."
  aboutUsSegment.appendChild(AUparrafo)

  const myHouse = new Image()
  myHouse.src = house
  myHouse.classList.add("house")
  content.appendChild(myHouse)

  const dirParrafo = document.createElement("p")
  dirParrafo.textContent = "Follow the winding path through the desolate woods, the trees whispering secrets as you go. Arrive at the foreboding wrought-iron gates of House Morbidus, where shadows seem to dance in the moonlight. Its ancient door creaks open as if beckoning, revealing a dimly lit corridor that stretches into the unknown. Ascending the stairs, the air grows heavy with a sense of foreboding. Haunting echoes guide you through labyrinthine passages, where portraits' eyes seem to follow your every move. A spectral melody drifts through the air, leading you to a chamber adorned with curiosities, where time stands still and the veil between worlds is thin. At the heart of House Morbidus, a room shrouded in darkness awaits. Velvet drapes conceal a table set for an eerie feast, where spectral guests may join. The house pulses with a malevolent energy, inviting you to delve into its mysteries. Dare you step further, where reality and the supernatural converge in a dance of eternal twilight?"
  content.appendChild(dirParrafo)
  return content
}