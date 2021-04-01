var dni = 8958;
var letraUsuario = "B";
var letraSeleccionada;
var num_divisible = 23;
var coleccionLetras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

if (dni > 0 && dni <= 99999999) {
  let modulo = dni % num_divisible;
  letraSeleccionada = coleccionLetras[modulo];
  console.log(
    "Modulo obtenido, " + modulo,
    ",Posicion a la que corresponde el modulo obtenido dentro del array " +
      letraSeleccionada
  );
}
if (letraSeleccionada == letraUsuario) {
  console.log("letra ok");
} else {
  console.log("letra no corresponde");
}
