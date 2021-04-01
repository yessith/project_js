var resultado = document.getElementById("resultado");
var valor_Solicitado = 110;
var cantidad_Entregar;
var billetes_Entregar = [];
var coleccion_Billetes = [];

class Billetes {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

coleccion_Billetes.push(new Billetes(50, 5));
coleccion_Billetes.push(new Billetes(20, 4));
coleccion_Billetes.push(new Billetes(10, 3));

for (elemento of coleccion_Billetes) {
  if (valor_Solicitado > 0) {
    let divicion_Billete = Math.floor(valor_Solicitado / elemento.valor);

    if (divicion_Billete > elemento.cantidad) {
      cantidad_Entregar = elemento.cantidad;
    } else {
      cantidad_Entregar = divicion_Billete;

      elemento.cantidad -= divicion_Billete;

      billetes_Entregar.push(new Billetes(elemento.valor, cantidad_Entregar));

      valor_Solicitado -= cantidad_Entregar * elemento.valor;

      console.log(
        "la cantidad a entregar es de " +
          cantidad_Entregar +
          " billetes de " +
          elemento.valor
      );
    }
  }
}
if (valor_Solicitado > 0) {
  resultado.innerHTML =
    "No se puede entregar la cantidad de " + valor_Solicitado + " Solicitada";
} else {
  for (objBillete of billetes_Entregar) {
    if (objBillete.cantidad > 0) {
      resultado.innerHTML +=
        "La cantidad de billetes a entregar es de " +
        objBillete.cantidad +
        " billetes de $" +
        objBillete.valor +
        "<br />";
    }
  }
}
