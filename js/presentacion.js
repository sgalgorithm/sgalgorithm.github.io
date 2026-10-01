// ==========================================================================
// LÓGICA DE FILTRADO DINÁMICO PARA PROYECTOS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // 1. Gestionar estado activo en los botones
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');

            const selectedFilter = e.target.getAttribute('data-filter');

            // 2. Filtrar las tarjetas con una transición suave
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                    // Primero nos aseguramos de que se muestre en el layout
                    card.style.display = 'block';
                    // Le damos un mini-timeout para que el navegador registre el display antes de animar la opacidad
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Animamos la salida (desvanecimiento y encogimiento sutil)
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    // Esperamos a que termine la transición CSS para quitarlo del flujo
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300); // 300ms coincide con el tiempo que definiremos en el CSS
                }
            });
        });
    });
});