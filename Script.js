document.addEventListener('DOMContentLoaded', function() {

    // Efeito de "fade-in" ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    // Seleciona todos os elementos que devem ter a animação
    const elementsToAnimate = document.querySelectorAll('section > *, .projeto-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('hidden'); // Adiciona a classe inicial para esconder
        observer.observe(el);
    });

    // Bônus: Deixa o header mais opaco ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.7)';
        }
    });

});
