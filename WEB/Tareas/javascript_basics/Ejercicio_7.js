function factoriza(numero) {
    const factores = [];
    for (let i = 1; i <= numero / 2; i++) {
      if (numero % i === 0) {
        factores.push(i);
      }
    }
    factores.push(numero);
    return factores;
  }

  console.log(factoriza(12)); 
  