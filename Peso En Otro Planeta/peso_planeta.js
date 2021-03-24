var peso = prompt("Cual es tu peso");
var planeta = parseInt(
  prompt(
    "Elige el planeta para saber tu peso en el, selecciona\n 1 para marte o 2 para jupiter"
  )
);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;

if (planeta === 1) {
  peso_final = Math.round((peso * g_marte) / g_tierra);
  document.write("Tu peso en marte es de: " + peso_final + " Kg");
} else if (planeta === 2) {
  peso_final = Math.round((peso * g_jupiter) / g_tierra);
  document.write("Tu peso en jupiter es de: " + peso_final + " Kg");
} else {
  document.write("No seleccionastes un platena");
}
