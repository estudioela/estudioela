document.addEventListener("DOMContentLoaded", () => {
    // 1. Automação de Vogais em Itálico (IvyPresto Display)
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
            
            // Fecha os outros
            accordions.forEach(a => {
                a.classList.remove('active');
                a.querySelector('.accordion-content').style.maxHeight = null;
                a.querySelector('.accordion-icon').textContent = '+';
            });
            
            // Abre o clicado
            if (!isOpen && content.innerHTML.trim() !== "") {
                acc.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                acc.querySelector('.accordion-icon').textContent = '-';
            }
        });
    });

    // Abre o primeiro item do acordeon por padrão
    const firstAcc = document.querySelector('.accordion-item');
    if(firstAcc) {
        firstAcc.classList.add('active');
        const firstContent = firstAcc.querySelector('.accordion-content');
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
        firstAcc.querySelector('.accordion-icon').textContent = '-';
    }

    // Recalcula altura no resize
    window.addEventListener('resize', () => {
        const activeAcc = document.querySelector('.accordion-item.active .accordion-content');
        if(activeAcc) {
            activeAcc.style.maxHeight = activeAcc.scrollHeight + "px";
        }
    });

    // 4. Efeito Botão Magnético Premium
    const magnetics = document.querySelectorAll('.magnetic-wrap');
    magnetics.forEach(wrap => {
        const btn = wrap.querySelector('.magnetic-btn');
        
        wrap.addEventListener('mousemove', (e) => {
            const rect = wrap.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.3, ease: "power2.out" });
        });
        
        wrap.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
        });
    });

    // 5. Animações GSAP Refinadas
    gsap.registerPlugin(ScrollTrigger);

    // Fade in do cabeçalho
    gsap.to(".header-container .logo, .nav-link", {
        opacity: 1,
        visibility: "visible",
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
    });

    gsap.set(".gsap-fade, .stagger-item", { visibility: "visible" });

    // Parallax no Vídeo Hero
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

    // Transição (Efeito Cortina) suavizada
    gsap.to("#arquitetura", {
        yPercent: 15, 
        ease: "none",
        scrollTrigger: {
            trigger: "#metodologia",
            start: "top bottom", 
            end: "top top",      
            scrub: true
        }
    });

    // Animação da ilustração no Footer
    gsap.fromTo(".footer-bleed",
        { scale: 0.9, y: 50 },
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

    // Revelação dos Textos (Fade Up)
    const fadeElements = document.querySelectorAll(".gsap-fade");
    fadeElements.forEach((el) => {
        gsap.fromTo(el, 
            { y: 40, opacity: 0 }, 
            {
                y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
                scrollTrigger: { 
                    trigger: el, 
                    start: "top 85%", 
                    toggleActions: "play none none reverse" 
                }
            }
        );
    });

    // Revelação em Cascata (Stagger) para os parágrafos
    const staggerGroups = document.querySelectorAll(".stagger-group");
    staggerGroups.forEach((group) => {
        const items = group.querySelectorAll(".stagger-item");
        gsap.fromTo(items, 
            { y: 30, opacity: 0 }, 
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
