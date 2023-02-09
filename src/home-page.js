import "./style.css";
import "./normalize.css";

function loadPage() {
  const mainDiv = document.querySelector("#content");

  const main = document.createElement("main");
  const mainFlexGrid = document.createElement("div");
  const mainBackgroundImage = document.createElement("img");
  const mainH2 = document.createElement("h2");
  const mainProductContainer = document.createElement("div");
  const mainProduct1 = document.createElement("div");
  const mainProduct1H3 = document.createElement("h3");
  const mainProduct1Para = document.createElement("p");
  const mainProduct2 = document.createElement("div");
  const mainProduct2H3 = document.createElement("h3");
  const mainProduct2Para = document.createElement("p");
  const mainProduct3 = document.createElement("div");
  const mainProduct3H3 = document.createElement("h3");
  const mainProduct3Para = document.createElement("p");

  mainFlexGrid.classList.add("product-grid");
  mainBackgroundImage.classList.add("main-background-image");
  mainProductContainer.classList.add("product-container");
  mainProduct1.classList.add("product");
  mainProduct2.classList.add("product");
  mainProduct3.classList.add("product");

  mainBackgroundImage.setAttribute("src", "./tacos.jpg");
  mainBackgroundImage.setAttribute("alt", "City Background");

  mainH2.textContent = "Our Products";
  mainProduct1H3.textContent = "Fish Tacos";
  mainProduct1Para.textContent = "Tacos with fish, what did you expect?";

  mainProduct2H3.textContent = "Pork Tacos";
  mainProduct2Para.textContent = "Pulled pork on tacos with sauce";

  mainProduct3H3.textContent = "Brisket Tacos";
  mainProduct3Para.textContent = "Brisket on tortilla, thats pretty much it...";

  mainDiv.appendChild(main);

  main.appendChild(mainFlexGrid);
  mainFlexGrid.appendChild(mainBackgroundImage);
  mainFlexGrid.appendChild(mainH2);
  mainFlexGrid.appendChild(mainProductContainer);

  mainProductContainer.appendChild(mainProduct1H3);
  mainProductContainer.appendChild(mainProduct1);
  mainProductContainer.appendChild(mainProduct1Para);

  mainProductContainer.appendChild(mainProduct2H3);
  mainProductContainer.appendChild(mainProduct2);
  mainProductContainer.appendChild(mainProduct2Para);

  mainProductContainer.appendChild(mainProduct3H3);
  mainProductContainer.appendChild(mainProduct3);
  mainProductContainer.appendChild(mainProduct3Para);
}

export default loadPage;
