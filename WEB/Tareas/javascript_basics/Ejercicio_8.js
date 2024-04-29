function duplicados(arr) {
    let arreglo = [];
    for (let i = 0; i < arr.length; i++) {
      if (arreglo.indexOf(arr[i]) === -1) {
        arreglo.push(arr[i]);
      }
    }

    return arreglo;
  }

  console.log(duplicados([1, 0, 1, 1, 0, 0])); 
  