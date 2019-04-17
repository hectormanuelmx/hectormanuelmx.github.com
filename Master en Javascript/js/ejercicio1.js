'use strict'

//programa que pide dos numeros y que diga cual es el mayor,el menor y si son iguales
//Si los numeros introducidos no son numeros o menores a cero volver a introducir los correctos 

var numero1 = parseInt(prompt("Escribe el primer numero",0));
var numero2 = parseInt(prompt("Escribe el segundo numero",0));

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Escribe el primer numero",0));
    var numero2 = parseInt(prompt("Escribe el segundo numero",0));
} 

if(numero1 == numero2){
    alert("LOS NUMEROS SON IGUALES");

}else if (numero1 > numero2){
    alert("EL NUMERO MAYOR ES: "+numero1);
    alert("EL NUMERO MENOR ES: "+numero2);

}else if (numero2 > numero1){
    alert("EL NUMERO MAYOR ES: "+numero2);
    alert("EL NUMERO MENOR ES: "+numero1);

}else{
    alert("INTRODUCE NUMEROS COFRECTOS");
}



