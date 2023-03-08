let passwordoutput =  document.getElementById('passwordoutput');
let tableauminuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
let tableaumajuscule = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
let tableaunumero = [1,2,3,4,5,6,7,8,9,0];
let tableausymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","<", "","/","*","-",",","|","?","~","_","=","+","(",")","{","}","[","]","£","§","\"","\\"];     


function generateur() 
{
    // tableau apres avoir coché
    let tableauxregroupé = [].concat( 
        lowercase.checked ? tableauminuscule : [], 
        uppercase.checked ? tableaumajuscule : [],
        numbers.checked ? tableaunumero : [],
        symbols.checked ? tableausymbole : []);
      
    let passwordLength = parseInt(document.getElementById('taille').value);
    let mdp = ''; 
    
    ///// si l'utilisateur saisi aucun critère
    if (tableauxregroupé.length < 1) 
    {
      alert('Tu dois séléctionner au moins un critère' );  
    }
    ///// si l'utilisateur saisi  moins de 15 caractères
     else if (passwordLength < 15) 
    {
      alert('Le minimum est de 15 caractères');
    }
    ///// si l'utilisateur saisi  plus de 20 caractères
     else if ( passwordLength > 20) 
    {
        alert('Le maximum est de 20 caractères');
    }
    else
     {
        for (i = 0; i < passwordLength; i++)
         {
          mdp+= tableauxregroupé[Math.floor(Math.random() * tableauxregroupé.length)]; 
         }
     passwordoutput.value = mdp; 
    }
}
// generateur();
document.querySelector("#generateButton").addEventListener("click", generateur);

function copie()
{
	 
    if (document.getElementById('passwordoutput').value==0)
     {
        
        alert('Case vide , il n y a rien à copier')
    }
    else 
    {
    passwordoutput.select();
    document.execCommand("copy");
    alert('Copié')
    }
}
document.querySelector("#generateButton2").addEventListener("click", copie);