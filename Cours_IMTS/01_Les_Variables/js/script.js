//alert('bonjour');
/**
 * Cours 1 : Les Variables
 * Objectifs :
 * 1) Créer variables
 * 2) Utiliser la console 
 * 3) Modifier une variable
 * 4) Les oprérateurs 
 * 5) Les constantes
 */

// Pour déclarer une variable, on utilise l'intruction let 
let a=1;
// console.log() permet d'afficher du texte ou autre dans la console 
console.log('bonjour'); // => afficher bonjour la console
console.log(a); // => afficher la valeur de la variable dans la console
console.log('a') // => afficher la lettre a


a=2;
console.log(a); // => afficher 2

// Une deuxième variable
let b=4;

// Une addition :
console.log(a+b);

/**
 * Exercice :
 * Créez une variable resultat
 * affectez à cette variable le resultat de la soustraction de a et b
 * (oprérateur -)
 * affichez resultat dans la console 
 * faites de même pour une mutipication (opérateur *)
 * et faites une division (opérateur /)

*/
let resultat=a-b;
console.log(resultat);

resultat=a*b;
console.log(resultat);

resultat=a/b
console.log(resultat);


// Les constantes : c'ést comme une variable, sauf la valeur ne change jamais.
// elles se déclarent avec l'intruction const 
const c=3;
console.log(c)

c=5; // => erreur !