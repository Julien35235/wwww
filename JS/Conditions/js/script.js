/** Exercice sur les conditions :
Ouvrez un prompt pour demander le mot de passe de l'utilisateur.
Vérifiez que le mot de passe est égal à "azerty".
Si oui, affichez dans une fenêtre alert "access granted"
Si non, affichez dans une fenêtre alert "access denied"
Si le mot de passe est égal à "h4ckz0r", affichez "Bonjour M. Anderson"
*/

/**let a=prompt ("Tapez votre mot de passe");
let mdp='azerty';
if (mdp == 'azerty'){
    console.log('accés autorisé')
} */


/** 
 *let mdp = prompt('Entrez le mot de passe') 

if (mdp === 'azerty'){
    alert('acces granted')
} 
else if (mdp === 'h4ckz0r') {
    alert('Bonjour M. Anderson')
}
    else {
    alert('access denied')
}

/* 
Ouvrez un prompt pour demander le mot de passe de l'utilisateur.
Vérifiez que le mot de passe est égal à "azerty" ou à "hackzor".
Si oui, affichez dans une fenêtre alert "access granted"
Si non, affichez dans une fenêtre alert "access denied"
*/

/*
// Demander le mot de passe à l'utilisateur
let motDePasse = prompt("Veuillez entrer le mot de passe :");

// Vérifier le mot de passe
if (motDePasse === "azerty" || motDePasse === "hackzor") {
    // Accès autorisé
    alert("Accès autorisé");
} else {
    // Accès refusé
    alert("Accès refusé");
}
*/

/* avec un switch */
const mdp = prompt ('Quel est votre mot de passe ?');
switch(mdp){
    case 'azerty' :
    case 'hackzor' :
        alert('Accès autorisé');
        break;
        default :
        alert('Accès refusé')

}








