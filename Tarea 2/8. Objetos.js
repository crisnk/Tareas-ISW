// 1. Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género.
const persona = {
    nombre: "Cristobal",
    edad: 21,
    genero: "Masculino"
};

// 1.1 Luego, muestra la información de esa persona por la consola.
console.log("Información de la persona:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Género:", persona.genero);

// 2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no.
const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: "A4",
    fotografias: 3,
    estado: "en buen estado"
};

// 2.1 Imprimir el objeto entero por consola.
console.log("Objeto caja:", caja);

// 2.2 Imprimir cada propiedad del objeto y el tipo de dato que es.
console.log("Cuadernos:", caja.cuadernos, "Tipo:", typeof caja.cuadernos);
console.log("Lápices:", caja.lapices, "Tipo:", typeof caja.lapices);
console.log("Papel:", caja.papel, "Tipo:", typeof caja.papel);
console.log("Fotografías:", caja.fotografias, "Tipo:", typeof caja.fotografias);
console.log("Estado:", caja.estado, "Tipo:", typeof caja.estado);
