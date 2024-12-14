// JavaScript para interatividade do site

// Alternar menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// Menu hamburger para dispositivos mobile

function toggleMenu() {
    const menu = document.querySelector('.header .menu');
    menu.classList.toggle('active'); // Alterna a classe 'active' para mostrar ou esconder o menu
}



// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript para controle manual do carrossel
document.addEventListener('DOMContentLoaded', function () {
    const carrossel = document.querySelector('.certificados-lista');
    const items = document.querySelectorAll('.certificado');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const totalItems = items.length;

    function updateCarrossel() {
        carrossel.style.transform = `translateX(${-currentIndex * 33.3333}%)`;
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarrossel();
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarrossel();
    }

    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);
});

window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const content = document.querySelector('.content');

    // Definir o tempo de duração da tela de carregamento
    const loadingDuration = 7000; // 5 segundos

    // Remover a tela de carregamento e mostrar o conteúdo principal após a duração
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Remove a tela de carregamento
        content.classList.add('show'); // Adiciona a classe para o fade-in do conteúdo
    }, loadingDuration);
});







// Não repetir efeito visual do texto bugado
window.addEventListener('load', function() {
    const glitchText = document.querySelector('.glitch-text');
    glitchText.classList.add('stable');
});







