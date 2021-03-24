var peso = document.getElementById("peso");
var btn = document.getElementById("btn");
var gravedad_tierra = 9.8;
var gravedad_marte = 3.7;
var gravedad_jupiter = 24.8;

btn.addEventListener("click", () => {
  var peso_persona = peso.value;
  var peso_marte = Math.round(
    (peso_persona * gravedad_marte) / gravedad_tierra
  );
  var peso_jupiter = Math.round(
    (peso_persona * gravedad_jupiter) / gravedad_tierra
  );

  document.write(
    "Tu peso en marte es de " +
      peso_marte +
      " Kg" +
      " y tu peso en jupiter es de " +
      peso_jupiter +
      " Kg"
  );
});
