/**
 * Récupérer la ville avec un formulaire,
 * Passer la ville en parametre de la fonction
 * qui envoie la requete à l'API
 */

// le protocole
const protocol='https://';

// Le end point (l'adresse de l'API)
const endpoint='api.openweathermap.org/';

// Les routes :
// La route pour le service de geolocalisation :
const routeGeoLoc='geo/1.0/direct?';
// la route pour la météo
const routeCurrentWeather='data/2.5/weather?';

// La clé API :
//const apikey='43cceaf558b7f341b3ac4d5ca1175c8c';
const apikey='1c55e4a327b6980482563eb911893606';

// on construit une fonction qui prendra 2 parametre :
// place, pour la ville
// limit, pour le nbr de retour

const getGeoLocFromPlaceName=(place,limit)=>{
    // on construit le début de la requete
    let myRequest=`${protocol}${endpoint}${routeGeoLoc}`;
    // on y ajoute le parametre place
    let qPlace=`q=${place}`;
    myRequest+=qPlace;
    // puis le parametre limit
    let qLimit=`&limit=${limit}`;
    myRequest+=qLimit;
    // puis l'apikey
    let qAPI=`&appid=${apikey}`;
    myRequest+=qAPI;

    fetch(myRequest)
        .then(
            Response=>Response.json()
        )
        .then(
            // on appelle la fonction getCurrentWeatherFromGeoLoc
            // qui va traiter les données et appeler la route
            // pour la météo
            data=>getCurrentWeatherFromGeoLoc(data)
        )
        .catch(
            error=>console.log(error)
        );
}

// La fonction qui appelle la route pour la météo
// et qui prendra en paramètre le JSON récupéré dans
// getGeoLoc...
const getCurrentWeatherFromGeoLoc=(data)=>{
    console.log(data);
    // on crée une variable pour extraire la latitude 
    // du JSON passé en paramètre
    let myLat=data[0].lat;

    // même chose pour la longitude
    let myLon=data[0].lon;

    // Les Query parameters pour la route current Weather :
    let qLat=`lat=${myLat}`;
    let qLon=`lon=${myLon}`;
    let qUnits='units=metric';
    let qLang='lang=fr';

    // on crée la requete :
    let myRequest=`${protocol}${endpoint}${routeCurrentWeather}`;
    myRequest=`${myRequest}${qLat}&${qLon}&${qUnits}&${qLang}&appid=${apikey}`;
    console.log(myRequest);
    fetch(myRequest)
        .then(
            Response=>Response.json()
        )
        .then(
            Data=>showWeatherFromCurrentWeatherAPI(Data)
        )
        .catch(
            error=>console.log(error)
        );
}
// La fonction qui traite le json de l'api currentWeather
// et affiche les données dans le HTML
// elle prend en paramètre un JSON
const showWeatherFromCurrentWeatherAPI=(data)=>{
    console.log(data);
    // on cible la span#ville
    let ville=document.querySelector('#ville');
    // on ajoute à cette span le nom de la ville qui vient du json
    ville.innerHTML=data.name;

    let resume=document.querySelector('#resume');
    resume.innerHTML=data.weather[0].description;
    resume.innerHTML+=
    `<br>
    ${data.main.temp} °C
    <br>
    `;
}
let myImg=document.createElement('img');
myImg.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
resume.appendChild(myImg);
    


// je crée une référence vers mon formulaire
const myForm=document.forms.cityForm;
// je crée un écouteur d'événement sur le formulaire pour appeler
// la fonction getGeoLocFromPlaceName 
// quand le formulaire est envoyé (submit)
myForm.addEventListener('submit',(e)=>{
    // j'empeche le rechargement de la page
    e.preventDefault();
    // on récupére la value du champs city
    let place=myForm.city.value;
    // on vérifie que place n'est pas vide
    if(place!=''){
        // on appelle notre fonction en lui passant la variable
        // place en parametre
        getGeoLocFromPlaceName(place,1);
    }
}
);
