var 
x="";

function 
Validation (){

let 
x = document.forms["myForm"]["fname"].value;
if (x.length == "0"){
    document.getElementById("error").style.display="block";

return document.getElementById("error").innerHTML ="La saisie du nom est obligatoire";
}
if ( x.length < "5" ) {

//alert ("le nom n'est pas valide");

document.getElementById("error").style.display="block";

return document.getElementById("error").innerHTML ="Le Nom doit contenir au moins 5 caractères, le votre  contient " + document.querySelector("#fname").value.length + ". Veuillez Réessayer !!";

} 


//alert('Merci vos information sont pris en compte')

document.getElementById("resultat").style.display="block";

return document.getElementById("resultat").innerHTML="Bienvenue " + document.querySelector("#fname").value;

}