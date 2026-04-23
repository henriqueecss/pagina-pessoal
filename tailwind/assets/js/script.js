// =============================================
// script.js — Versão Tailwind
// GAC116 - Programação Web — UFLA
// Autor: Henrique César Silva Soares
// =============================================

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
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
  const temaAtual = localStorage.getItem('tema') || 'light';
  applyTheme(temaAtual === 'dark' ? 'light' : 'dark');
});

document.getElementById('menuToggle').addEventListener('click', function () {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
});

document.querySelectorAll('#mobileMenu a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.add('hidden');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// ─── SCROLL REVEAL ───
// Adiciona .reveal via JS nos cards e headings de cada seção
const revealTargets = [
  ...document.querySelectorAll('section h2'),
  ...document.querySelectorAll('section .rounded-2xl'),
  ...document.querySelectorAll('#interesses .flex.flex-wrap.justify-center'),
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
document.querySelectorAll('#habilidades [style*="width"]').forEach(bar => {
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
const navLinks = document.querySelectorAll('nav a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 110) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('nav-active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('nav-active');
  });
}, { passive: true });
