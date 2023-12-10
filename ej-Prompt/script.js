/* Pide al usuario varios datos por pantalla (Nombre, Apellidos y Edad), muestra por pantalla o en la consola los datos. Si el usuario no rellena los campos, deberá de haber un valor predeterminado. Ten en cuenta todos los posibles errores.*/
let nombre = prompt("Nombre", "Alex");
let ok = true;

while (ok) {
  for (char of nombre) {
    if (!isNaN(char) || char === " ") {
      nombre = prompt("Inválido ... prueba otra vez\nNombre", "Alex");
      ok = true;
      break;
    } else {
      ok = false;
    }
  }
}

let apellidos = prompt("Apellidos", "Bulc Focsansky");
ok = true;

while (ok) {
  for (char of apellidos) {
    if (!isNaN(char) && char !== " ") {
      apellidos = prompt(
        "Inválido ... prueba otra vez\nApellidos",
        "Bulc Focsansky"
      );
      ok = true;
      break;
    } else {
      ok = false;
    }
  }
}

let edad = parseInt(prompt("Edad", "27"));
ok = true;

while (ok) {
  if (isNaN(edad)) {
    edad = parseInt(prompt("Inválido ... prueba otra vez\nEdad", "27"));
  } else {
    ok = false;
  }
}

console.log(`Nombre:${nombre}\nApellidos:${apellidos}\nEdad:${edad}`);
