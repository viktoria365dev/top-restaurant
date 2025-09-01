export default function loadContact() {
  const container = document.createElement("div");
  container.classList.add("contact");

  container.innerHTML = `
    <h2>Contact Us</h2>
    <p>Have a question or reservation request? Drop us a line below.</p>
    <form class="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="4" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  `;

  container.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.createElement("p");
    msg.textContent = "Thanks! We'll respond shortly.";
    container.appendChild(msg);
  });

  return container;
}
