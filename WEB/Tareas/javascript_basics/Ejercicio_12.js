function calcularMediana(lista) {
    const longitud = lista.length;
  
    if (longitud === 0) {
      return null;
    }
  
    lista.sort((a, b) => a - b);
  
    const indiceMedio = Math.floor(longitud / 2);
  
    if (longitud % 2 === 0) {
      return (lista[indiceMedio - 1] + lista[indiceMedio]) / 2;
    } else {
      return lista[indiceMedio];
    }
  }
  
  function calcularModa(lista) {
    const frecuencia = {};
  
    lista.forEach(numero => {
      frecuencia[numero] = (frecuencia[numero] || 0) + 1;
    });
  
    let moda = [];
    let maxFrecuencia = 0;
  
    for (let numero in frecuencia) {
      const valor = frecuencia[numero];
      if (valor > maxFrecuencia) {
        moda = [parseInt(numero)]; // Convertimos el nombre de la propiedad en número
        maxFrecuencia = valor;
      } else if (valor === maxFrecuencia) {
        moda.push(parseInt(numero)); // Convertimos el nombre de la propiedad en número
      }
    }
  
    return moda;
  }
  
  function medianaYModa(lista) {
    const mediana = calcularMediana(lista);
    const moda = calcularModa(lista);
  
    return { mediana, moda };
  }
  
  // Ejemplo de uso
  const numeros = [1, 3, 5, 6, 6, 9, 9, 9, 11];
  const resultado = medianaYModa(numeros);
  console.log(resultado.mediana);
  console.log(resultado.moda);
  