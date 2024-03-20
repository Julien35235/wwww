// alert('hop');

/**
 * Les structures conditionnelles
 * - if
 * - else
 * - else if
 * - switch case
 * - les oprérateurs de comparaison
 * - et /ou
 */

/**
 * if(condition à vérifier){
 *    code à exécuter
 }
 else{
      si non ce code 
}
*/
// 4 variables pour faire nos tests 
let a=1;
let b=2;
let c=1;
let d='1';

// L'opérateur d'égalité ==
if(a==b){
    console.log('a est égal b');
}
else{
    console.log('a est différent de b');
}

// L'opérateur de non égalité !=
if(a!=b){
    console.log('a est différent de b');
}

// L'opérateur inférieur à < 
if(a<b){
        console.log('a est inférieur à b');
}

// L'opérateur supérieur à >
if(b>a){
        console.log('b est supérieur à a');
}

// Les opérateur supérieur ou égal >=
// inférieur ou égal <=

// L'opérateur d'égalité  stricte ==
// L'opérateur d'égalité de valeur et de même type
if(a==d){
        console.log('ça marche');
}
if(a===d){
         console.log('ça marche toujours');
} // => ne marche pas

// L'opérateur de différence stricte !==
if(a!==d){
    console.log('a n\'est pas strictement égale à d'); // l'antislash \ sert à échapper le caractère '
}

// L'opérateur 'ou' : il faut qu'une des conditions soit vraies
// notation : ||
if(a==b || a==c){
    console.log('L\'une des condtions soit vrai');
}
 
// L'opérateur 'et' : il faut que toutes les conditions soient vraies
// &&
if(a==b && a==c){
    console.log('toutes les conditions sont vraies');
} // => marche pas

// exercice :
// - Ouvrez un prompt avec le texte "mot de passe"
// - vérifiez que le mot de passe fasse plus 8 caractères :
// - si supérieur ou égal à 8 caractères, affichez dans la console "Mot de passe ok"
// - si inférieur à 8 caractères, affichez "le mot de passe doit faire au moins 8 caractères"

// vous allez avoir besoin de :
//   - prompt()
//   - .length

// Corrigé
//let mdp=prompt("Votre mot de passe")
//if(mdp.length>=8){
   // console.log("Mot de passe ok")
//}
//else{
    //console.log('le mot de passe doit être faire au moins 8 caractères');
//}

// La structure else et if
let question=prompt('Votre login');
if(question=='root'){
    console.log('Bienvenue administrateur')
}
else if(question=='editeur'){
    console.log('Bienvenue editeur');
}
else if(question=='auteur'){
    console.log('Bienvenue Auteur')
}
else{
    console.log('pas la bienvenue');
}

// La même avec un switch 
switch(question){
    case 'root':
        console.log('Bienvenue administrateur');
        break;
    case 'editeur':
        console.log('Bienvenue editeur');
        break;
    case 'auteur' :
        console.log('Bienvenue auteur');
        break;
    default :
    console.log('tu fais trop le fou')

}
// doc :https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch










