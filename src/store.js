import "./style.css";

function loadStore() {
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

  const description1 = document.createElement("p");
  const description2 = document.createElement("p");
  const description3 = document.createElement("p");

  mainFlexGrid.classList.add("product-grid");
  mainBackgroundImage.classList.add("main-background-image");
  mainProductContainer.classList.add("product-container");
  mainProduct1.classList.add("product");
  mainProduct2.classList.add("product");
  mainProduct3.classList.add("product");

  description1.textContent = "25$";
  description2.textContent = "40$";
  description3.textContent = "1$";

  mainH2.textContent = "Products";
  mainProduct1H3.textContent = "Taco sauce";
  mainProduct1Para.textContent = "A long description to describe something";

  mainProduct2H3.textContent = "Tortilla's";
  mainProduct2Para.textContent = "a shorter description";

  mainProduct3H3.textContent = "Taco holders";
  mainProduct3Para.textContent = "something something description";

  mainDiv.appendChild(main);

  main.appendChild(mainFlexGrid);
  mainFlexGrid.appendChild(mainBackgroundImage);
  mainFlexGrid.appendChild(mainH2);
  mainFlexGrid.appendChild(mainProductContainer);

  mainProductContainer.appendChild(mainProduct1H3);
  mainProductContainer.appendChild(description1);
  mainProductContainer.appendChild(mainProduct1);
  mainProductContainer.appendChild(mainProduct1Para);

  mainProductContainer.appendChild(mainProduct2H3);
  mainProductContainer.appendChild(description2);
  mainProductContainer.appendChild(mainProduct2);
  mainProductContainer.appendChild(mainProduct2Para);

  mainProductContainer.appendChild(mainProduct3H3);
  mainProductContainer.appendChild(description3);
  mainProductContainer.appendChild(mainProduct3);
  mainProductContainer.appendChild(mainProduct3Para);
}

export default loadStore;
