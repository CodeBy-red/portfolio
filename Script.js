// Aguarda o carregamento completo da página para iniciar as animações
window.addEventListener('load', () => {
    
    // --- LÓGICA DO PRELOADER ---
    const preloader = document.querySelector('.preloader');
    const container = document.querySelector('.container');
    
    // Esconde a tela de carregamento e mostra o conteúdo principal
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
        container.style.opacity = '1';
    }, 500);

    // --- LÓGICA DO CURSOR CUSTOMIZADO ---
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button'); // Adicione outros elementos se quiser

    // Inicia a posição do cursor
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    // Faz o cursor seguir o mouse
    window.addEventListener('mousemove', e => {
        gsap.to(cursor, 0.05, { x: e.clientX, y: e.clientY });
        gsap.to(follower, 0.3, { x: e.clientX, y: e.clientY });
    });

    // Aumenta o cursor ao passar por cima de links
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        link.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });

    // --- ANIMAÇÃO DO TÍTULO DA SEÇÃO HERO ---
    gsap.from(".hero-title .line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5 // Atraso para começar após o preloader
    });

    // --- LÓGICA DA ROLAGEM HORIZONTAL DOS PROJETOS ---
    const projectsWrapper = document.querySelector(".projects-wrapper");
    const projectsContainer = document.querySelector("#projects-container");

    gsap.registerPlugin(ScrollTrigger);

    // Animação que move o container dos projetos no eixo X
    gsap.to(projectsWrapper, {
        x: () => -(projectsWrapper.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: projectsContainer,
            pin: true, // "Fixa" a seção de projetos na tela durante a rolagem
            scrub: 1,  // Conecta a animação diretamente à barra de rolagem
            start: "top top",
            end: () => "+=" + (projectsWrapper.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true
        }
    });

    // --- APLICA A IMAGEM DE FUNDO NOS CARDS DE PROJETO ---
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const imagePath = card.dataset.img;
        if (imagePath) {
            card.style.backgroundImage = `url(${imagePath})`;
        }
    });
});
