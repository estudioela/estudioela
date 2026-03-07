document.addEventListener("DOMContentLoaded", () => {
    // 1. Automação de Tipografia: Vogais em Itálico (IvyPresto Display)
    const editorialTitles = document.querySelectorAll('.title-editorial');
    
    editorialTitles.forEach(title => {
        const text = title.innerHTML;
        // Envelopa todas as vogais em um <span> para aplicar o itálico
        title.innerHTML = text.replace(/([aeiouáéíóúãõâêîôû])/gi, '<span class="vowel">$1</span>');
    });

    // 2. Scroll suave da seta do Hero para a dobra Norte
    const scrollBtn = document.getElementById("scroll-down");
    if(scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            const nextSection = document.getElementById("intro");
            nextSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
