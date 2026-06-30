// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav on link click
mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// In-page nav active state on scroll
const sections = document.querySelectorAll('main .section[id]');
const navLinks = document.querySelectorAll('.inpage-nav a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0
});

sections.forEach(section => observer.observe(section));

// Image fallback — show a grey box when placeholder images are missing
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function () {
    this.style.display = 'none';
    const parent = this.parentElement;
    if (parent && !parent.querySelector('.img-fallback')) {
      const fb = document.createElement('div');
      fb.className = 'img-fallback';
      fb.style.cssText = 'width:100%;height:100%;min-height:160px;background:#d0d0c8;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:12px;font-family:sans-serif;';
      fb.textContent = 'Photo placeholder';
      parent.appendChild(fb);
    }
  });
});
