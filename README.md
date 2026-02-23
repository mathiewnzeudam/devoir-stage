# fiche d'orientation des differentes fonctions des tableaux et chaines de caractere  que j'au du a traiter

### 1 - les fonctions sur les **tableaux**

ici nous avons decouvert des fonctions primitives 
des **tableaux** a savoir `map` , `filter` , `som`  ici je  vais vous montrer en detail comment fonctione chaque fonctions 



#### la fonction `map`

1.1  `map` permet de parcourir les diiferents elements d'un tableau (index et valeur) en gardant la meme dimension par defaut la fonction `map` renvoie un **booleen** 

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

### la fonction `filter`

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

pour plus d'information rendez-vous sur la page mdn sur les fonctions en js 

### la fonction `som`

ici la fonction filter permet de comparer et renvoyer 02 ou plusieurs element elle retourne egalement un booleen 

### exemple 
```javascript
function comparaison( tab1, tab2){
    return tab1.filter(function(produit1){
        return tab2.some(function(produit2){
            return produit === produit
        })
    })
}
console.log(comparaison([1 , 2 , 4 , 6,  0, 9], [2, 4, 8, 0, 9, 12]))
```
resultat
```javascript
[ 2, 4, 0, 9 ]
```
