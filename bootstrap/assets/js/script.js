// =============================================
// script.js — Versão Bootstrap
// GAC116 - Programação Web — UFLA
// Autor: Henrique César Silva Soares
// =============================================

/**
 * Aplica o tema claro ou escuro.
 * Seta o atributo data-bs-theme no <html>,
 * persiste a preferência no localStorage
 * e alterna o ícone do botão.
 *
 * @param {string} theme - 'light' ou 'dark'
 */
function applyTheme(theme) {
  // Aplica o tema no elemento raiz (Bootstrap lê data-bs-theme)
  document.documentElement.setAttribute('data-bs-theme', theme);

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
  const temaAtual = document.documentElement.getAttribute('data-bs-theme');
  applyTheme(temaAtual === 'dark' ? 'light' : 'dark');
});

// Preenche o span#year com o ano atual dinamicamente
document.getElementById('year').textContent = new Date().getFullYear();
