class Animal {
  constructor(nombre, vida, ataque) {
    this.image = new Image();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.image.src = imagenes[this.nombre];
  }
  grito() {
    let grito = this.nombre;
    return grito;
  }
  mostrar() {
    document.body.appendChild(this.image);
    document.write("<br /><strong>" + this.nombre + "</strong> <br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<br />");
    document.write("Grito: " + "!!! " + this.grito() + "<hr />");
  }
}
