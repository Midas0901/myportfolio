// Smooth scroll for # links only
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing animation
var typed = new Typed(".auto-type", {
  strings: ["SFU Student", "3D Modeler", "Animator", "Creative Visualizer"],
  typeSpeed: 90,
  backSpeed: 50,
  loop: true,
  backDelay: 1400
});