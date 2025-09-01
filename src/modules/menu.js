import menuData from "./menu-data.js";

export default function loadMenu() {
  const container = document.createElement("div");
  container.className = "menu-container";

  let html = "";

  menuData.forEach((section) => {
    html += `<h2>${section.category}</h2>`;
    html += `<div class="menu-grid">`;

    section.items.forEach((dish) => {
      html += `
        <div class="menu-item">
          <img
            src="${dish.image}"
            alt="${dish.name}"
            class="menu-img"
            loading="lazy"
            onerror="this.src='images/default.jpg';"
          />
          <h3>${dish.name}</h3>
          <p class="desc">${dish.description}</p>
          <p class="price">$${dish.price.toFixed(2)}</p>
        </div>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;

  return container;
}
