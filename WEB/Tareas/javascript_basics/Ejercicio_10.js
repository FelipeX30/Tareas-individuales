function esPalindromo(cadena) {

    cadena = cadena.toLowerCase().replace(/\s/g, '');

    for (let i = 0; i < cadena.length / 2; i++) {
      if (cadena[i] !== cadena[cadena.length - 1 - i]) {
        return false; 
      }
    }
    return true; 
  }

  console.log(esPalindromo('Anita lava la tina')); 
  