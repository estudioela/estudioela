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

    // 3. Animações GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Revela os itens para o JavaScript assumir
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

    // Efeito de sobreposição (Cortina) da seção Metodologia sobre Arquitetura
    gsap.to("#arquitetura", {
        y: 150, // Move a seção branca para baixo lentamente criando o parallax
        ease: "none",
        scrollTrigger: {
            trigger: "#metodologia",
            start: "top bottom", // Dispara quando a vermelha aparece
            end: "top top",      // Termina quando a vermelha chega no topo
            scrub: true
        }
    });

    // Fade Up Simples
    const fadeElements = document.querySelectorAll(".gsap-fade");
    fadeElements.forEach((el) => {
        gsap.fromTo(el, 
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: "power3.out",
                scrollTrigger: { 
                    trigger: el, 
                    start: "top 90%", 
                    toggleActions: "play none none reverse" 
                }
            }
        );
    });

    // Stagger (Efeito Cascata em blocos de texto)
    const staggerGroups = document.querySelectorAll(".stagger-group");
    staggerGroups.forEach((group) => {
        const items = group.querySelectorAll(".stagger-item");
        gsap.fromTo(items, 
            { y: 20, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
                scrollTrigger: { 
                    trigger: group, 
                    start: "top 85%", 
                    toggleActions: "play none none reverse" 
                }
            }
        );
    });
});
