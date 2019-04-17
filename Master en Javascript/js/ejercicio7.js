'use strict'

//Tabla de multiplicar de un numero introducido en pantalla

var numero = parseInt(prompt("Escribe un numero",1));

for(var i = 1; i <= 10;i++){
    document.write(numero+" x "+i+" = "+(numero*i)+"</br>");
}