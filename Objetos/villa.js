var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d");
var mapa = "img/tile.png";
var cerso = "img/cerdo.png";
var pollo = "img/pollo.png";
var vaca = "img/vaca.png";

var imagen = new Image();
imagen.src = mapa;

var min = 10;
var max = 20;
var aleatorio;

function random() {
  aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  return aleatorio;
}

/*
// Object() constructor.
var name = "sol";
var edad = 20;

var persona = new Object();
persona.nombre = name;
persona.edad = edad;
console.log(persona);*/

/*
// Object initializer - Objeto literal.
var persona = {
  nombre: "sol",
  edad: 20,
};
console.log(persona.nombre + " / " + persona.edad);*/

/*
// Función constructora.
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
var persona_01 = new Persona("sol", 20);
console.log(persona_01);*/
