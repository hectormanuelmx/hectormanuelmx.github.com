'use strict'
/* Calculadora :
-Pida dos numeros por pantalla
-Si metemos uno mal que nos lo vuelva a pedir
- En el cuerpo de la página, en una alerta  ypor la consola el resultado de
sumar, restar, multiplicar y dividir esas dos cifras
*/

var number1 = parseInt(prompt("Introduce el primer numero",0));
var number2 = parseInt(prompt("Introduce el segundo numero",0));

while (number1 < 0 || number2 <0 || isNaN(number1) || isNaN(number2)){
    var number1 = parseInt(prompt("Introduce el primer numero",0));
    var number2 = parseInt(prompt("Introduce el segundo numero",0));
}

var resultado = "La suma es: "+(number1+number2)+"<br/>"+
                "La resta es: "+(number1-number2)+"<br/>"+
                "La multiplicación es: "+(number1*number2)+"<br/>"+
                "La division es: "+(number1/number2);



document.write(resultado);

