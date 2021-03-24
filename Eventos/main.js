/**
 * EJEMPLO DE PRACTICA EVENTOS EN JS
 */
var text = document.getElementById("dato");
var btn = document.getElementById("btn");
var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d");
var y_ini, x_fin;
var ancho = lienzo.width;
console.log("Ancho del lienzo " + ancho);

crearLineas = (color, x_inicial, y_inicial, x_final, y_final) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.5;
  ctx.moveTo(x_inicial, y_inicial);
  ctx.lineTo(x_final, y_final);
  ctx.stroke();
  ctx.closePath();
};

dibujarLineas = () => {
  var lineas = parseInt(text.value);
  console.log("Lineas ingresadas por el usuario " + lineas);
  var espacio = ancho / lineas;
  console.log("Espacio entre pixeles " + espacio);
  for (i = 0; i < lineas; i++) {
    y_ini = espacio * i;
    x_fin = espacio * (i + 1);
    crearLineas("red", 0, y_ini, x_fin, ancho);
    crearLineas("red", ancho, y_ini, ancho - x_fin, ancho);
    crearLineas("red", 0, ancho - y_ini, x_fin, 0);
    crearLineas("red", ancho, ancho - y_ini, ancho - x_fin, 0);
  }
};

btn.addEventListener("click", dibujarLineas);
