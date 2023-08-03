import image from "./image.jpg";
export default function () {
  const subCont = document.createElement("div")
  const header = document.createElement("h1");
  header.textContent = "Generic Restaurant Page";

  const myImage = new Image();
  myImage.src = image;
  myImage.classList.add("image")


  const paragraph = document.createElement("div");
  paragraph.textContent = "Welcome to our restaurant, where we pride ourselves on offering a truly average dining experience. From our unremarkable decor to our mediocre menu selections, we strive to deliver a forgettable meal that won't leave a lasting impression. Our service is neither exceptional nor disappointing, falling squarely in the realm of adequacy. Our dishes lack any standout flavors or unique twists, making them satisfyingly unremarkable. If you're looking for an average dining option with no surprises, you've come to the right place. So, come on in, sit back, and prepare to indulge in an entirely average culinary journey that will neither dazzle nor disappoint."

  subCont.appendChild(header)
  subCont.appendChild(myImage)
  subCont.appendChild(paragraph)

  return subCont
}

