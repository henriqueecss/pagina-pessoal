# Página Pessoal — GAC116 Programação Web — Henrique César Silva Soares

Projeto desenvolvido para a disciplina **GAC116 — Programação Web** da Universidade Federal de Lavras (UFLA), 2026/1.

**Atividade:** AP2 — Desenvolvimento de Página Pessoal com dois frameworks CSS.

---

## Demo

| Versão | Link |
|--------|------|
| Bootstrap 5 | https://henriqueecss.github.io/pagina-pessoal/bootstrap/ |
| Tailwind CSS | https://henriqueecss.github.io/pagina-pessoal/tailwind/ |

---

## Descrição

Página pessoal responsiva desenvolvida em duas versões independentes:

- **Versão Bootstrap:** utiliza Bootstrap 5.3.3 com componentes nativos (navbar, cards, badges, progress bars) e o sistema `data-bs-theme` para alternância de tema claro/escuro.
- **Versão Tailwind CSS:** utiliza exclusivamente classes utilitárias do Tailwind CSS via CDN, com `darkMode: 'class'` para alternância de tema via toggle de classe no `<html>`.

Ambas as versões incluem:
- Layout responsivo mobile-first
- Dark/light mode com persistência via `localStorage`
- Nenhuma dependência local — tudo via CDN
- Sem frameworks JavaScript (React, Vue, etc.)

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.3
- Tailwind CSS (CDN)
- Font Awesome 6.5.0

---

## Estrutura de pastas

```
pagina-pessoal/
├── bootstrap/
│   ├── index.html
│   └── assets/
│       ├── css/styles.css
│       ├── js/script.js
│       └── img/foto.svg
├── tailwind/
│   ├── index.html
│   └── assets/
│       ├── css/styles.css
│       ├── js/script.js
│       └── img/foto.svg
└── README.md
```

---

## Seções

1. Navbar fixa com links âncora e botão de toggle de tema
2. Header/Hero com foto, nome, badges e botões de ação
3. Sobre — biografia, informações rápidas e educação
4. Habilidades — técnicas, comportamentais e barras de progresso
5. Projetos — CompJunior, CIMVEST e Página Pessoal
6. Interesses — lista e badges
7. Contato — e-mail, GitHub, LinkedIn e telefone
8. Footer com ano dinâmico via JavaScript

---

## Autor

**Henrique César Silva Soares**  
Bacharelado em Ciência da Computação — UFLA  
7º Período  
[github.com/henriqueecss](https://github.com/henriqueecss) · [linkedin.com/in/henrique-soares-28b482281](https://www.linkedin.com/in/henrique-soares-28b482281/)
