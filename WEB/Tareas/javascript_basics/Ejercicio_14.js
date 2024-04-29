function Potencia2(numero) {
    if (numero <= 0) {
      return false;
    }

    return (numero & (numero - 1)) === 0;
  }
  

  console.log(Potencia2(16)); 

  