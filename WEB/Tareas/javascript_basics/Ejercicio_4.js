function primeraLetraMayuscula(cadena) {
  let palabras = cadena.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }

  return palabras.join(" ");
}

console.log(primeraLetraMayuscula("hola mundo")); 
