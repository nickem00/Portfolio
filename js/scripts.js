// ====== HAMBURGER MENY-TOGGLE ======
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// ====== INTERSECTION OBSERVER ======
// Fade in när elementen kommer in i viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.25,
  rootMargin: '0px 0px -50px 0px',
});

document.querySelectorAll('[data-animate]').forEach((el) => {
  // Startläge i CSS via .about-section, .skills-section etc. 
  // (se styles.css) bör vara opacity: 0, transform: translateY(30px).
  observer.observe(el);
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Bara om länken finns på samma sida
    if (document.querySelector(this.getAttribute('href'))) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ====== CONTACT FORM ======
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      console.log('Form submitted:', { name, email, message });
      alert('Tack för ditt meddelande! Jag återkommer så snart jag kan.');
      contactForm.reset();
    } else {
      alert('Vänligen fyll i alla fält.');
    }
  });
}

// ====== STÄNG MENY VID KLICK UTANFÖR ======
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-content') && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// ====== ANIMATIONER VID SIDLADDNING (Hero) ======
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');

  setTimeout(() => {
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
  }, 300);

  setTimeout(() => {
    heroSubtitle.style.opacity = '1';
    heroSubtitle.style.transform = 'translateY(0)';
  }, 600);
});
