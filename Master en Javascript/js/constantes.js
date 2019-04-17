'use strict'

var nombre = "Hector Manuel";

const nom2 = "Valeria Rm";



//Tipos de Datos

var numero1 = 26;

var numero2 = 19;

var operacion = numero1 + numero2;

console.log("El resultado es :"+ operacion);

//OPERADORES LOGICOS



var año = 2019;

//AND & 
if(año >=2000 & año <=2020){
    console.log("actualidad");
    
}else{
    console.log("futuro");
}

//NOT ! NEGACION
if(año != 2017){
    console.log("No es 2017");
}


//OR ||
if (año == 2009 || (año >=2019 & año ==2019)){
    console.log("el año termina en 9");
}else{
    console.log("AÑO NO REGISTRADO");
}

//CONDICIONAL SWITCH

 var edad = 26;
 var imprime ="";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 26: 
        imprime = "Eres un adulto joven";
        break;
    case 40:
        imprime = "Estas en la crisis de los cuarenta";
        break;
    case 70:
        imprime = "Ya eres un anciano";
        break;

    default:
        imprime = "No estas dentro del rango";
        break;
}

console.log (imprime);


//CICLO FOR

var numero = 100;
for(var i =0;i < numero;i++){
    console.log("Vamos por el numero : "+i);

    debugger;
}


//CICLO WHILE

var year = 1993;
while (year < 2050) {
    console.log("Vamos en el año "+year);

    //detener un bucle con break
    if(year == 2000){
        break;
    }
    year++;
}

//DO WHILE

var años = 30;
do{
    alert("ejecutado");
    años++;
}while(años >40)
