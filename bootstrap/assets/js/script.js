// =============================================
// script.js — Versão Bootstrap
// GAC116 - Programação Web — UFLA
// Autor: Henrique César Silva Soares
// =============================================

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('tema', theme);
  const icon = document.getElementById('themeIcon');
  if (theme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

const temaSalvo = localStorage.getItem('tema') || 'light';
applyTheme(temaSalvo);

document.getElementById('themeToggle').addEventListener('click', function () {
  const temaAtual = document.documentElement.getAttribute('data-bs-theme');
  applyTheme(temaAtual === 'dark' ? 'light' : 'dark');
});

document.getElementById('year').textContent = new Date().getFullYear();

// ─── SCROLL REVEAL ───
// Adiciona .reveal via JS para não precisar editar cada elemento no HTML
const revealTargets = [
  ...document.querySelectorAll('section h2'),
  ...document.querySelectorAll('.card'),
  ...document.querySelectorAll('#interesses .list-group'),
  ...document.querySelectorAll('#interesses .d-flex.flex-wrap.justify-content-center'),
];
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── PROGRESS BARS ───
// Captura as larguras originais, zera e anima ao entrar na tela
const bars = [];
document.querySelectorAll('#habilidades .progress-bar').forEach(bar => {
  const w = bar.style.width;
  bar.style.width = '0%';
  bar.style.transition = 'width 0.9s cubic-bezier(0.4, 0, 0.2, 1)';
  bar.dataset.targetWidth = w;
  bars.push(bar);
});

if (bars.length) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.targetWidth;
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(bar => barObserver.observe(bar));
}

// ─── NAV ATIVO ───
// Destaca o link da seção visível conforme o scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 130) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('nav-active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('nav-active');
  });
}, { passive: true });
