'use strict'

//Funciones
//Una funciones es una agrupacion reutilizable de un conjunto de intrucciones

function calculadora(numero1,numero2, show = true){
    if (show == false) {
        console.log("La suma es "+(numero1+numero2));
     }else{ 
        document.write("La suma de los numeros es "+(numero1+numero2))
    }
}

calculadora(4,6);

