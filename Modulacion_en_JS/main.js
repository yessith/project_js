/*const cantidad = 5;
for (i = 1; i <= cantidad; i++) {
  var num = i;
  var par = num % 2;
  if (par == 0) {
    document.write("El numero " + num + " es par</br></br>");
  } else {
    document.write("El numero " + num + " es impar</br></br>");
  }
}*/

const cantidad = 30;
for (i = 1; i <= cantidad; i++) {
  var num = i;
  var fizz = num % 3;
  var buzz = num % 5;
  if (fizz == 0) {
    document.write("Fizz");
  }
  if (buzz == 0) {
    document.write("Buzz");
  }
  if (fizz != 0 && buzz != 0) {
    document.write(i);
  }
  document.write("<br/><br/>");
}
