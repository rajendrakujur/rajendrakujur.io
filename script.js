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
 
   // Check if dark mode is enabled from localStorage
   if (localStorage.getItem("dark-mode") === "enabled") {
     document.body.classList.add("dark-mode");
   }
 
   toggle.addEventListener("click", () => {
     document.body.classList.toggle("dark-mode");
 
     // Store dark mode state in localStorage
     if (document.body.classList.contains("dark-mode")) {
       localStorage.setItem("dark-mode", "enabled");
     } else {
       localStorage.setItem("dark-mode", "disabled");
     }
   });
 });
