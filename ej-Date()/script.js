/* Obten la hora actual del día con los métodos date() y getHours(). A continuación da los buendos días, buenas tardes o buenas noches dependiendo de la hora. */
fechaActual = new Date();
horaActual = fechaActual.getHours();

if (horaActual >= 6 && horaActual <= 12) {
  console.log("Buenos días");
} else if (horaActual > 12 && horaActual <= 20) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
