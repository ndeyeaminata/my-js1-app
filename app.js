document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut
 
 
    // Récupérer les valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
 
 
    // Validation de base
    if (!name || !email || !message) {
        document.getElementById('response-message').textContent = 'Tous les champs sont requis.';
        document.getElementById('response-message').style.color = 'red';
        return;
    }
 
 
    // Affichage du message de succès (vous pouvez remplacer cette partie par un envoi vers un serveur)
    document.getElementById('response-message').textContent = 'Merci pour votre message, nous vous répondrons bientôt !';
    document.getElementById('response-message').style.color = 'green';
 
 
    // Réinitialiser le formulaire
    document.getElementById('contact-form').reset();
 });
 