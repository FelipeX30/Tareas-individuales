function longitud(lista) {
    let longitudMinima = lista[0].length;
    for (let i = 1; i < lista.length; i++) {
      if (lista[i].length < longitudMinima) {
        longitudMinima = lista[i].length;
      }
    }
 
    return longitudMinima;
  }
  
  console.log(longitud(['hola', 'basquetbol', 'comida'])); 
  