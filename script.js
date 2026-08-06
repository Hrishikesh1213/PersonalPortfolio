// ============================================================
// Renders the page from SITE_DATA (see data.js). Edit data.js
// to change content — this file only builds/wires the DOM.
// ============================================================
const D = SITE_DATA;

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// --- Nav / brand ---
document.getElementById('brand-avatar').src = D.profile.avatar;
document.getElementById('brand-avatar').alt = D.profile.name;
document.getElementById('brand-name').textContent = D.profile.name;
document.getElementById('brand-role').textContent = D.profile.roleShort;
document.getElementById('nav-resume').href = D.profile.resumeViewUrl;

const navLinksEl = document.getElementById('nav-links');
D.nav.forEach(item => navLinksEl.appendChild(el(`<a href="${item.href}">${item.label}</a>`)));

// --- Hero ---
document.getElementById('hero-eyebrow').textContent = D.hero.eyebrow;
document.getElementById('hero-title').innerHTML =
  D.hero.titleLines.map(l => `${l}<br />`).join('') + `<span class="outline">${D.hero.titleOutline}</span>`;
document.getElementById('hero-sub').innerHTML = D.hero.subtitle;
document.getElementById('hero-scroll-hint').textContent = D.hero.scrollHint;

const heroCta = document.getElementById('hero-cta');
heroCta.appendChild(el(`<a href="${D.hero.ctaPrimary.href}" class="btn btn-solid">${D.hero.ctaPrimary.label}</a>`));
heroCta.appendChild(el(`<a href="${D.hero.ctaSecondary.href}" class="btn btn-ghost">${D.hero.ctaSecondary.label}</a>`));

const marqueeTrack = document.getElementById('marquee-track');
D.hero.marquee.concat(D.hero.marquee).forEach(word => {
  marqueeTrack.appendChild(el(`<span>${word}</span>`));
  marqueeTrack.appendChild(el(`<span class="dot">&#10022;</span>`));
});

// --- About ---
document.getElementById('about-label').textContent = D.about.sectionLabel;
document.getElementById('about-bio').innerHTML = D.about.bioParagraphs.map(p => `<p>${p}</p>`).join('');
document.getElementById('about-photo').src = D.profile.aboutPhoto;
document.getElementById('about-photo').alt = D.profile.name;

const aboutDetails = document.getElementById('about-details');
D.about.details.forEach(d => {
  const value = d.href ? `<a href="${d.href}">${d.value}</a>` : d.value;
  aboutDetails.appendChild(el(`<div class="detail-row"><span class="detail-label">${d.label}</span><span class="detail-value">${value}</span></div>`));
});

// --- Toolkit ---
document.getElementById('toolkit-label').textContent = D.toolkit.sectionLabel;
document.getElementById('toolkit-heading').innerHTML = D.toolkit.heading.join('<br />');
document.getElementById('toolkit-desc').textContent = D.toolkit.description;

const toolkitGrid = document.getElementById('toolkit-grid');
D.toolkit.categories.forEach((cat, i) => {
  const pills = cat.skills.map(s => `<span>${s}</span>`).join('');
  toolkitGrid.appendChild(el(`
    <div class="toolkit-card">
      <p class="toolkit-num">${String(i + 1).padStart(2, '0')}</p>
      <h4>${cat.title}</h4>
      <div class="pills">${pills}</div>
    </div>
  `));
});

// --- Selected work ---
document.getElementById('work-label').textContent = D.work.sectionLabel;
document.getElementById('work-heading').innerHTML = D.work.heading.join('<br />');

const projectsEl = document.getElementById('projects');
D.work.projects.forEach(p => {
  const visual = `<div class="project-visual"><div class="viz ${p.viz}"></div><span class="viz-tag">${p.tagId}</span></div>`;
  const stats = p.stats.map(s => `<div><span>${s.value}</span><small>${s.label}</small></div>`).join('');
  const pills = p.pills.map(s => `<span>${s}</span>`).join('');
  const body = `
    <div class="project-body">
      <p class="project-meta">${p.year} <span class="rule"></span> ${p.tag}</p>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-stats">${stats}</div>
      <div class="pills">${pills}</div>
    </div>`;
  const article = el(`<article class="project reveal${p.reverse ? ' reverse' : ''}"></article>`);
  article.innerHTML = p.reverse ? body + visual : visual + body;
  projectsEl.appendChild(article);
});

// --- Trajectory ---
document.getElementById('trajectory-label').textContent = D.trajectory.sectionLabel;
document.getElementById('trajectory-heading').innerHTML = D.trajectory.heading.join('<br />');

const timelineEl = document.getElementById('timeline');
D.trajectory.items.forEach(item => {
  const bullets = item.bullets.map(b => `<p>&rarr; ${b}</p>`).join('');
  timelineEl.appendChild(el(`
    <div class="timeline-item reveal">
      <div class="timeline-marker">
        <span class="timeline-date">${item.date}</span>
        <span class="timeline-org">${item.org}</span>
        <span class="tag-pill">${item.badge}</span>
      </div>
      <div class="timeline-content">
        <h3>${item.role}</h3>
        ${bullets}
      </div>
    </div>
  `));
});

// --- Achievements ---
document.getElementById('achievements-label').innerHTML = D.achievements.sectionLabel;
document.getElementById('achievements-heading').innerHTML = D.achievements.heading.join('<br />');

const writingList = document.getElementById('writing-list');
D.achievements.items.forEach(item => {
  writingList.appendChild(el(`
    <div class="writing-item reveal">
      <span class="writing-tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `));
});

// --- Contact ---
document.getElementById('contact-label').textContent = D.contact.sectionLabel;
document.getElementById('contact-title').innerHTML = D.contact.title.join('<br />');
document.getElementById('contact-desc').innerHTML = D.contact.description;

const contactLinks = document.getElementById('contact-links');
contactLinks.appendChild(el(`<a href="mailto:${D.profile.email}">${D.profile.email}</a>`));
contactLinks.appendChild(el(`<a href="${D.profile.linkedin}" target="_blank" rel="noopener">LINKEDIN</a>`));
contactLinks.appendChild(el(`<a href="${D.profile.resumeViewUrl}" target="_blank" rel="noopener">VIEW RESUME &#8599;</a>`));
contactLinks.appendChild(el(`<a href="${D.profile.resumeDownloadUrl}">DOWNLOAD RESUME &#8595;</a>`));

const contactForm = document.getElementById('contact-form');
contactForm.action = D.contact.formAction;

// --- Footer ---
document.getElementById('footer-name').textContent = D.profile.name;
document.getElementById('footer-tagline').textContent = D.footer.tagline;

// ============================================================
// Interactive behavior (unchanged by data edits)
// ============================================================

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

// Scroll-spy nav highlight
const navLinks = document.querySelectorAll('#nav-links a');
const spySections = document.querySelectorAll('section[id]');
const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
spySections.forEach(sec => spyObserver.observe(sec));

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
