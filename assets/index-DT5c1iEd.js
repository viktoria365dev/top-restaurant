(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();function u(){const e=document.createElement("div");return e.classList.add("home"),e.innerHTML=`
    <section class="hero">
      <img src="/top-restaurant/assets/images/hero.jpg" alt="Restaurant photo" />
      <div class="hero-text">
        <h2>Welcome to the Italiano Bello Restaurant</h2>
        <p>Where every bite feels like home.</p>
      </div>
    </section>
  `,e}const d=[{category:"Starters",items:[{name:"Bruschetta",description:"Grilled bread with tomato, garlic & basil",price:6.5,image:"/top-restaurant/assets/images/bruschetta.jpg"},{name:"Calamari",description:"Lightly fried squid rings with aioli",price:8,image:"/top-restaurant//assets/images/calamari.jpg"}]},{category:"Mains",items:[{name:"Margherita Pizza",description:"Tomato, mozzarella, fresh basil",price:12,image:"/top-restaurant//assets/images/margherita.jpg"},{name:"Spaghetti Carbonara",description:"Guanciale, egg yolk, pecorino Romano",price:14.5,image:"/top-restaurant//assets/images/carbonara.jpg"}]},{category:"Desserts",items:[{name:"Tiramisu",description:"Espresso-soaked ladyfingers & mascarpone",price:7,image:"/top-restaurant//assets/images/tiramisu.jpg"},{name:"Gelato",description:"Choose from vanilla, chocolate, or strawberry",price:5.5,image:"/top-restaurant//assets/images/gelato.jpg"}]}];function p(){const e=document.createElement("div");e.className="menu-container";let r="";return d.forEach(n=>{r+=`<h2>${n.category}</h2>`,r+='<div class="menu-grid">',n.items.forEach(o=>{r+=`
        <div class="menu-item">
          <img
            src="${o.image}"
            alt="${o.name}"
            class="menu-img"
            loading="lazy"
            onerror="this.src='images/default.jpg';"
          />
          <h3>${o.name}</h3>
          <p class="desc">${o.description}</p>
          <p class="price">$${o.price.toFixed(2)}</p>
        </div>
      `}),r+="</div>"}),e.innerHTML=r,e}function g(){const e=document.createElement("div");return e.classList.add("contact"),e.innerHTML=`
    <h2>Contact Us</h2>
    <p>Have a question or reservation request? Drop us a line below.</p>
    <form class="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="4" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  `,e.querySelector(".contact-form").addEventListener("submit",r=>{r.preventDefault();const n=document.createElement("p");n.textContent="Thanks! We'll respond shortly.",e.appendChild(n)}),e}const h={home:u,menu:p,contact:g},f=document.getElementById("content"),c=document.getElementById("home-btn"),l=document.getElementById("menu-btn"),m=document.getElementById("contact-btn");c.onclick=()=>s("home");l.onclick=()=>s("menu");m.onclick=()=>s("contact");s("home");function s(e){[c,l,m].forEach(r=>{r.classList.toggle("active",r.id===`${e}-btn`)}),f.replaceChildren(h[e]())}
