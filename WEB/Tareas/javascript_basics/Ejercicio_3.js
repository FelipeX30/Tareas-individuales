function reverse(arreglo){
    let nuevoArreglo = [];
    let j = arreglo.length - 1;
    for(let i = 0; i < arreglo.length; i++){
        nuevoArreglo[i] = arreglo[j];
        j--;
    }
    return nuevoArreglo;
}

function reverseM(arreglo){
    let j = arreglo.length - 1;
    for(let i = 0; i < arreglo.length/2; i++){
        let temp = arreglo[i];
        arreglo[i] = arreglo[j];
        arreglo[j] = temp;
        j--;
    }
}

let arreglo = [1, 9, 3, 4, 5, 8, 32];
let arregloInvertido = reverse(arreglo);
console.log("Arreglo Original: ", arreglo);
console.log("Arreglo Invertido: ", arregloInvertido);
