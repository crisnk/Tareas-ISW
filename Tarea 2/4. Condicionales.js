// Dado los siguientes valores numéricos:
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// 1. Imprimir en consola el número mayor de los tres.
let mayor = numero1;

if (numero2 > mayor) {
    mayor = numero2;
}
if (numero3 > mayor) {
    mayor = numero3;
}

console.log('Número mayor:', mayor);

// 2. Imprimir en consola el número menor de los tres.
let menor = numero1;

if (numero2 < menor) {
    menor = numero2;
}
if (numero3 < menor) {
    menor = numero3;
}

console.log(menor);

// 3. Imprimir en consola si el numero1 es par o impar.
console.log(numero1 % 2 === 0 ? 'numero1 es par' : 'numero1 es impar');

// 4. Imprimir en consola si el numero2 es par o impar.
console.log(numero2 % 2 === 0 ? 'numero2 es par' : 'numero2 es impar');

// 5. Imprimir en consola si el numero3 es par o impar.
console.log(numero3 % 2 === 0 ? 'numero3 es par' : 'numero3 es impar');

// 6. Imprimir en consola si el numero1 es múltiplo de 5.
console.log(numero1 % 5 === 0 ? 'numero1 es múltiplo de 5' : 'numero1 no es múltiplo de 5');

// 7. Imprimir en consola si el numero2 es múltiplo de 5.
console.log(numero2 % 5 === 0 ? 'numero2 es múltiplo de 5' : 'numero2 no es múltiplo de 5');

// 8. Imprimir en consola si el numero3 es múltiplo de 5.
console.log(numero3 % 5 === 0 ? 'numero3 es múltiplo de 5' : 'numero3 no es múltiplo de 5');