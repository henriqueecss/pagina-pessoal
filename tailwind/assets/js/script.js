// =============================================
// script.js — Versão Tailwind
// GAC116 - Programação Web — UFLA
// Autor: Henrique César Silva Soares
// =============================================

/**
 * Aplica o tema claro ou escuro.
 * Adiciona ou remove a classe "dark" no <html>,
 * persiste a preferência no localStorage
 * e alterna o ícone do botão.
 *
 * @param {string} theme - 'light' ou 'dark'
 */
function applyTheme(theme) {
  // Tailwind usa a classe "dark" no elemento raiz para ativar o modo escuro
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Persiste a escolha do usuário
  localStorage.setItem('tema', theme);

  // Alterna o ícone entre lua (claro) e sol (escuro)
  const icon = document.getElementById('themeIcon');
  if (theme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Lê o tema salvo ao carregar a página (padrão: claro)
const temaSalvo = localStorage.getItem('tema') || 'light';
applyTheme(temaSalvo);

// Alterna o tema ao clicar no botão #themeToggle
document.getElementById('themeToggle').addEventListener('click', function () {
  const temaAtual = localStorage.getItem('tema') || 'light';
  applyTheme(temaAtual === 'dark' ? 'light' : 'dark');
});

// Abre/fecha o menu mobile
document.getElementById('menuToggle').addEventListener('click', function () {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
});

// Fecha o menu mobile ao clicar em um link
document.querySelectorAll('#mobileMenu a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.add('hidden');
  });
});

// Preenche o span#year com o ano atual dinamicamente
document.getElementById('year').textContent = new Date().getFullYear();
