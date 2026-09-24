// 1. Grab the elements from the HTML
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// 2. Toggle the menu when the ☰ button is clicked
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen); // for screen readers
});

// 3. Close the menu after a link is clicked (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", false);
  });
});

// 4. Put the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
