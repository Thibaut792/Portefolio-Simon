document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const images = document.querySelectorAll('.image-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.id;

            // Afficher toutes les images si le bouton "Tout" est cliqué
            if (filter === "all") {
                images.forEach(image => {
                    image.style.display = "block";
                });
            } else {
                images.forEach(image => {
                    // Afficher uniquement les images correspondant à la catégorie du bouton
                    if (image.getAttribute('data-category') === filter) {
                        image.style.display = "block";
                    } else {
                        image.style.display = "none";
                    }
                });
            }
        });
    });
});
