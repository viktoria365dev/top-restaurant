import "./style.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadContact from "./modules/contact.js";

const app = document.getElementById("app");

app.innerHTML = `
  <header>
    <h1>Italiano Bello</h1>
    <nav>
      <button id="home-btn" class="active">Home</button>
      <button id="menu-btn">Menu</button>
      <button id="contact-btn">Contact</button>
    </nav>
  </header>
  <main id="content"></main>
  <footer>© 2025 Italiano Bello Restaurant</footer>
`;

const tabs = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

document.getElementById("home-btn").onclick = () => switchTab("home");
document.getElementById("menu-btn").onclick = () => switchTab("menu");
document.getElementById("contact-btn").onclick = () => switchTab("contact");

switchTab("home");

function switchTab(tab) {
  document.querySelectorAll("nav button").forEach((btn) => {
    btn.classList.toggle("active", btn.id === `${tab}-btn`);
  });

  const content = document.getElementById("content");
  const loader = tabs[tab];
  content.replaceChildren(loader());
}
