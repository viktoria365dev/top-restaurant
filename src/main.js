import "./style.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadContact from "./modules/contact.js";

const tabs = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

const content = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.onclick = () => switchTab("home");
menuBtn.onclick = () => switchTab("menu");
contactBtn.onclick = () => switchTab("contact");

switchTab("home");

function switchTab(tab) {
  [homeBtn, menuBtn, contactBtn].forEach((btn) => {
    btn.classList.toggle("active", btn.id === `${tab}-btn`);
  });

  content.replaceChildren(tabs[tab]());
}
