# fiche d'orientation des differentes fonctions des tableaux et chaines de caractere  que j'au du a traiter

## I-  les fonctions sur les **tableaux**

ici nous avons decouvert des fonctions primitives 
des **tableaux** a savoir `map` , `filter` , `som`  ici je  vais vous montrer en detail comment fonctione chaque fonctions 



#### I.1  la fonction `map`

  `map` permet de parcourir les diiferents elements d'un tableau (index et valeur) en gardant la meme dimension par defaut la fonction `map` renvoie un **booleen** 

### exemple
```javascript
function test(tab){
    return tab.map(function(valeur, index){
        return boolean(valeur) 
    })
}
console.log(test([1 , 3 , 0 , 8 , 0 , 9]))
```
resultat
```javascript
[ true, true, false, true, false, true ]
```
--- 
--- 
---

### exemple de fonction 

```javascript
function parcourir (tab){
return tab.map(function(valeur , index){
    return "l'index est " + index + "et la valeur est"+ valeur
})
}
console.log (parcourir(tab = [ 1 , 3 , 8 , 6 , 9]))
```
resultat
```javascript
[
  "l'index est 0 et la valeur est 1",
  "l'index est 1 et la valeur est 3",
  "l'index est 2 et la valeur est 8",
  "l'index est 3 et la valeur est 6",
  "l'index est 4 et la valeur est 9"
]
```

ici la fonction `map`pemet de donner `l'index` et la `valeur` de chaque element dans le tableau pour plus d'information sur la fonction primitive `map ` 

---
---
---

###  I- 2  la fonction `filter`

ici , `filter` fait la meme chose que map mais a la difference que `filter` peux ne pas renvoyer un tableu de meme dimensions elle ne renvoi pas un **booleen**
elle filtre les diiferents elements d'un tableau et renvoie la valeur si vrai et si faut expulse la valeur 
en fait elle va creer une nouvelle instance respectant la condition
  
### exemple

```javascript

function Filtrage(tab){
    return tab.filter(function(valeur , index){
        return Boolean(valeur)
    })
}
console.log (parcourir(tab = [ 1 , 3 , 0,  8 , 6 , 9]))

```
resultat
```javascript
[ 1, 3, 8, 6, 9 ]
```
ici la fonction renvoie uniquement les valeurs > 0 et n'a pas la meme taille qu'au debut

###### pour plus d'information rendez-vous sur la page mdn sur les fonctions en js 
---
---
---

### I.3 la fonction `som`

ici la fonction filter permet de comparer et renvoyer 02 ou plusieurs element elle retourne egalement un booleen 

### exemple 
```javascript
function comparaison( tab1, tab2){
    return tab1.filter(function(produit1){
        return tab2.some(function(produit2){
            return produit1 === produit2
        })
    })
}
console.log(comparaison([1 , 2 , 4 , 6,  0, 9], [2, 4, 8, 0, 9, 12]))
```
resultat
```javascript
[ 2, 4, 0, 9 ]
```
---
---
---

### I- 4  exemple de fonction experimentés avec map filter et somme

 ### I-4-1  filtrer les produits en stock quels produits ont un stock > 0
 ` [{ nom : "A" , stock: "5"} , {nom : "B" , stock : 0}] ( guide)`
```javascript
function filtrage(stock){
         return stock.filter(function(produit){
             return produit.stock > 0
        
     })
 }
 console.log(filtrage ( [{ nom : "A" , stock: "5"} , {nom : "B" , stock : 0} , {nom : "C" , stock : 3}]
 ));
 ```
resultat
```javascript
[ { nom: 'A', stock: '5' }, { nom: 'C', stock: 3 } ]
```
---
---
---


#### I-4-2 prix doubles 
 un magasin double ses prix `[500 , 800 , 1200]`
 ```javascript
function prixDouble(prix){
  return prix.map(function(p){
    return p * 2
  }) 
}
console.log(prixDouble( [500 , 800 , 1200]));
```
resultat 
```javascript
[ 1000, 1600, 2400 ]
```
### I-4-3 trouver les produits dans les 02 listes `["A" , "B" , "C" , "D"] [["B" , "C" , "D" , "E"]](guide )`
```javascript
function produitsCommuns(tab1, tab2) {
  return tab1.filter(function(produit1) {
    return tab2.some(function(produit2) {
      return produit1.id === produit2.id;
    });
  });
}
console.log(produitsCommuns([{ id: 1, nom: "A" }, { id: 2, nom: "B" }, { id: 3, nom: "C" }, { id: 4, nom: "D" }],
  [{ id: 2, nom: "B" }, { id: 3, nom: "C" }, { id: 4, nom: "D" }, { id: 5, nom: "E" }]
));
```
resultat 

