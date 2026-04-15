const cards = document.querySelectorAll('.card');

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
});