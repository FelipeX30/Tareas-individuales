function bubbleSort(lista) {
    const n = lista.length;
    let swapp;
    let t;
    do {
        swapp = false;
        for (let i = 0; i < n - 1; i++) {
            if (lista[i] > lista[i + 1]) {
                t = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = t;
                swapp = true;
            }
        }
    } while (swapp);
    return lista;
}

const lista = [64, 34, 25, 12, 22, 11, 90, 329, 2, 234];
console.log("Lista original:", lista);
console.log("Lista ordenada:", bubbleSort(lista));
