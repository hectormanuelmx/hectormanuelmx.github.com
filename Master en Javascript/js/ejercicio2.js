'use strict'

//Utilizando un ciclo mostrar el promedio y la suma de los resultados hasta que el usuario introduzca un numero negativo y mostrar el promedio de esos numeros 

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que metas numeros negativos",0));
    if(isNaN(numero)){
        numero = 0;

    }else if (numero >= 0){
        suma = suma + numero;
        //suma +=numero;
        contador++;
        }
      
        console.log(suma);
        console.log(contador);

}while(numero >=0)

alert("La suma de todos los numeros es: "+suma);
alert("El promedio de los numeros es: "+(suma/contador));


