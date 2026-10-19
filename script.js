/*const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s ease-out";
    observer.observe(card);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ces IDs proviennent de ton interface EmailJS
    const serviceID = 'VOTRE_SERVICE_ID';
    const templateID = 'VOTRE_TEMPLATE_ID';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert('Message envoyé avec succès !');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Échec de l\'envoi... Erreur : ' + JSON.stringify(error));
        });
}); */


document.addEventListener('DOMContentLoaded', () => {
    // 1. Mise à jour automatique de l'année du footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Animation d'apparition au défilement (Scroll Reveal)
    const animatedElements = document.querySelectorAll('.fade-in, .project-card, .bento-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ne joue l'animation qu'une seule fois
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});