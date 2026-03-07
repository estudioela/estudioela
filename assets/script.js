document.addEventListener("DOMContentLoaded", () => {
    // 1. Automação de Vogais no IvyPresto
    const editorialTitles = document.querySelectorAll('.title-editorial');
    
    editorialTitles.forEach(title => {
        const text = title.innerHTML;
        title.innerHTML = text.replace(/(?![^<]*>)([aeiouáéíóúãõâêîôû])/gi, '<span class="vowel">$1</span>');
    });

    // 2. Scroll suave do Hero
    const scrollBtn = document.getElementById("scroll-down");
    if(scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            const nextSection = document.getElementById("sobre-nos");
            if(nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // 3. Animações GSAP Editoriais (Fade-up)
    gsap.registerPlugin(ScrollTrigger);

    // Revela os elementos e remove o visibility hidden
    gsap.set(".gsap-fade", { visibility: "visible" });

    const fadeElements = document.querySelectorAll(".gsap-fade");

    fadeElements.forEach((el) => {
        gsap.fromTo(el, 
            { 
                y: 40, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // Inicia quando o topo do elemento atinge 85% da tela
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});
