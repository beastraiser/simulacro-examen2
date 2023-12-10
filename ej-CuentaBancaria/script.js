/* Realiza una función prototipo llamada cuenta bancaria que tenga 3 atributos genéricos (nombre, dni, edad) y un atributo importante "saldo". Además tendrá 2 métodos: retirar dinero e ingresar dinero. Probar su funcionamiento con un ingreso y una retirada (pág 12/pdf POO)*/
function CuentaBancaria(nombre, dni, edad, saldo) {
  this.nombre = nombre;
  this.dni = dni;
  this.edad = edad;
  this.saldo = saldo;

  this.ingresar = function (q) {
    this.saldo += q;
  };
  this.retirar = function (q) {
    this.saldo -= q;
  };
  this.mostrarSaldo = () => {
    console.log(`Saldo actual: ${this.saldo}`);
  };
}

let cuentaAlex = new CuentaBancaria("Alex", "x234323", 27, 1500);
cuentaAlex.mostrarSaldo();
cuentaAlex.ingresar(300);
cuentaAlex.mostrarSaldo();
cuentaAlex.retirar(1000);
cuentaAlex.mostrarSaldo();
