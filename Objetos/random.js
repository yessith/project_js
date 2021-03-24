var min = 10;
var max = 20;
var aleatorio;

function random() {
  aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  return aleatorio;
}
random();
document.write(aleatorio);

/*for (i = 0; i < 5; i++) {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  document.write(num + ", ");
}*/

/*function random(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}
document.write(aleatorio);*/

/*var aleatorio = () => (num = Math.floor(Math.random() * (max - min + 1) + min));
var num = aleatorio();
document.write(num);*/
