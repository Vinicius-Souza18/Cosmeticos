// Menu de Hambúrguer
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active'); // Alterna a classe "active" no ícone
    navList.classList.toggle('active');   // Alterna a classe "active" no menu
});

// Rolagem suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Obtém o ID da seção alvo
        const targetElement = document.querySelector(targetId); // Seleciona a seção alvo

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Rolagem suave
                block: 'start'     // Alinha o topo da seção ao topo da janela
            });
        }
    });
});

// Função para o formulário de agendamento
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Agendamento realizado com sucesso!');
});

// Função para o formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});