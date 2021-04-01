var min = 10;
var max = 20;
var aleatorio;

function random() {
  aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  return aleatorio;
}
random();
document.write(aleatorio);
