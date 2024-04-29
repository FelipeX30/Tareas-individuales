function ordenDescendente(lista) {
    let listaOrdenada = [];
    while (lista.length > 0) {
      let maximo = lista[0];
      let indiceMaximo = 0;
      for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) {
          maximo = lista[i];
          indiceMaximo = i;
        }
      }
      listaOrdenada.push(maximo);
      lista.splice(indiceMaximo, 1);
    }
    return listaOrdenada;
  }

  const numeros = [5, 2, 9, 1, 7];
  console.log(ordenDescendente(numeros)); 
  