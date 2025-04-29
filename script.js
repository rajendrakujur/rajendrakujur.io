// Typed.js effect
document.addEventListener("DOMContentLoaded", () => {
  new Typed(".typing", {
    strings: ["Web Developer", "UI/UX Designer", "Open Source Contributor"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });

  // Dark mode toggle
  const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
