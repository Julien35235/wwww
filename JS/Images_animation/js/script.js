/**
 * Manipulation du DOM via la création d'un
 * slider
 * - createElement => créer un élément en html 
 * - querySelector => cibler un élément un élément 
 * - SetAttribute => créer / modifier un attribut d'une élément en html 
 * - appendChild => attacher / ajouter un élément en html 
 * - textContent / innerHTML => ajouter dans un élément en html 
 * 
 * - setTimeOut => permet d'attendre avant d'éxcuter une fonction 
 * - fonctions récursives (une fonction qui s'appelle elle même)  
 *   
 */

// Créer une réference vers </body> 
const body=document.querySelector('body');

// On va créer une balise <div>, qu'on ajoutera à body 
const div=document.createElement('div');
// On lui ajoute une id 
div.id='slider';

// si on veut lui rajouter UNE class en CSS
//div.className='uneClass';
// Si y a plussieurs class : on utilise classList qui est un tableau: 
    // à la création
div.classList=['maClass1', 'maClass2'];
    // Si ensuite on veut lui ajouter une autre class :
div.classList.add('maClass3'); // fonctionne comme un push() sur un tableau
    // si on veut supprimer une class 
div.classList.remove('maClass2');

// FIN DU POUR INFO

// On ajoute l'élément à notre body 
body.appendChild(div);

// Pour ajouter l'image dans la div :
// 1- Créer un élément image
let monImage=document.createElement('img');
// 2- Modifier son attribut src avec setAttribute
// setAttribute prend 2 paramères (string) : le nom de l'attribute sa valeur
monImage.setAttribute('src', '../img/360_F_431710149_aao8OVbF3oLBFbuSsLGxRYxd8zIwRFAr.jpg');
// 3- on insert img dans la div 
div.appendChild(monImage);

// créer un titre h2 dans la div 
// 1- Créer un élément h2
const monTitre= document.createElement('h2');
// 2- Ecrire le contenu de ma balise h2
monTitre.textContent='Vin Diesel'
// 3- on l'insère dans la div
div.appendChild(monTitre);

// créer le buton "reculer"
const btnReculer=document.createElement('button');
btnReculer.textContent='<<';
div.appendChild(btnReculer);

// créer le buton "avancer"
const btnAvancer=document.createElement('button');
btnAvancer.textContent='>>';
div.appendChild(btnAvancer);
/**
// créer le buton "Play"
const btnPlay=document.createElement('button');
btnPlay.textContent='Play';
div.appendChild(btnPlay);

// créer le buton "Stop"
const btnStop=document.createElement('button');
btnStop.textContent='Stop';
div.appendChild(btnStop);

/** -------------------------------------------------
 * FIN de L'interface
 * Début du traitement des données
 * --------------------------------------------------*/


// Un JSON (Tableau d'objets) conternant le nom des images 
let aListeImage=[
    {
        adresse:'programations.jpg',
        titre:'Langage de programations'
    },
    {
        adresse:'dev.png',
        titre:'dev'
    },
    {
        adresse:'sddc-background-600.jpg',
        titre:'Datacenter'
    },
    {
        adresse:'0457a5d63980334.jpg',
        titre:'globe'
    },
    {
        adresse:'data_center.png',
        titre:'Center' 
    }
];
/*
console.log(aListeImage[2].titre)
console.log(aListeImage[0].adresse);*/
/*
for(let i=0; aListeImage.length; i++){
    console.log(aListeImage[i].adresse);
    console.log(aListeImage[i].titre);
}*/

// La fonction affiche() qui vas lire le tableau pas à pas, quand on 
// appuie sur le bouton avancer. Elle prend un paramère "step" qui vaut 1 ou -1

// on initialise une variable position à 0 qui stockera la valeur en cours
// pour l'index dans ListeImage
let position=0;
const affiche=(step)=>{
    position+=step;
    if(position>=aListeImage.length){
        position=0;
    }
    // si postion est inférieur à 0,
    // on revient à la fin du tableau (lenght-1)
    if(position<0){
        position=aListeImage.length-1;
    }

    console.log(aListeImage[position].adresse);
    monImage.setAttribute('src', `../img/${aListeImage[position].adresse}`);
    // On met à jour le titre pour chaque image 
    monTitre.textContent=aListeImage[position].titre;
}

// on appelle la fonction quand on clique sur le bouton 
btnAvancer.addEventListener('click',()=> {affiche(1), autoplay=false, btnPlay.textContent='Play'});
btnAvancer.addEventListener('click',()=> {affiche(-1), autoplay=false, btnPlay.textContent='Play'});


// on appelle la fonction quand on clique sur le bouton 
btnReculer.addEventListener('click',()=>affiche(-1));

// La fonction de "lecture automatique"
// on initialise un booléen (vrai ou faux) autoplay
let autoplay=true;
const runSlider=()=>{
    if(autoplay){
    affiche(1);
    // une temporisation de 2 seconde :
    // seTimeout qui prend deux paramètres : 
    // 1- une fonction à appeler
    // 2 - une valeur en miliseconde (string)
    setTimeout(()=>runSlider(),'2000');
    }
}
runSlider();

// Le buton "Play/Stop"
const btnPlay=document.createElement('button');
btnPlay.textContent='Stop';
div.appendChild(btnPlay);

/* La version explicite : moins jolie mais plus facile à comprendre au début
btnPlay.addEventListener('click',()=>{
    if(autoPlay==true){
        autoPlay=false;
        btnPlay.textContent='Play';
    }
    else{
        autoPlay=true;
        btnPlay.textContent='Stop';
        runSlider();
    }
})
*/
