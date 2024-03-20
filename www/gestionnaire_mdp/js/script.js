function enregistrerEntree() {
    const url = document.getElementById('url').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const comments = document.getElementById('comments').value;

    const entry = {
        url,
        username,
        password,
        expirationDate,
        comments,
    };

    // Récupérer les entrées existantes
    let entries = JSON.parse(localStorage.getItem('passwordEntries')) || [];
    
    // Ajouter la nouvelle entrée
    entries.push(entry);

    // Sauvegarder les entrées mises à jour
    localStorage.setItem('passwordEntries', JSON.stringify(entries));

    // Afficher un message de succès
    alert('L\'entrée a été créée avec succès.');

    // Mettre à jour l'affichage des entrées existantes
    afficherEntrées();
}

function afficherEntrées() {
    const entriesList = document.getElementById('entriesList');
    entriesList.innerHTML = '';

    const entries = JSON.parse(localStorage.getItem('passwordEntries')) || [];

    entries.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>URL:</strong> ${entry.url}<br>
                              <strong>Nom d'utilisateur:</strong> ${entry.username}<br>
                              <strong>Mot de passe:</strong> ${entry.password}<br>
                              <strong>Date d'expiration:</strong> ${entry.expirationDate || 'Non spécifiée'}<br>
                              <strong>Commentaires:</strong> ${entry.comments || 'Aucun'}`;

        entriesList.appendChild(listItem);
    });
}

// Afficher les entrées existantes lors du chargement de la page
afficherEntrées();