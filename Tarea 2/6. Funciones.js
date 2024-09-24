// 1. Función que recibe un string y lo retorna en mayúsculas.
function mayuscula(string) {
    return string.toUpperCase();
}

// 2. Función que recibe un string y lo retorna en minúsculas.
function minuscula(string) {
    return string.toLowerCase();
}

// 3. Función que recibe 2 números y los resta.
function resta(numero1, numero2) {
    return numero1 - numero2;
}

// 4. Función que recibe 2 números y los divide.
function divide(numero1, numero2) {
    if (numero2 === 0) {
        return 'Math error';
    }
    return numero1 / numero2;
}

// 5. Función que recibe 2 números y los multiplica.
function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

// 6. Función que recibe un string y devuelve la longitud del string.
function lengthString(string) {
    return string.length;
}
