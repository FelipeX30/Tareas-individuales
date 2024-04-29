function cadenaFrecuente(lista) {
    const frecuencia = {};
  
    for (let i = 0; i < lista.length; i++) {
      const cadena = lista[i];
      if (!frecuencia[cadena]) {
        frecuencia[cadena] = 1;
      } else {
        frecuencia[cadena]++;
      }
    }
  
    let cadenaFrecuente = '';
    let maxFrecuencia = 0;
  
    for (let cadena in frecuencia) {
      if (frecuencia[cadena] > maxFrecuencia) {
        cadenaFrecuente = cadena;
        maxFrecuencia = frecuencia[cadena];
      }
    }
  
    return cadenaFrecuente;
  }

  const cadenas = ['hola', 'hola', 'adios', 'hola', 'adios', 'saludos'];
  console.log(cadenaFrecuente(cadenas)); 
  