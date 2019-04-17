'use strict'

/* 
    Uso de los parametros REST , en el cual se almacenan el resto de los valores 
    de las variables no declaradas en forma de un array

    Los parametros se encarga de convertir una lista 
    de elementos en un array.
*/
function lista_mercado(articulo1,articulo2,articulo3, ...resto_articulos){
    console.log("Primer Articulo :",articulo1);
    console.log("Segundo Articulo :",articulo2);
    console.log("Tercer Articulo :",articulo3);
    console.log(resto_articulos);
}

lista_mercado("huevos","chorizo","leche","pan","cafe","jamon");

//PARAMETROS SPREAD

var lista_frutas = ["Manzana","Sandia","Naranja","Uva"];

function frutas(){
    console.log(...lista_frutas);
}

frutas();

/*
Spread vs Rest
Los Rest parameter son justamente lo contrario ya en vez de convertir
 un array en una lista de elementos se encarga de convertir una lista 
 de elementos en un array. Lo cual puede ser útil por ejemplo para 
 calcular la suma de n elementos de forma rápida.
 */