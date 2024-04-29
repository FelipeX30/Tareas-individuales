function abc_repited(cadena) {
    const frecuencia = {};

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
    }

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (frecuencia[caracter] === 1) {
            return caracter;
        }
    }
}

const cadena = 'abacddbec';
console.log(abc_repited(cadena)); 

