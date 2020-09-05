"use strict";
exports.__esModule = true;
var colegio_1 = require("./colegio");
var alumnos_1 = require("./alumnos");
var colegio = new colegio_1.Colegio();
var alumnos1 = new alumnos_1.Alumnos();
alumnos1.setAlumno(1);
alumnos1.setNombre("juan");
alumnos1.setApellido("torres");
alumnos1.setEdad(20);
alumnos1.setNacimiento(21 / 1 / 2000);
alumnos1.setLocalidad("tandil");
alumnos1.setNacionalidad("argentina");
console.log(alumnos1);
/*
console.log("");
colegio.setNombre("franco");
colegio.setNombre("morales");
console.log("");
colegio.setFechaDeNacimiento(19/1/1999);
colegio.setPromedioAlumno(9);
console.log("");
*/ 
