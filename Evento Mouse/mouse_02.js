var lienzo = document.getElementById("cuadro");
var ctx = lienzo.getContext("2d");
var color = "#5b2c36";
var x_ini = 0;
var y_ini = 0;
var iniciar_dibujo = false;

dibujaLinea = (x_inicial, y_inicial, x_final, y_final) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.moveTo(x_inicial, y_inicial);
  ctx.lineTo(x_final, y_final);
  ctx.stroke();
  ctx.closePath();
};

lienzo.addEventListener("mousedown", (mouse_down) => {
  iniciar_dibujo = true;
  x_ini = mouse_down.offsetX;
  y_ini = mouse_down.offsetY;
});

lienzo.addEventListener("mousemove", (mouse_move) => {
  if (iniciar_dibujo === true) {
    x_fin = mouse_move.offsetX;
    y_fin = mouse_move.offsetY;
    dibujaLinea(x_ini, y_ini, x_fin, y_fin);
    x_ini = x_fin;
    y_ini = y_fin;
  }
});

lienzo.addEventListener("mouseup", (mouse_up) => {
  iniciar_dibujo = false;
  x_ini = mouse_up.offsetX;
  y_ini = mouse_up.offsetY;
});
