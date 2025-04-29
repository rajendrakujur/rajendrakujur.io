// Optional: Add interactivity or animations here
document.querySelectorAll('.module').forEach(module => {
  module.addEventListener('mouseenter', () => {
    module.style.transform = 'translateY(-10px)';
  });
  module.addEventListener('mouseleave', () => {
    module.style.transform = 'translateY(0)';
  });
});
