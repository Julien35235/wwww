// on va jouer sur le fait que prompt() interrompt le code
const aQuestions=[
    'Quelle est ta couleur préférée ?',
    'Chinois ou indien ce soir ?',
    'Quelle est la différence entre un pigeon ?',
    'Trouves-tu qu\'il y a une vraie dichotomie ?',
    'Quel etait le PIB de la République du Congo en mars 1991 ? ',
    'Quel âge avait Rimbaud ?',
    'Mais pourquoi ?',
    'Quel était le diamètre du tonneau de Diogène ?'
];
for(let question of aQuestions){
    prompt(question);
}

// route vers tous les personnages
const myRequest='https://thronesapi.com/api/v2/Characters';

// l'appel à l'API en utilisant fetch()
fetch(myRequest)
.then(
    // une fois qu'on a récupéré les données, 
    // on les type comme un json pour que javascript
    // les traite facilement
    response=>response.json()
)
.then(
    // Une fois que les données sont jsonifiées
    // on appelle une fonction qu'on a écrite pour
    // traiter les données :
    data=>getCharacterList(data)
)
.catch(
    // Si l'API renvoie une erreur
    // On la traite
    error=>console.log(error)
);

// La fonction qui traite les données de l'API
// Elle prend en paramètre les données reçues de l'API
const getCharacterList=(charactersList)=>{
    //console.log(charactersList);
    // Pour générer un une valeur aléatoire pour l'index :
    // 1- Math.random() pour générer un nombre aléatoire
    // entre 0 et 1
    // 2- On multiplie ce nombre par la longueur du tableau
    // 3- On arrondit le tout à l'entier inférieur avec 
    // Math.floor()
    //console.log(Math.floor(Math.random()*(charactersList.length)))
    let indexRandom=Math.floor(Math.random()*(charactersList.length));

    // On peut afficher des elements de la liste de personnages
    // en utilisant l'index aléatoire
    console.log(charactersList[indexRandom].fullName);
    // On affiche la réponse dans le html
    const body=document.querySelector('body')
    const myP=document.createElement('p');
    myP.innerHTML=`Tu es ${charactersList[indexRandom].fullName}`;
    body.appendChild(myP);
    const myImg=document.createElement('img');
    myImg.src=charactersList[indexRandom].imageUrl;
    body.appendChild(myImg);
}

