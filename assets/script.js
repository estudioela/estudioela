document.addEventListener("DOMContentLoaded", () => {
    // 1. Automação de Vogais no IvyPresto
    const editorialTitles = document.querySelectorAll('.title-editorial');
    
    editorialTitles.forEach(title => {
        const text = title.innerHTML;
        // Ignora tags HTML dentro do h2 e substitui apenas as letras
        title.innerHTML = text.replace(/(?![^<]*>)([aeiouáéíóúãõâêîôû])/gi, '<span class="vowel">$1</span>');
    });

    // 2. Click suave
    const scrollBtn = document.getElementById("scroll-down");
    if(scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            const nextSection = document.getElementById("sobre-nos");
            if(nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
