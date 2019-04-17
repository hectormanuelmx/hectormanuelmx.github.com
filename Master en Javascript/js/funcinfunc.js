'use strict'

function porConsola(numero1,numero2){
    console.log("La suma es "+(numero1+numero2));
}
function porPantalla(numero1,numero2){
    document.write("La suma de los numeros es "+(numero1+numero2));
}

function calculadora(numero1,numero2, show = false){
    if (show == false) {
        porConsola(numero1,numero2);
    }else{ 
        porPantalla(numero1,numero2);S
    }
    return true;
}

calculadora(4,6);

