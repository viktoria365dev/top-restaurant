function loadHome() {
  const container = document.createElement("div");
  container.classList.add("home");

  container.innerHTML = `
    <section class="hero">
      <img src="${
        import.meta.env.BASE_URL
      }assets/images/hero.jpg" alt="Restaurant photo" />
      <div class="hero-text">
        <h2>Welcome to the Italiano Bello Restaurant</h2>
        <p>Where every bite feels like home.</p>
      </div>
    </section>
  `;
  return container;
}

export default loadHome;
