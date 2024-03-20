//alert('hop');
/**
 * Les chaines de caractères (string)
 * à l'issu du cours, vous êtes capable de 
 * 1) reconaître une string (tayeOf())
 * 2) de faire une concaténation 
 * 3) pompt()
 * 4) CharAt()
 * 5) string.lenght()
 * 6) substring()
 * 7) toLocakeUpperCase()
 * 8) indexoF()
 */
// La concaténation (mettre une string à la suite d'une autre)
//let prenom='Julien';
//let nom='Despagne';
//let message='Bonjour ' +prenom+  ' '+nom;
//console.log(message);

// Pour connaître le type d'une variable, la fonction typeof()
console.log(typeof(message)); // => affiche string 



// prompt() : Ouvre une fenêtre de dialogue
let prenom2=prompt('Votre prénom');
let nom2=prompt('Votre nom ?');
console.log('bonjour ' +prenom2+ ' ' +nom2);

// La méthode ChartAt() qui renvoie le caractère à la position indiquée
let maChaine='Bonjour !';
console.log(maChaine.charAt(0)); // => affiche B ; On compte toujours ) partir de 0
console.log(maChaine.charAt(1)); // => affiche 0

// La propriété length renvoie la taille de la chîne 
console.log(maChaine.length); // => renvoie 9

//  pour récupérer le dernier caractères 
// je stock la longueur de la chaîne dans une variable 
let longueur=maChaine.length;
console.log(maChaine.charAt(longueur-1)); // affiche !


// toLocalUpperCase : retourne la chaîne de caractère mais en majuscules
let txtMinuscules='eknjkzalnzjbenlam'
let txtMajuscules=txtMinuscules.toLocaleUpperCase();
console.log(txtMajuscules);

// substring(), permet de récupérer un fragment d'une chaîne de caractère
// Prend 2 paramètres (la position où on commance, la position où on s'arrête (exclus)
let maChaine2='azerty';
let troisPremiers=maChaine2.substring(0,3);
console.log(troisPremiers);

// Exercice : 
// - Récupérez le prenom de l'utilisateur à l'aide d'un prompt
// - Récupérez le nom de l'utilisateur à l'aide d'un prompt
// - Mettez la 1ere lettre du prénom en majuscule
// - Mettez la 1ere lettre du nom en majuscule
// - Affichez dans la console 'Bonjour, Prénom Nom'
// - avec les 1eres de prenom et nom en majuscules;
// astuce : 
// * Si vous ne mettez pas le 2eme paramère (end) à substring, il va jusqu'a la fin

// Récupérer le prénom de l'utilisateur à l'aide d'un prompt


let prenom = prompt('Entrez votre prénom :');

// Récupérer le nom de l'utilisateur à l'aide d'un prompt
let nom = prompt('Entrez votre nom :');

// Mettre la 1ère lettre du prénom en majuscule
prenom = prenom.substring(0, 1).toUpperCase() + prenom.substring(1);

// Mettre la 1ère lettre du nom en majuscule
nom = nom.substring(0, 1).toUpperCase() + nom.substring(1);

// Afficher dans la console 'Bonjour, Prénom Nom'
console.log("Bonjour, " + prenom + " " + nom);


// indexOf() => donnes la position d'un caractère dans une chaîne 
// si le caractère n'est pas présent dans la chaîne, ça retourne -1
// ça sert par exemple à checker si une adresse maill est valide 

let maill='test@test.com'
console.log(maill.indexOf('@'));

maill='testtest.com'
console.log(maill.indexOf('@'));

// Bug de javascript
let chiffre=1;
let chaine ='1';
console.log(chaine+chiffre)








