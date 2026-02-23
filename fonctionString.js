//1.  fonction remplacer un mot dans une phrase
//  "le chat dort" == "le chien dort" (guide)
function remplacerMot(phrase, motARemplacer, motDeRemplacement) {
    return phrase.replace(motARemplacer, motDeRemplacement);
}
console.log(remplacerMot("le chat dort", "chat", "chien"));    


// 2. fonction masquer un numero
// 123343524344 = xxxxxxxxxxxxxxx
// let numero = "657204012";
// let numeroMasque = masquerNumero(numero);

function masquerNumero(numero) {
    
    let debut = numero.slice(0 , 3);
    let fin = numero.slice(-2);
    let etoiles = "*".repeat(numero.length - 5);
    let resultat = debut + etoiles + fin;
    return resultat;
}
console.log( masquerNumero("6589654754") );



// 3. analyser "hellow123!@"(compter les lettres , chiffres , et symboles)
let texte = "hello123@!"
let lettre =( texte.match(/[a-z, A-Z]/g) || []).length;
let chiffre = (texte.match(/[0-9]/g) || []).length
let symbole = texte.length-lettre-chiffre; 
console.log("lettre", lettre);
console.log("chiffre", chiffre);
console.log("symbole", symbole);




// 4. trouver le mot le plus long dans une phrase 



// 5. convertir une phrase 
//  convertir ( "je suis un boy' ) en (je-suis-un-boy )guide
function slugify(titre){
    return titre.toLowerCase().replace(/\s+/g, '-')
}
console.log(slugify("Je SUIS un boy"));