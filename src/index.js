import "./style.css";
import "./normalize.css";
import loadPage from "./home-page";
import loadContact from "./contact-page";
import loadHeader from "./header";
import loadStore from "./store";

// eslint-disable-next-line no-unused-vars
const tabControl = (() => {
  loadHeader();
  loadPage();
  const mainDiv = document.querySelector("#content");
  const menuTab = document.querySelector(".change-tab-1");
  const storeTab = document.querySelector(".change-tab-2");
  const contactTab = document.querySelector(".change-tab-3");

  function removeChildren(parent) {
    while (parent.firstChild) {
      if (parent.lastChild.id === "header") {
        return;
      }
      parent.removeChild(parent.lastChild);
    }
  }
  storeTab.addEventListener("click", () => {
    removeChildren(mainDiv);
    loadStore();
  });
  menuTab.addEventListener("click", () => {
    removeChildren(mainDiv);
    loadPage();
  });
  contactTab.addEventListener("click", () => {
    removeChildren(mainDiv);
    loadContact();
  });
})();
