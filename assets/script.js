document.addEventListener("DOMContentLoaded", () => {
    // 1. Automação de Tipografia: Vogais em Itálico (IvyPresto)
    const editorialTitles = document.querySelectorAll('.title-editorial');
    
    editorialTitles.forEach(title => {
        const text = title.innerHTML;
        title.innerHTML = text.replace(/([aeiouáéíóúãõâêîôû])/gi, '<span class="vowel">$1</span>');
    });

    // 2. Scroll suave da seta
    const scrollBtn = document.getElementById("scroll-down");
    if(scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            const nextSection = document.getElementById("sobre-nos");
            nextSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
