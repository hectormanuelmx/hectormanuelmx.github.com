/*
¿Que tipo de entidades  : Autores
Nombre


Nombre
Genero
Fecha de nacimiento
Pais de origen

Generar tabla
*/

DROP DATABASE IF EXISTS libreria_cf;
CREATE DATABASE IF NOT EXISTS libreria_cf;

USE libreria_cf;

CREATE TABLE if NOT EXISTS autores(
/*Generar columnas a partir de la lista*/
/*LA NORMALIZACION aseguro que to tendremos datos duplicados o colmnas compuestas*/
/*la variable nombre almacenara solo 50 caracteres*/
autor_id INT, /* Llave primaria*/
nombre VARCHAR(25), /* Almacena 2^16*/
apellido VARCHAR(25),
genero CHAR(1),/* de 0 a 255 caraceres VARCHAR*/
fecha_nacimiento DATE,/*A,M,D*/
pais_origen VARCHAR(40)
);

INSERT INTO autores(autor_id,nombre,apellido,genero,fecha_nacimiento,pais_origen)
VALUES (5,"DrossRotzank","Revilla","M","2010-01-14","Argentina"),
	   (6,"Sergei","Brin","M","1970-04-17","Rusia"),
       (7,"Sergei","Brin","M","1970-04-17","Rusia"),
	   (6,"Sergei","Brin","M","1970-04-17","Rusia"),
	   (6,"Sergei","Brin","M","1970-04-17","Rusia");
    
SELECT * FROM autores;    
/*

INSERT INTO autores(autor_id,nombre,apellido,genero,fecha_nacimiento,pais_origen)
VALUES (1,"DrossRotzank","Revilla","M","2010-01-14","Argentina");


INSERT INTO autores(autor_id,nombre)
VALUES (1,"DrossRotzank");

INSERT INTO autores(autor_id,nombre,apellido,genero,fecha_nacimiento,pais_origen)
VALUES (4,"Sergei","Brin","M","1970-04-17","Rusia");
*/