/**
 * Les objets
 * contiennent des données comme les tableaux
 * mais l'index est textuel qu'on apelle propriété
 */

// on crée un à 3 propriété :
let person={
    prenom:'Test',
    nom:'Dupont',
    age:46
};
console.log(person.prenom)
console.log('Bonjour ' +person.prenom+ ' '+person.nom);


// Une façon de faire les contatènation :
console.log(`Bonjour${person.prenom} ${person.nom}`);


// JavaScript Object Notation (JASON)
let aPerson=[
    {
        prenom:'Adrien',
        nom:'Maravl'
    },
    {
        prenom:'Maxime',
        nom:'Franco'
    },
    {
        prenom:'Alexandre',
        nom:'Neel'
    }
];
// exemple pour réucupérer les données : 
console.log(aPerson[0].prenom);

/**
 * Exercice
 * Parcourez le tableau aPerson avec une boucle for ... of
 * pour chaque element du tableau affichez dans la console 
 * 'Bonjour Prénom Nom
 */
for (let element of aPerson){
    console.log('Bonjour '+element.prenom+ ' ' +element.nom);  
}
 for (let i=0; i<aPerson.length; i++){
    console.log('Bonjour '+aPerson[i].prenom+' '+aPerson[i].nom);
 }
