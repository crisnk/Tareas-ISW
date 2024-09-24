// 1. Función que recibe un array de números y retorna la suma de todos los números del array.
function sumar(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

// 2. Función que recibe un array de números y retorna el promedio.
function promedio(numeros) {
    if (numeros.length === 0)
        return 0;

    const suma = sumarArray(numeros);
    return suma / numeros.length;
}

// 3. Función que toma un arreglo de strings y devuelve un nuevo arreglo con los strings en mayúsculas.
function arrayEnMayusculas(strings) {
    const nuevoArray = [];
    for (let string of strings) {
        nuevoArray.push(string.toUpperCase());
    }
    return nuevoArray;
}

// 4. Función que toma un arreglo de números y devuelve un nuevo arreglo con solo los números pares.
function arrayPares(numeros) {
    const nuevoArray = [];
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            nuevoArray.push(numero);
        }
    }
    return nuevoArray;
}
