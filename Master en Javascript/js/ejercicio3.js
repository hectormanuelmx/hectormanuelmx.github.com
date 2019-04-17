'use strict'
//Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario

numero1 = parseInt(promp("Introduce el primer numero,0"));
numero2 = parseInt(promp("Introduce el segundo numero,0"));

document.write("<h1> De" +numero1+ "a" +numero2+ "estan los números.");

for (var i = numero1;i <= numero2;i++){
    document.write(i+"</br>");
}