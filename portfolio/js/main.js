/* ============================
   PORTFOLIO — main.js
   All vanilla JS features:
   - Sticky nav on scroll
   - Mobile menu toggle
   - Scroll reveal animations
   - Animated counters
   - Animated skill bars
   - Project filter
   - Contact form validation
   - Dynamic year in footer
   ============================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Dynamic year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ---------- Sticky nav ---------- */
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });


  /* ---------- Mobile menu toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav__links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });


  /* ---------- Scroll reveal ---------- */
  // Add .reveal to elements we want to animate
  const revealTargets = document.querySelectorAll(
    '.hero__content, .about__text, .about__stats, .project-card, .skill-group, .contact__info, .contact__form, .stat-card'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => revealObserver.observe(el));


  /* ---------- Animated counters ---------- */
  const statNums = document.querySelectorAll('.stat-card__num');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(num => counterObserver.observe(num));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 16);
  }


  /* ---------- Animated skill bars ---------- */
  const skillFills = document.querySelectorAll('.skill-bar__fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.getAttribute('data-width');
        fill.style.width = width + '%';
        skillObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(fill => skillObserver.observe(fill));


  /* ---------- Project filter ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  /* ---------- Contact form validation ---------- */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      let valid = true;

      // Clear previous errors
      clearError(name, 'nameError');
      clearError(email, 'emailError');
      clearError(message, 'messageError');

      // Validate name
      if (!name.value.trim()) {
        showError(name, 'nameError', 'Please enter your name.');
        valid = false;
      }

      // Validate email
      if (!email.value.trim()) {
        showError(email, 'emailError', 'Please enter your email address.');
        valid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, 'emailError', 'Please enter a valid email address.');
        valid = false;
      }

      // Validate message
      if (!message.value.trim()) {
        showError(message, 'messageError', 'Please enter your message.');
        valid = false;
      } else if (message.value.trim().length < 10) {
        showError(message, 'messageError', 'Your message is too short (min 10 characters).');
        valid = false;
      }

      if (valid) {
        // Simulate form submission (no backend)
        const submitBtn = form.querySelector('[type="submit"]');
        submitBtn.textContent = 'Sending…';
        submitBtn.disabled = true;

        setTimeout(() => {
          form.reset();
          formSuccess.style.display = 'block';
          submitBtn.textContent = 'Send message';
          submitBtn.disabled = false;

          setTimeout(() => {
            formSuccess.style.display = 'none';
          }, 5000);
        }, 1200);
      }
    });
  }

  function showError(input, errorId, message) {
    input.classList.add('error');
    document.getElementById(errorId).textContent = message;
  }

  function clearError(input, errorId) {
    input.classList.remove('error');
    document.getElementById(errorId).textContent = '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__links a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(a => {
      a.style.color = '';
      if (a.getAttribute('href') === '#' + current) {
        a.style.color = 'var(--clr-dark)';
      }
    });
  });

});
