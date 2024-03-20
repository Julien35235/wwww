let myRequest='https://hp-api.onrender.com/api/spells';
fetch(myRequest)
    .then(
        Response=>Response.json()
    )
    .then(
        Data=>show(Data)
    );

const body=document.querySelector('body');
const show=(Data)=>{
    for (let spell of Data){
        console.log(spell.name);
        
        let details=document.createElement('details');
        body.appendChild(details);
        
        let summary=document.createElement('summary');
        details.appendChild(summary);
        summary.textContent=spell.name;
        details.innerHTML+=spell.description;

    }
}
