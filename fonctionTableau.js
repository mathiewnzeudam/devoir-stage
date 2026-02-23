// 1. filtrer les produits en stock quels produits ont un stock > 0
//  [{ nom : "A" , stock: "5"} , {nom : "B" , stock : 0}] ( guide)
function filtrage(stock){
         return stock.filter(function(produit){
             return produit.stock > 0
        
     })
 }
 console.log(filtrage ( [{ nom : "A" , stock: "5"} , {nom : "B" , stock : 0} , {nom : "C" , stock : 3}]
 ));

 // 2. prix doubles 
// un magasin double ses prix [500 , 800 , 1200]
function prixDouble(prix){
  return prix.map(function(p){
    return p * 2
  }) 
}
console.log(prixDouble( [500 , 800 , 1200]));

// 3. utilisateurs uniques 
//  supprimer les doublons ["user 1" , "user 2" , "user 1", "user 3"] (guide)
//  const utilisateur = ["user 1" , "user 2" , "user 1", "user 3"];
//  function utilisateurUniques(utilisateur){
//    return [...new set(utilisateur)];
//  }
//  console.log(utilisateurUniques(utilisateur));

// 4. produits communs 
// trouver les produits dans les 02 listes ["A" , "B" , "C" , "D"] , ["B" , "C" , "D" , "E"](guide )


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

  

// // 5. inverser l'odre 
// [ "A" , "B" , "C"] en ["C" , "B" , "A"]
 function test(tab){
    return tab.map(function(valeur, index){
        return Boolean(valeur )
    })
}
console.log(test([1 , 3 , 0 , 8 , 0 , 9]));

function Filtrage(tab){
    return tab.filter(function(valeur , index){
        return Boolean(valeur)
    })
}
console.log (Filtrage([ 1 , 3 ,0 , 8 , 6 , 9]))

function comparaison( tab1, tab2){
     return tab1.filter(function(produit1){
         return tab2.some(function(produit2){
            return Boolean(produit1 === produit2)
        })
    })
}
console.log(comparaison([1 , 2 , 4 , 6 , 0,  9], [2, 4, 8, 0,  9, 12]))