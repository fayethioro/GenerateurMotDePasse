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

// function getRandomLower() {
//     return console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97))
//   }

// getRandomLower()



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
    
    setTimeout(function(){
        chg.style.display='none';
    }, 2500);
   
}
function vider() 
{
    motdepasse.value = " "; 
}

function melange(chaine) 
{
    return chaine.sort(() => Math.random() - 0.2);
}
//   var tab =[ '1' , '2', '3'];
//   melange(tab)
//   console.log(tab)
  
function generateur() 
{
    // tableau apres avoir coché
    let tableauxregroupe = [].concat( 
        lowercase.checked ? tableauminuscule : [], 
        uppercase.checked ? tableaumajuscule : [],
        numbers.checked ? tableaunumero : [],
        symbols.checked ? tableausymbole : []);
    
    let tableauxassocier=[
        lowercase.checked ? tableauminuscule : [], 
        uppercase.checked ? tableaumajuscule : [],
        numbers.checked ? tableaunumero : [],
        symbols.checked ? tableausymbole : []
    ].filter(element => element.length)
    let passwordLength = parseInt(document.getElementById('taille').value);
    let mdp = ''; 

    function verifie(tableauxassocier) 
    {
        cpt= 0;
       tableauxassocier.forEach(element => {
             if(element.length > 0) 
             cpt++;
       });
    }
    verifie(tableauxassocier)
    // console.log(cpt);
    
    ///// si l'utilisateur saisi aucun critère
    if (cpt < 1) 
    { 
     
      notification("Tu dois séléctionner au moins un critère");
      vider();
      generer.disabled = true;  
    }
    ///// si l'utilisateur  à coche plus que la longueur
    else if (cpt > passwordLength)
    {
        notification("Diminuer les elements cochés");
        vider();
        generer.disabled = true;
    }
    // ///// si l'utilisateur ne saisie pas un nombre pour la longueur
    else if (isNaN(passwordLength))
    {
        notification("tu dois saisir un nombre");
        vider();
        generer.disabled = true;
    }
    ///// si l'utilisateur saisi  moins de 15 caractères
     else if (passwordLength < 0) 
    {
        notification("Le minimum est de 1 caractère");
        vider();
      generer.disabled = true; 
    }
    ///// si l'utilisateur saisi  plus de 20 caractères
     else if ( passwordLength > 20) 
    {
        notification("Le minimum est de 20 caractères");
        vider();
        generer.disabled = true; 
    }
    else
     {

        for (i = 0; i < passwordLength; i++)
         {
          mdp+= tableauxassocier[i % cpt][Math.floor(Math.random() * tableauxassocier[i % cpt].length)]; 
        }
        console.log(mdp);
        mdp = melange(mdp.split(''));
        mdp = mdp.join('');
        console.log(mdp);
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
        notification("Case vide , il n y a rien à copier");
    }
    else 
    {
        motdepasse.select();
       document.execCommand("copy");
    // generator.after("copié");
    notification("mot de passe copié avec success");
    }
}
generator.addEventListener("click", copie);



