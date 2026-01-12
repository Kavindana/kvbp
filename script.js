// Toggle mobile navigation menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // shows/hides nav on small screens
  menuBtn.classList.toggle('open');    // animate menu icon (if styled)
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({
      behavior: 'smooth'
    });
    // Close mobile menu after clicking (optional)
    navLinks.classList.remove('active');
    menuBtn.classList.remove('open');
  });
});

// Scroll-triggered animations: add 'show' class when in view
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show'); // triggers CSS animation
    }
  });
});
