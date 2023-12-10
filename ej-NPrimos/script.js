/* Crea un script que pida al usuario 5 números, y muestre en pantalla únicamente la suma 
de los que son números primos. */
let suma = 0;
let n = 0;

while (n < 5) {
  let num = parseInt(prompt(`nº ${n + 1} `));
  if (!isNaN(num) && num > 0) {
    n++;
  } else {
    continue;
  }

  let primo = false;
  for (i = 2; i <= num; i++) {
    if (num % i === 0 && num !== i) {
      primo = false;
      break;
    } else {
      primo = true;
    }
  }

  if (primo === true) {
    suma += num;
  }
}

alert(`suma: ${suma}`);
