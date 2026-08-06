// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('#nav-links a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// Scroll-reveal animation
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form: show inline confirmation instead of navigating away
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    note.textContent = 'Sending…';
    fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then((res) => {
        if (res.ok) {
          note.textContent = "Message sent — thanks, I'll get back to you soon.";
          form.reset();
        } else {
          throw new Error('Request failed');
        }
      })
      .catch(() => {
        note.textContent = 'Something went wrong — email me directly at karra.hrishikesh@gmail.com';
      });
  });
}
