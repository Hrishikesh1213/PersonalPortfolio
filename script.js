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

const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
function openProjectModal(p) {
  const stats = p.stats.map(s => `<div><span>${s.value}</span><small>${s.label}</small></div>`).join('');
  const pills = p.pills.map(s => `<span>${s}</span>`).join('');
  modalContent.innerHTML = `
    <p class="project-meta">${p.year} <span class="rule"></span> ${p.tag}</p>
    <h3>${p.title}</h3>
    <p class="modal-desc">${p.description}</p>
    <div class="project-stats">${stats}</div>
    <div class="pills">${pills}</div>
  `;
  modal.hidden = false;
}
document.getElementById('modal-close').addEventListener('click', () => { modal.hidden = true; });
modal.addEventListener('click', (e) => { if (e.target === modal) modal.hidden = true; });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.hidden = true; });

const workColLeft = document.getElementById('work-col-left');
const workColRight = document.getElementById('work-col-right');
const workMoreBtn = document.getElementById('work-more-btn');
const WORK_INITIAL_COUNT = 8;

function buildWorkCard(p, extra) {
  const card = el(`
    <article class="work-card reveal${extra ? ' work-card-extra' : ''}">
      <p class="work-card-meta">${p.year} &middot; ${p.tagId}</p>
      <h4>${p.title}</h4>
      <p class="work-card-brief">${p.brief}</p>
      <span class="work-card-cta">VIEW DETAILS &rarr;</span>
    </article>
  `);
  card.addEventListener('click', () => openProjectModal(p));
  if (extra) card.style.display = 'none';
  return card;
}

const initialProjects = D.work.projects.slice(0, WORK_INITIAL_COUNT);
const extraProjects = D.work.projects.slice(WORK_INITIAL_COUNT);
const initialHalf = Math.ceil(initialProjects.length / 2);
initialProjects.slice(0, initialHalf).forEach(p => workColLeft.appendChild(buildWorkCard(p, false)));
initialProjects.slice(initialHalf).forEach(p => workColRight.appendChild(buildWorkCard(p, false)));

if (extraProjects.length) {
  const extraHalf = Math.ceil(extraProjects.length / 2);
  const extraCards = [];
  extraProjects.slice(0, extraHalf).forEach(p => { const c = buildWorkCard(p, true); workColLeft.appendChild(c); extraCards.push(c); });
  extraProjects.slice(extraHalf).forEach(p => { const c = buildWorkCard(p, true); workColRight.appendChild(c); extraCards.push(c); });

  workMoreBtn.hidden = false;
  workMoreBtn.textContent = 'SHOW MORE ↓';
  let expanded = false;
  workMoreBtn.addEventListener('click', () => {
    expanded = !expanded;
    extraCards.forEach(c => { c.style.display = expanded ? '' : 'none'; });
    workMoreBtn.textContent = expanded ? 'SHOW LESS ↑' : 'SHOW MORE ↓';
  });
}

// --- Trajectory ---
document.getElementById('trajectory-label').textContent = D.trajectory.sectionLabel;
document.getElementById('trajectory-heading').innerHTML = D.trajectory.heading.join('<br />');

const timelineTabsEl = document.getElementById('timeline-tabs');
const timelinePanelEl = document.getElementById('timeline-panel');
const timelineMoreBtn = document.getElementById('timeline-more-btn');
const trajectoryAllItems = [...D.trajectory.items, ...(D.trajectory.moreItems || [])];
const TIMELINE_INITIAL_COUNT = 3;

function renderTimelinePanel(item) {
  const bullets = item.bullets.map(b => `<p>&rarr; ${b}</p>`).join('');
  const stack = item.stack ? `<div class="pills timeline-stack">${item.stack.map(s => `<span>${s}</span>`).join('')}</div>` : '';
  timelinePanelEl.innerHTML = `
    <h3>${item.role}</h3>
    <p class="timeline-panel-org">${item.org}</p>
    ${bullets}
    ${stack}
  `;
}

const timelineTabButtons = trajectoryAllItems.map((item, i) => {
  const extra = i >= TIMELINE_INITIAL_COUNT;
  const tab = el(`
    <button class="timeline-tab${i === 0 ? ' active' : ''}" type="button">
      <span class="timeline-org">${item.org}</span>
      <span class="timeline-role">${item.role}</span>
      <span class="timeline-date">${item.date}</span>
      <span class="tag-pill">${item.badge}</span>
    </button>
  `);
  tab.addEventListener('click', () => {
    timelineTabButtons.forEach(b => b.classList.remove('active'));
    tab.classList.add('active');
    renderTimelinePanel(item);
  });
  if (extra) tab.style.display = 'none';
  timelineTabsEl.appendChild(tab);
  return tab;
});

if (trajectoryAllItems.length) renderTimelinePanel(trajectoryAllItems[0]);

if (trajectoryAllItems.length > TIMELINE_INITIAL_COUNT) {
  timelineMoreBtn.hidden = false;
  timelineMoreBtn.textContent = 'SHOW MORE ↓';
  let timelineExpanded = false;
  timelineMoreBtn.addEventListener('click', () => {
    timelineExpanded = !timelineExpanded;
    timelineTabButtons.slice(TIMELINE_INITIAL_COUNT).forEach(b => { b.style.display = timelineExpanded ? '' : 'none'; });
    timelineMoreBtn.textContent = timelineExpanded ? 'SHOW LESS ↑' : 'SHOW MORE ↓';
  });
}

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

const ICON_EMAIL = `<svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>`;
const ICON_WHATSAPP = `<svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.1c-.22.62-1.29 1.19-1.78 1.24-.46.05-.87.22-2.93-.65-2.48-1.05-4.06-3.58-4.18-3.75-.12-.17-1-1.33-1-2.54 0-1.2.63-1.79.85-2.03.22-.24.48-.3.65-.3l.46.01c.15.01.34-.06.53.4.2.48.68 1.66.74 1.78.06.12.1.27.02.43-.08.16-.13.26-.26.4-.13.14-.27.32-.38.43-.12.12-.25.25-.11.5.15.25.68 1.12 1.46 1.82 1 .9 1.85 1.18 2.11 1.31.26.13.41.11.57-.05.16-.16.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.5.71 1.76.84.26.13.43.2.49.31.06.11.06.65-.16 1.27z"/></svg>`;
const ICON_LINKEDIN = `<svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`;

const contactLinks = document.getElementById('contact-links');
contactLinks.appendChild(el(`<a href="mailto:${D.profile.email}">${ICON_EMAIL}${D.profile.email}</a>`));
contactLinks.appendChild(el(`<a href="${D.profile.whatsappUrl}" target="_blank" rel="noopener">${ICON_WHATSAPP}WHATSAPP</a>`));
contactLinks.appendChild(el(`<a href="${D.profile.linkedin}" target="_blank" rel="noopener">${ICON_LINKEDIN}LINKEDIN</a>`));
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
