document.addEventListener("DOMContentLoaded", () => {
    // 1. Automação de Vogais no IvyPresto
    const editorialTitles = document.querySelectorAll('.title-editorial');
    
    editorialTitles.forEach(title => {
        const text = title.innerHTML;
        // Aplica classe vowel apenas em letras (ignorando tags HTML)
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

    // 3. Animações Editoriais Modernas (GSAP)
    gsap.registerPlugin(ScrollTrigger);

    // Revela elementos base
    gsap.set(".gsap-fade, .stagger-item", { visibility: "visible" });

    // Efeito Parallax sutil no vídeo do Hero
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

    // Fade Up Simples para títulos e blocos isolados
    const fadeElements = document.querySelectorAll(".gsap-fade");
    fadeElements.forEach((el) => {
        gsap.fromTo(el, 
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Stagger (Cascata) para parágrafos textuais e listas
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
