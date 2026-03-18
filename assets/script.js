document.addEventListener("DOMContentLoaded", () => {
    // 1. Automação de Vogais (IvyPresto Display)
    const editorialTitles = document.querySelectorAll('.title-editorial');
    editorialTitles.forEach(title => {
        const text = title.innerHTML;
        title.innerHTML = text.replace(/(?![^<]*>)([aeiouáéíóúãõâêîôû])/gi, '<span class="vowel">$1</span>');
    });

    // 2. Scroll suave do Hero (Seta)
    const scrollBtn = document.getElementById("scroll-down");
    if(scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            const nextSection = document.getElementById("sobre-nos");
            if(nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // 3. Lógica do Acordeon (Arquitetura de Serviços)
    const accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isOpen = acc.classList.contains('active');
            const content = acc.querySelector('.accordion-content');
            
            // Fecha todos os outros
            accordions.forEach(a => {
                a.classList.remove('active');
                a.querySelector('.accordion-content').style.maxHeight = null;
                a.querySelector('.accordion-icon').textContent = '+';
            });
            
            // Abre o clicado se estiver fechado e tiver conteúdo
            if (!isOpen && content.innerHTML.trim() !== "") {
                acc.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                acc.querySelector('.accordion-icon').textContent = '-';
            }
        });
    });

    // Inicia o primeiro acordeon aberto por padrão (Branding)
    const firstAcc = document.querySelector('.accordion-item');
    if(firstAcc) {
        firstAcc.classList.add('active');
        const firstContent = firstAcc.querySelector('.accordion-content');
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
        firstAcc.querySelector('.accordion-icon').textContent = '-';
    }

    // Recalcula a altura do acordeon em caso de resize da tela
    window.addEventListener('resize', () => {
        const activeAcc = document.querySelector('.accordion-item.active .accordion-content');
        if(activeAcc) {
            activeAcc.style.maxHeight = activeAcc.scrollHeight + "px";
        }
    });

    // 4. Animações GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Fade in do cabeçalho
    gsap.to(".header-container .logo, .nav-link", {
        opacity: 1,
        visibility: "visible",
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2 // Leve atraso para a página renderizar
    });

    gsap.set(".gsap-fade, .stagger-item", { visibility: "visible" });

    // Parallax Sutil no Vídeo Hero
    gsap.to(".hero-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Efeito Cortina (Metodologia branca passando por cima da Arquitetura vermelha)
    gsap.to("#arquitetura", {
        y: 150, 
        ease: "none",
        scrollTrigger: {
            trigger: "#metodologia",
            start: "top bottom", 
            end: "top top",      
            scrub: true
        }
    });

    // Animação de Zoom Logo no Footer
    gsap.fromTo(".footer-bleed",
        { scale: 0.8, y: 100 },
        {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".footer-bleed-wrapper",
                start: "top bottom", 
                end: "bottom bottom",
                scrub: true
            }
        }
    );

    // Fade Up com mais movimento para elementos soltos
    const fadeElements = document.querySelectorAll(".gsap-fade");
    fadeElements.forEach((el) => {
        gsap.fromTo(el, 
            { y: 50, opacity: 0 }, // Aumentado deslocamento Y inicial
            {
                y: 0, opacity: 1, duration: 1.2, ease: "power4.out",
                scrollTrigger: { 
                    trigger: el, 
                    start: "top 85%", 
                    toggleActions: "play none none reverse" 
                }
            }
        );
    });

    // Stagger (Efeito Cascata em blocos) com mais deslocamento
    const staggerGroups = document.querySelectorAll(".stagger-group");
    staggerGroups.forEach((group) => {
        const items = group.querySelectorAll(".stagger-item");
        gsap.fromTo(items, 
            { y: 40, opacity: 0 }, // Aumentado deslocamento Y inicial
            {
                y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out",
                scrollTrigger: { 
                    trigger: group, 
                    start: "top 80%", 
                    toggleActions: "play none none reverse" 
                }
            }
        );
    });
});
