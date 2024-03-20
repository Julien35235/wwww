/**
 * Les événements
 * 
 */

// Le plus important dans le cours : commment on cible un élément
// on utilie querySelector 

// 1- On va créer une référence ver notre element HTML button
const myButton=document.querySelector('button');
myButton.style.color='#F00'; 
myButton.style.fontWeight='blod';

// 2- Créeer une fonction qui vas être appelée quand on clique sur le bouton
const myFonction=()=>{
    myButton.style.marginLeft='150px';
    alert('Trés trop null !!!!')
}

// 3- on va ajoutés un écouteur d'événements sur le button
myButton.addEventListener('click', ()=>myFonction());