const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // empêcher l'envoi réel
  alert("Merci pour votre message !");
  form.reset();
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});