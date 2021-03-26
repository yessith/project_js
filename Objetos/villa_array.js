var lienzo = document.getElementById("lienzo");
var papel = lienzo.getContext("2d");
var cantidad = random(0, 20);
console.log(cantidad);

class Assets {
  constructor(nombre, cargaOk) {
    this.imagen = new Image();
    this.nombre = nombre;
    this.cargaOk = cargaOk;
    this.imagen.src = imagenes[this.nombre];
  }
}

var imagenes = [];
imagenes["mapa"] = "img/tile.png";
imagenes["pollo"] = "img/pollo.png";
imagenes["vaca"] = "img/vaca.png";

var mapa = new Assets("mapa", false);
var colection = [];
colection.push(mapa);
colection.push(new Assets("pollo", false));
colection.push(new Assets("vaca", false));

for (var element of colection) {
  element.imagen.addEventListener("load", cargarImage);
  console.log(element);
}
function cargarImage() {
  element.cargaOk = true;
  dibujar();
}

function dibujar() {
  if (mapa.cargaOk) {
    papel.drawImage(mapa.imagen, 0, 0);
  }
  if (element.cargaOk) {
    for (i = 0; i < cantidad; i++) {
      var position_x = random(0, 420);
      var position_y = random(0, 420);
      papel.drawImage(element.imagen, position_x, position_y);
    }
  }
}

function random(min, max) {
  var aleatorio;
  aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  return aleatorio;
}
