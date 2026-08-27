
// Ensure DOM ready
document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll for navbar links (works even if Bootstrap's collapse is used)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // collapse navbar on mobile after click
      const bsCollapse = document.querySelector('.navbar-collapse');
      if (bsCollapse && bsCollapse.classList.contains('show')) {
        new bootstrap.Collapse(bsCollapse).hide();
      }
    });
  });

  // Simple contact form handling (front-end only)
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      formAlert.textContent = 'Please fill in all fields.';
      return;
    }
    // Fake send (you can replace with fetch to backend)
    formAlert.textContent = 'Message sent — thank you! (demo only)';
    contactForm.reset();
    setTimeout(() => { formAlert.textContent = ''; }, 4000);
  });

  // Highlight active nav item on scroll
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  function onScroll() {
    const scrollPos = window.scrollY + 80; // offset for fixed navbar
    sections.forEach(sec => {
      if (!sec.id) return;
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const link = document.querySelector('.nav-link[href="#' + sec.id + '"]');
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(n => n.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
