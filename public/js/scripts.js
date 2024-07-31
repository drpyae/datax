document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      // Implement email sending via EmailJS or another service
      alert('Your message has been sent!');
    });
  });
 