```javascript
[ { id: 2, nom: 'B' }, { id: 3, nom: 'C' }, { id: 4, nom: 'D' } ]
```
### I-4-5 & I-4-6 a **completer**



## II les chaines de" caracteres 
ici nous avons decouvert les fonctions sur les chaines de caractere a savoir `replace` , `repeat` , `slice` , `spide` , `toLowerCase` , `toUpperCase` , `supplslugify` , `match` etc 
 ici nous allons illustrés quelques fonctions pour en savoir plus sur d'autre fonction veillez cliquer sur ce lien
### II.1  la fonction `replace`
ici, la fonction replace permet de remplacer une lettre un mot une phrase et un paragraphe etc ce qui est iilustre de la  facon suivante 

```javascript
function remplacerMot(phrase , motAremplacer , motDeRemplacement){
return phrase.replace(motAreplacer , motDeRemplacement)

}
console.log (remplacerMot("le chat dort" , "chat" , "chien"));
```
resultat 
```javascript
" le chien dort"
```
---
---
---


### II.2 la fonction `slice` et `repeat`

fonction masquer un numero
 123343524344  en  123xxxxxxxxxxx44

 ```javascript
function masquerNumero(numero) {
    
    let debut = numero.slice(0 , 3);
    let fin = numero.slice(-2);
    let etoiles = "*".repeat(numero.length - 5);
    let resultat = debut + etoiles + fin;
    return resultat;
}
console.log( masquerNumero("6589654754") );

```
resultat
```javascript
658*****54
```
---
---
---
### II - 3  la fonction `match`
 analyser "hellow123!@"(compter les lettres , chiffres , et symboles)
```javascript
let texte = "hello123@!"
let lettre =( texte.match(/[a-z, A-Z]/g) || []).length;
let chiffre = (texte.match(/[0-9]/g) || []).length
let symbole = texte.length-lettre-chiffre; 
console.log("lettre", lettre);
console.log("chiffre", chiffre);
console.log("symbole", symbole);
```
resultat 
```javascript
lettre 5
chiffre 3
symbole 2
```
---
---
---
###  II- 4 la fonction `slugify` & `toLowerCase()`
  convertir ( "je suis un boy' ) en (je-suis-un-boy )guide

```javascript
function slugify(titre){
    return titre.toLowerCase().replace(/\s+/g, '-')
}
console.log(slugify("Je SUIS un boy"));
```
resultat 
```javascript
"je-suis-un-boy"
```
---
---
---
### II-5 la fonction `trim()`,  `map`, `join` ,`split` etc 
```javascript
function capitalise2 (mot){
   const  mots = mot.trim().toLowerCase().split(" ") // permet de supprimer les espaces avant et apres la chaine de caractere
   // et permet de mettre tout le texte en minuscule pour un premier temps et de separer les mots d'une chaine de caractere et de les mettre dans un tableau*
   
   const motCapitalise = mots.map(function(mot){ // map permet de parcourir le tableau et affiche les valeurs dans un autre tableau
    if(typeof mot !=="string"){ // permet de verifier si la valeur est une chaine de caractere ou pas
        return "ce n'est pas une chaine de caractere" // permet de retourner un message d'erreur si la valeur n'est pas une chaine de caractere
    }else if (mot === ""){ // permet de verifier si la valeur est une chaine de caractere vide ou pas
        return "entrer une chaine de caractere non vide" // permet de retourner un message d'erreur si la valeur est une chaine de caractere vide
    }else{ // permet de mettre la premiere lettre de chaque mot en majuscule et le reste en minuscule
        return mot.at(0).toUpperCase() + mot.slice(1)// permet de mettre la premiere lettre de chaque mot en majuscule et le reste en minuscule
    }
})
   return motCapitalise.join(" ") // permet de joindre les mots du tableau en une chaine de caractere avec un espace entre chaque mot
}
console.log(capitalise2("morgan COMMENT tu vas "));
```
resultat 
```javascript
"Morgan Comment Tu Vas "
```
pour plus d'information concernant  fonctions sur les chaines de caractere cliquer ici https://github.com/IT-WIBRC/web-bases/blob/master/javascript/strings/index.html