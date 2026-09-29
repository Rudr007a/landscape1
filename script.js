const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navActions = document.querySelector('.nav-actions');
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && nav && navActions) {
  menuToggle.addEventListener('click', () => {
    const isOpen = !nav.classList.contains('visible');
    nav.classList.toggle('visible', isOpen);
    navActions.classList.toggle('visible', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));
