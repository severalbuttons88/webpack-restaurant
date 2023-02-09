import "./style.css";

function loadHeader() {
  const mainDiv = document.querySelector("#content");
  const header = document.createElement("header");
  const headerDivWrapper = document.createElement("div");
  const headerDivTitle = document.createElement("div");
  const titleH1 = document.createElement("h1");
  const headerDivEnd = document.createElement("div");
  const headerNav = document.createElement("nav");
  const headerUl = document.createElement("ul");
  const headerList1 = document.createElement("button");
  const headerList2 = document.createElement("button");
  const headerList3 = document.createElement("button");
  headerDivWrapper.classList.add("wrapper");
  headerDivTitle.classList.add("title");
  headerDivEnd.classList.add("wrapper-end");
  headerUl.classList.add("nav");
  headerList1.classList.add("change-tab-1");
  headerList2.classList.add("change-tab-2");
  headerList3.classList.add("change-tab-3");
  header.setAttribute("id", "header");

  titleH1.textContent = "Shirley Tacos";
  headerList1.textContent = "Menu";
  headerList2.textContent = "Online Stores";
  headerList3.textContent = "Contact Us";

  mainDiv.appendChild(header);

  header.appendChild(headerDivWrapper);
  headerDivWrapper.appendChild(headerDivTitle);
  headerDivTitle.appendChild(titleH1);
  headerDivWrapper.appendChild(headerDivEnd);
  headerDivEnd.appendChild(headerNav);
  headerNav.appendChild(headerUl);
  headerUl.appendChild(headerList1);
  headerUl.appendChild(headerList2);
  headerUl.appendChild(headerList3);
}

export default loadHeader;
