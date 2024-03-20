/********************************
 * Créer une application de type Kanban
 *  - configuration par défaut : on charge le kaban.json
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 ****************************************************/

/**  Des variables "globales" à initialiser :
 * Le nombre de colonnes
 * Le nombre de tâches
 */

let nbColumn=0;
let nbTask=0;
const main=document.querySelector('main');

/****************************************************************** */


/******************************************************************
 * Récupérer le kanban :
 * - soit un vierge depuis un json par défaut
 * - soit celui enregistré dans localstorage
 */


// Créer les colonnes du kanban
const PopulateKanBan=(aKanban) =>{
    // on sélectionne la balise main où l'on va créer les colonnes du KanBan
    

    // On parcours le json
    for (let column of aKanban.columns){ // pour chaque colonne :
       let myColumn=addColumn(column.name);
        // Ajout des tâches par colonnes
        if(column.tasks!=undefined){ // on vérifie qu'il y a bien un tableau contenant les tâches

            for (let task of column.tasks){ // pour chaque tâche dans le tableau 
                addTask(myColumn, task.name, task.details);
            }
        }
        
    }
}




// fonction quand le drag over commence :
const onDragStart=(event) => {
    // on "duplique" les données du div draggée
    event.dataTransfer.setData('text/plain', event.target.id);
    // on change la couleur de background
    event.currentTarget.style.backgroundColor = '#CCC';
    //event.currentTarget.style.cursor='grabbing';
}

// fonction pendant le drag
const onDragOver=(event) => {
    event.preventDefault();

}


// fonction quand on dépose 
const onDrop=(event) => {
    let id = event.dataTransfer.getData('text');
    let draggableElement = document.querySelector(`#${id}`);
    let dropzone = event.target;
    if(dropzone.className==='column'){
        dropzone.appendChild(draggableElement);
        event.dataTransfer.clearData();
    }
    draggableElement.style.backgroundColor='#FFFFFF';
    draggableElement.style.cursor='grab';
    saveKanBan();
}

const onBlur=(event)=>{
    saveKanBan();
}

// sauvegarder le kanban dans un objet
const saveKanBan=()=>{
    let kanban={
        "columns":[]
    };
    
    
    let aColumn=main.querySelectorAll('.column');
    for(let column of aColumn){
       // console.log(column);
        let columnName=column.querySelector('h2').textContent;
        let tasks=[];
        let aTask=column.querySelectorAll('.task');
        if(aTask.length>0){
            for(let task of aTask){
                let name=task.querySelector('h3').textContent;
                let details=task.querySelector('p').innerHTML;
                let oTask={
                    "name":name,
                    "details":details
                };
                tasks.push(oTask);
            }
        }
        let oColumn={
            "name":columnName,
            "tasks":tasks
        }
        kanban.columns.push(oColumn);

   }
   kanban=JSON.stringify(kanban);
   //console.log(kanban);
   localStorage.setItem('kanban',kanban);
    
}

const addTask=(pCible,sTitre,sDetails)=>{
    nbTask++;
    let myColumn=(typeof(pCible)==='string')?document.querySelector(pCible):pCible;

    
    let myNewTask=document.createElement('div');
    myNewTask.className='task';
    myNewTask.id=`task${nbTask}`;
    
    let myNewTaskTitle=document.createElement('h3');
    
    myNewTaskTitle.textContent=sTitre;
    myNewTaskTitle.contentEditable=true;

    let myNewTaskDetails=document.createElement('p');
    myNewTaskDetails.innerHTML=sDetails;
    myNewTaskDetails.contentEditable=true;
   
    let myNewTaskBin=document.createElement('img');
    myNewTaskBin.setAttribute('src', './img/bin.png');
    myNewTaskBin.style.marginLeft='90%';
    myNewTaskBin.draggable=false;
    
    myNewTask.draggable='true';
    
    myColumn.appendChild(myNewTask);
    myNewTask.appendChild(myNewTaskTitle);
    myNewTask.appendChild(myNewTaskDetails);
 	myNewTask.appendChild(myNewTaskBin);


    myNewTask.addEventListener('dragstart', onDragStart);
    myNewTaskTitle.addEventListener('blur',onBlur);
    myNewTaskDetails.addEventListener('blur',(e)=>{onBlur();console.log(e.target.innerHTML)});
    myNewTaskBin.addEventListener('click',()=>delTask(myNewTask.id));
    
    myNewTask.style.cursor='grab';
    myNewTaskDetails.style.cursor='text';
    myNewTaskTitle.style.cursor='text';
    myNewTaskBin.style.cursor='pointer';
}

const reset=()=>{
    localStorage.removeItem('kanban');
    document.location.reload();

}

const addColumn=(sName)=>{
    // on incrémente le nombre de colonnes
    nbColumn++;

    // pour chaque colonne on crée une div
    let myColumn=document.createElement('div');

    //on lui attribue la classe !
    myColumn.className='column';

    //on lui attribue une id (le champs name dans le json)
    myColumn.id=`column${nbColumn}`;
    
    // on crée un élément h2
    let title=document.createElement('h2');
    title.contentEditable=true;
    title.addEventListener('blur',onBlur);

    // on specifie en contenu du h2 le contenu de name
    title.textContent=sName;

    // on ajoute un séparateur (hr)
    let hr=document.createElement('hr');


    // on ajoute le titre et le séparateur à la colonne 
    myColumn.appendChild(title);
    myColumn.appendChild(hr);
    
    // on ajoute les écouteurs pour les événement dragover et drop et on appelle les fonctions idoines
    myColumn.addEventListener('dragover', onDragOver);
    myColumn.addEventListener('drop', onDrop);
    

    //on ajoute la colonne à main
    main.appendChild(myColumn);


    // on met à jour le style css en fonction du nombre de colonnes
    main.style.gridTemplateColumns=`repeat(${nbColumn}, 1fr)`;



    return(myColumn);
}

const delTask=(pId)=>{
    document.querySelector(`#${pId}`).remove();
    saveKanBan();
}


let newTaskButton=document.querySelector('#newTask');
newTaskButton.addEventListener('click',()=>addTask('#column1','Titre à modifier','Lorem ipsum à modifier'));

let razButton=document.querySelector('#raz');
razButton.addEventListener('click', reset);

let addColumnButton=document.querySelector('#newColumn');
addColumnButton.addEventListener('click', ()=> {addColumn('Nouvelle colonne'); saveKanBan()});


if(!localStorage.getItem('kanban')) {

    let myRequest="./json/kanban.json";
    fetch(myRequest,{})
    .then(response=>response.json())
    .then(data=>PopulateKanBan(data))
    .catch(error=>console.log(error));
}

else {
    PopulateKanBan(JSON.parse(localStorage.getItem('kanban')));
}