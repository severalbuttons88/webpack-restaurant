import "./style.css";
import "./normalize.css";
import "./home-page";
import "./contact-page";
import { loadContact } from "./contact-page";
import { loadHeader } from "./header";
import { loadPage } from "./home-page";

const tabControl = (() => {
  loadHeader();
  loadPage();
  let eventsLoaded = false;
  const mainDiv = document.querySelector("#content");
  const menuTab = document.querySelector(".change-tab-1");
  const storeTab = document.querySelector(".change-tab-2");
  const contactTab = document.querySelector(".change-tab-3");

  function removeChildren(parent) {
    while (parent.firstChild) {
      console.log(parent.lastChild.id);
      if (parent.lastChild.id === "header") {
        return;
      } else {
        parent.removeChild(parent.lastChild);
      }
    }
  }
menuTab.addEventListener('click', () => {
    removeChildren(mainDiv);
    loadPage();
})
contactTab.addEventListener('click', () => {
    removeChildren(mainDiv);
    loadContact();
})
})();
