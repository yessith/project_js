var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

var lienzo = document.getElementById("cuadro");
var ctx = lienzo.getContext("2d");
var color = "#5b2c36";
var x = 150;
var y = 150;
var pixel_linea = 10;

dibujaLinea = (x_inicial, y_inicial, x_final, y_final) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.moveTo(x_inicial, y_inicial);
  ctx.lineTo(x_final, y_final);
  ctx.stroke();
  ctx.closePath();
};

document.addEventListener("keyup", moverLinea);

function moverLinea(evento) {
  if (evento.keyCode === teclas.UP) {
    dibujaLinea(x, y, x, y - pixel_linea);
    y = y - pixel_linea;
  }
  if (evento.keyCode === teclas.DOWN) {
    dibujaLinea(x, y, x, y + pixel_linea);
    y = y + pixel_linea;
  }
  if (evento.keyCode === teclas.LEFT) {
    dibujaLinea(x, y, x - pixel_linea, y);
    x = x - pixel_linea;
  }
  if (evento.keyCode === teclas.RIGHT) {
    dibujaLinea(x, y, x + pixel_linea, y);
    x = x + pixel_linea;
  }
}
