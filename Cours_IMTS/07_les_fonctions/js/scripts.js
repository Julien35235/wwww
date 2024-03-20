/**
 * Les fonctions
 * Les fonctions servent à "factoriser" le code :
 * - Moins de travail
 * - Moins de riques de bugs
 * - plus facile à améliorer ou faire évoluer
 */

let a=1;
let b=2;

console.log(a+b)

let c=3;
console.log(a+c);


// Une fonction qui fait la même chose :
// elle affiche dans la console.log l'addition des deux variables

const addition=(x,y)=>{
    console.log(x+y);
}
addition(5,9);
addition(37,69);

const meilleureAddition=(x,y)=>{
    // on fait notre oprération dans une variable appelée resultat
    let resultat=x+y;
    // on renvoie resultat avec l'instruction return
    // return arrete l'éxcution de la fonction
    return resultat;
}
console.log(meilleureAddition(100,8))

/**
 * Exercise :
 * Ecrivez une fonction
 * qui prend en entrée (en paramère ) une chaine de caractères
 * qui retourne la même chaine mais avec la premiere lettre en majuscule
 */

const capitalize=(mot)=>{
    let nouveauMot=mot.charAt(0).toLocaleUpperCase()+mot.substring(1);
    return nouveauMot;
    
}
console.log(capitalize('bonjour'));
console.log(capitalize('coucou'));

let aPerson=['Adrien', 'Lolo', 'Max']
/**
 * Faites une boucle pour parcourir le tableau 
 * et renvoyer touts les prénoms, avec une majuscule 
 * en utilisant la fonction capitalize
 */

for (let element of aPerson){
    console.log(capitalize(element))
}
