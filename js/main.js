(() => {
  'use strict';

  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  // 1. Mobile nav toggle
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // 2. Smooth scroll for anchor links
  document.querySelectorAll('.nav__link[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;

      target.scrollIntoView({ behavior: 'smooth' });

      // Close mobile nav if open
      if (nav && nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // 3. Active nav link highlighting
  const sections = ['hero', 'about', 'projects', 'skills', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const navLinks = document.querySelectorAll('.nav__link');

  const observerOptions = {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // 4. Header scroll effect (using IntersectionObserver on a sentinel)
  if (header) {
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '50px';
    sentinel.style.height = '1px';
    sentinel.style.pointerEvents = 'none';
    document.body.prepend(sentinel);

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        header.classList.toggle('header--scrolled', !entry.isIntersecting);
      });
    }, { rootMargin: '0px', threshold: 0 });

    scrollObserver.observe(sentinel);
  }

  // 5. Contact form handler
  const contactForm = document.querySelector('.contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const msg = document.createElement('div');
      msg.textContent = 'Message sent!';
      msg.style.cssText = 'position:fixed;top:1rem;right:1rem;padding:0.75rem 1rem;background:#222;color:#fff;border-radius:4px;font-size:0.875rem;z-index:9999;transition:opacity 0.3s ease;';
      document.body.appendChild(msg);

      requestAnimationFrame(() => {
        setTimeout(() => { msg.style.opacity = '0'; }, 3000);
        setTimeout(() => { msg.remove(); }, 3300);
      });

      contactForm.reset();
    });
  }
})();
