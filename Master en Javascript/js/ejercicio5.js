'use strict'
 // mostrar todos los numeros divisores de un numero introducido en un prompt

 var numero = parseInt(prompt("Introduce un munero" ,1));

 for(var i = 0;i <= numero;i++){

    if(numero%i == 0){
        console.log("Divisor "+i);
    }
    
 }
