/**
 * Les tableaux // array()
 * 1) création d'un tableau 
 * 2) array.push (), pour ajouter à la fin d'un tableau
 * 3) array.pop(),
 * 4) array.shift()
 * 5) array.unshift
 * 6) array.length
 */

// un tableau contient plusieurs valeurs 
// accssibles par leur index (position dans le tableau)

let monTableau=['bleu', 'rouge', 2, 'vert'];
console.log(monTableau[1]);

//push(), ajoute une valeur à la fin du tableau
monTableau.push('violet');
console.log(monTableau);

// pop(), supprime le dernier élément du tableau et ça le retournne 
console.log(monTableau.pop());
console.log(monTableau);

// shift(), retourne le 1 er élément du tableau et ça le supprime
console.log(monTableau.shift());
console.log(monTableau);

// unshift(), ajoute un ou des éléments au début du tableau
monTableau.unshift('taupe', 'mauve');
console.log(monTableau);

// length, retourne la longueur d'un tableau 
console.log(monTableau.length)

/**
 * Affichez dans la console le dernier élément de monTableau 
 * sans le supprimer
 * 
 * astuce : il faut utiliser monTableau.length
 */

console.log(monTableau[monTableau.length-1]);

/**
 * Excercice
 * Voi un tableau de la listes des courses
 * mesCourses['beurre,'croquettes', lait, 'pq', oeufs'];
 * Affichez dans la console : 
 * - Le premier élement du tableau 
 * - Le troisième 
 * - Le dernier
 */

let mesCourses=['beurre','croquettes', 'lait', 'pq', 'oeufs'];
console.log(mesCourses[0]);
console.log(mesCourses[2]);
console.log(mesCourses[4]);
console.log(mesCourses[mesCourses.length -1]);



