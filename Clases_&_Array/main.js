// ARRAY ASOCIATIVO
var imagenes = [];
imagenes["pokacho"] = "img/pollo.png";
imagenes["muucacho"] = "img/vaca.png";
imagenes["tochi"] = "img/cerdo.png";

var colection = [];
colection.push(new Animal("pokacho", 50, 80));
colection.push(new Animal("muucacho", 50, 80));
colection.push(new Animal("tochi", 50, 80));

for (var pakiman of colection) {
  pakiman.mostrar();
  console.log(pakiman);
}
