'use strict'

/*Que no diga si un numero es par o impar 
1.- Ventana prompt
2.- Si no es valido que nos pida primero un número
 */


 var number = parseInt(prompt("Escibe un numero",0));

 while (isNaN(number)){
    number = parseInt(prompt("Escibe un numero",0));
 }

 if(number % 2 == 0){
     alert("Es un numero par");
 }else{
     alert("es impar");
 }