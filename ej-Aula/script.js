/* 5.20 Diseña una jerarquía de clases donde Música y Tecnología sean clases derivadas de Aula, para modelar las instalaciones de un instituto de enseñanza secundaria. Elige un método con el que evidenciar el concepto del polimorfismo. */

class Aula {
  constructor(color, m2) {
    this.color = color;
    this.m2 = m2;
  }
  showProp() {
    console.log(`Color:${this.color}\nM2:${this.m2}`);
  }
}

class Musica extends Aula {
  constructor(color, m2, instrumento) {
    super(color, m2);
    this.instrumento = instrumento;
  }
  showProp() {
    console.log(
      `Color:${this.color}\nM2:${this.m2}\nInstrumento:${this.instrumento}`
    );
  }
}
class Tecnologia extends Aula {
  constructor(color, herramienta) {
    super(color);
    this.herramienta = herramienta;
  }
  showProp() {
    console.log(`Color:${this.color}\nHerramienta:${this.herramienta}`);
  }
}

let musica1 = new Musica("rojo", 40, "violin");
let tecno1 = new Tecnologia("azul", "martillo");

musica1.showProp();
tecno1.showProp();
