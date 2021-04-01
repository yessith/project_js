var lienzo = document.getElementById("lienzo");
var papel = lienzo.getContext("2d");
var cantidad = random(0, 20);
console.log(cantidad);

class Assets {
  constructor(ruta, cargaOk) {
    this.ruta = ruta;
    this.cargaOk = cargaOk;
  }
}

var mapa = new Assets("img/tile.png", false);
mapa.imagen = new Image();
mapa.imagen.src = mapa.ruta;
mapa.imagen.addEventListener("load", cargarMapa);

var cerdo = new Assets("img/cerdo.png", false);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.ruta;
cerdo.imagen.addEventListener("load", cargarCerdo);

var vaca = new Assets("img/vaca.png", false);
vaca.imagen = new Image();
vaca.imagen.src = vaca.ruta;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarMapa() {
  mapa.cargaOk = true;
  dibujar();
}
function cargarCerdo() {
  cerdo.cargaOk = true;
  dibujar();
}
function cargarVaca() {
  vaca.cargaOk = true;
  dibujar();
}

function dibujar() {
  if (mapa.cargaOk) {
    papel.drawImage(mapa.imagen, 0, 0);
  }
  if (cerdo.cargaOk) {
    for (i = 0; i < cantidad; i++) {
      var position_x = random(0, 420);
      var position_y = random(0, 420);
      papel.drawImage(cerdo.imagen, position_x, position_y);
    }
  }
  if (vaca.cargaOk) {
    for (i = 0; i < cantidad; i++) {
      var position_x = random(0, 420);
      var position_y = random(0, 420);
      papel.drawImage(vaca.imagen, position_x, position_y);
    }
  }
}

function random(min, max) {
  var aleatorio;
  aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  return aleatorio;
}

/* FORMAS DE CREAR OBJETOS EN JS
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
