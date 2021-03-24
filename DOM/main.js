/**
 * EJEMPLO DE PRACTICA FUNCIONES EN JS
 */

/*var lienzo = document.getElementById("lienzo");
var c = lienzo.getContext("2d");
crearLineas = (color, x_inicial, y_inicial, x_final, y_final) => {
  c.beginPath();
  c.strokeStyle = color;
  c.moveTo(x_inicial, y_inicial);
  c.lineTo(x_final, y_final);
  c.stroke();
  c.closePath();
};
crearLineas("red", 10, 200, 50, 10);*/

/**
 * EJEMPLO DE PRACTICA CICLOS FOR, WHILE EN JS
 */

var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d");
var limite = 40;
var lineas = 0;
var y_ini, x_fin;

crearLineas = (color, x_inicial, y_inicial, x_final, y_final) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x_inicial, y_inicial);
  ctx.lineTo(x_final, y_final);
  ctx.stroke();
  ctx.closePath();
};

/*while (lineas < limite) {
  y_ini = 10 * lineas;
  x_fin = 10 * (lineas + 1);
  crearLineas("red", 0, y_ini, x_fin, 400);
  console.log("Linea #" + lineas);
  lineas++;
}*/

for (i = 0; i < limite; i++) {
  y_ini = 10 * i;
  x_fin = 10 * (i + 1);
  crearLineas("red", 0, y_ini, x_fin, 400);
  console.log("Linea #" + i);
}
