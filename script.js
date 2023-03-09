let motdepasse =  document.getElementById('motdepasse');
let tableauminuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
let tableaumajuscule = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
let tableaunumero = [1,2,3,4,5,6,7,8,9,0];
let tableausymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","<", "","/","*","-",",","|","?","~","_","=","+","(",")","{","}","[","]","£","§","\"","\\"];     
let generer  = document.querySelector("#generateButton")
let tabcheck = document.querySelectorAll("input");
let generator = document.querySelector(".password");
let passwordGenerator = document.querySelector("#password-generator")
let bloc;
// console.log(tabcheck);
generer.disabled = true; 

tabcheck.forEach(element => {
    element.addEventListener("change", ()=>{    
            generer.disabled = false; 
            // generateur();
        });
});
//fonction de notification

bloc=document.createElement('div');

bloc.classList.add("notif");
passwordGenerator.appendChild(bloc);
// console.log(bloc.classList);

function notification(texte) 
{
    let chg=document.createElement('div');
    bloc.appendChild(chg);
    chg.classList.add('dive');
    chg.innerHTML=texte;

    // setTimeout(function(){
    //     chg.style.display='none';
    //     //chg.parentNode.removeChild(chg);
    // }, 3000);

}

function vider() 
{
    motdepasse.value = " "; 
}
function generateur() 
{
    // tableau apres avoir coché
    let tableauxregroupé = [].concat( 
        lowercase.checked ? tableauminuscule : [], 
        uppercase.checked ? tableaumajuscule : [],
        numbers.checked ? tableaunumero : [],
        symbols.checked ? tableausymbole : []);
      
    let passwordLength = parseInt(document.getElementById('taille').value);
    console.log("passwordLength");
    let mdp = ''; 
    ///// si l'utilisateur saisi aucun critère
    if (tableauxregroupé.length < 1) 
    { 
     
      notification("Tu dois séléctionner au moins un critère");
      vider();
      generer.disabled = true;  
    }
    ///// si l'utilisateur saisi  moins de 15 caractères
     else if (passwordLength < 15) 
    {
        vider();
      alert('Le minimum est de 15 caractères');
      generer.disabled = true; 
    }
    ///// si l'utilisateur saisi  plus de 20 caractères
     else if ( passwordLength > 20) 
    {
        vider();
        alert('Le maximum est de 20 caractères');
        generer.disabled = true; 
    }
    else
     {
        // passwordLength.forEach(element => {
        //     mdp+= tableauxregroupé[Math.floor(Math.random() * tableauxregroupé.length)]; 
            
        // });
        for (i = 0; i < passwordLength; i++)
         {
          mdp+= tableauxregroupé[Math.floor(Math.random() * tableauxregroupé.length)]; 
         }
     motdepasse.value = mdp; 
    }
}
//// generateur de mot de passe
generer.addEventListener("click", generateur);

// generator.after.innerHTML = "Copie";
function copie()
{
	 
    if (document.getElementById('motdepasse').value==0)
     {
        
        alert('Case vide , il n y a rien à copier')
    }
    else 
    {
        motdepasse.select();
        motdepasse.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(motdepasse.value);
    // generator.after("copié");
       alert('Copié')
    }
}
generator.addEventListener("click", copie);



