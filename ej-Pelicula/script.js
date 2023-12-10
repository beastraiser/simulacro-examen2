/* 5.24 Crea una clase Película que permita gestionar esta información: nombre de la película, año de estreno, duración, género, los seis actores o actrices más importantes, la URL de su cartel promocional y su director; y una acción que permita mostrar en consola toda la información. El constructor recibirá los datos en una cadena JSON de la que deberá sacar los valores de cada propiedad. Crea un objeto de la clase y ponla a prueba. */

jsoninfo = {
  nombre: "Conan",
  anyo: "1999",
  duracion: "234",
  genero: "accion",
  actores: ["A", "B", "C"],
  url: "www",
  director: "checkkk",
};
jsonString = JSON.stringify(jsoninfo);

class Pelicula {
  constructor(jsonString) {
    this.jsonString = JSON.parse(jsonString);
    this.nombre = this.jsonString.nombre;
    this.anyo = this.jsonString.anyo;
    this.duracion = this.jsonString.duracion;
    this.genero = this.jsonString.genero;
    this.actores = this.jsonString.actores;
    this.url = this.jsonString.url;
    this.director = this.jsonString.director;
  }
  showInfo() {
    console.log(
      `Nombre:${this.nombre}\nAnyo:${this.anyo}\nDuracion:${this.duracion}\nGenero:${this.genero}\nActores:${this.actores}\nUrl:${this.url}\nDirector:${this.director}`
    );
  }
}

let conan = new Pelicula(jsonString);
conan.showInfo();
