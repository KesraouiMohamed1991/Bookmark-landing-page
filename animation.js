
// Créez un IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {



        if (entry.isIntersecting) {
            // L'élément observé est dans la zone d'affichage
            entry.target.classList.add('visible');
            entry.target.classList.remove('invisible');

        }

        else {
            // L'élément observé est hors de la zone d'affichage
            // entry.target.classList.remove('visible');
            entry.target.classList.add('invisible');

        }
    });
}, {
    root: null, // Utilisez null pour que la section soit la zone d'affichage
    rootMargin: "0px",
    threshold: 0.3, // Le seuil à 0.5 signifie que la moitié de la section doit être visible pour déclencher l'intersection
});

// Spécifiez les éléments cibles à observer
const targetSections = document.querySelectorAll('.section');

// Commencez à observer les éléments cibles
targetSections.forEach((section) => {
    observer.observe(section);
});
