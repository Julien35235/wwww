/**
 * # INSTRUCTIONS :
 * ## Programmez un jeu de "Shi Fu Mi" en javascript.
 * https://fr.wikipedia.org/wiki/Pierre-papier-ciseaux
 * 
 * 
 * ## Expliquez votre code en utilisant des commentaires.
 * 
 * 
 * ## Règles : seuls sont autorisés la Pierre, la Feuille et les Ciseaux.
 * 
 *
 * 
 * 
 */


// Fonction principale pour jouer au Shi Fu Mi
function jouerShiFuMi(choixJoueur) {
    // Options possibles : Pierre, Feuille, Ciseaux
    let optionsPossibles = ["Pierre", "Feuille", "Ciseaux"];

    // Générer un choix aléatoire pour l'ordinateur
    let choixOrdinateur = optionsPossibles[Math.floor(Math.random() * 3)];

    // Afficher les choix du joueur et de l'ordinateur
    console.log("Joueur : " + choixJoueur);
    console.log("Ordinateur : " + choixOrdinateur);

    // Vérifier le résultat du jeu
    if (choixJoueur === choixOrdinateur) {
        console.log("Égalité !");
    } else if (
        (choixJoueur === "Pierre" && choixOrdinateur === "Ciseaux") ||
        (choixJoueur === "Feuille" && choixOrdinateur === "Pierre") ||
        (choixJoueur === "Ciseaux" && choixOrdinateur === "Feuille")
    ) {
        console.log("Vous avez gagné !");
    } else {
        console.log("L'ordinateur a gagné !");
    }
}

// Exemple d'utilisation : remplacez "Pierre" par le choix réel du joueur
jouerShiFuMi("Pierre");
