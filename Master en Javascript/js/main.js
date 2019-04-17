'use strict'

alert("hola mundo");

var pais = "mexico";
console.log (pais);

if(true){
	var pais = "españa";
	console.log (pais);
}

var pais = "chile";
console.log (pais);

//Let permite definir variables limitando su alcance al bloque o declraracion
//typeof devuelve el tipo de dato de una variable
if(true){
	let pais = "mx";
	console.log(typeof pais);
}
// var permite declarar un avariable global no limitandose a un bloque 

//condicionales 
//Condicional IF

var edad = 6;

if(edad >= 18 ){
	console.log("Eres un adulto ");
	if(edad <= 33){
		console.log("Aun eres millenial");
	}else{
		console.log("ya no eres millenial");
	}

}else{
	console.log("Eres menor de edad");
}
