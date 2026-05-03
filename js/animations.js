(() => {
  'use strict';

  // 1. IntersectionObserver for scroll animations (.fade-in, .slide-up)
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up');

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const stagger = el.dataset.stagger;
        if (stagger) {
          el.style.transitionDelay = `${Number(stagger) * 0.1}s`;
        }
        el.classList.add('animated');
        animObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => animObserver.observe(el));

  // 2. Typewriter effect for .hero__subtitle
  const subtitle = document.querySelector('.hero__subtitle');
  if (subtitle) {
    const text = subtitle.textContent.trim();
    subtitle.textContent = '';

    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.textContent = '|';
    subtitle.appendChild(cursor);

    let started = false;

    const typeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          typeObserver.unobserve(entry.target);

          let i = 0;
          const typeInterval = setInterval(() => {
            if (i < text.length) {
              cursor.before(text.charAt(i));
              i++;
            } else {
              clearInterval(typeInterval);
            }
          }, 50);
        }
      });
    }, { threshold: 0.1 });

    typeObserver.observe(subtitle);
  }

  // 3. Skill bar animation
  const skillBars = document.querySelectorAll('.skill-bar');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = bar.dataset.percent;
        if (percent != null) {
          const fill = bar.querySelector('.skill-bar__fill') || bar;
          fill.style.transform = `scaleX(${percent / 100})`;
        }
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.1 });

  skillBars.forEach(bar => {
    const fill = bar.querySelector('.skill-bar__fill') || bar;
    fill.style.transformOrigin = 'left center';
    fill.style.transform = 'scaleX(0)';
    skillObserver.observe(bar);
  });
})();
