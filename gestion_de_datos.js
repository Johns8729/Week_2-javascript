const productos = [

    {
        id: 1,
        nombre: "Laptop",
        precio: 2500
    },

    {
        id: 2,
        nombre: "Mouse",
        precio: 80
    },

    {
        id: 3,
        nombre: "Teclado",
        precio: 150
    }

];


// Mostrar productos completos
console.log("Lista de Productos");
console.log(productos);

const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);


// Mostrar Set
console.log("Set sin Duplicados");
console.log(numeros);


// Agregar nuevo número
numeros.add(10);

console.log("Set despues de agregar 10");
console.log(numeros);

// Verificar si existe un número
console.log("¿Existe el numero 3?");
console.log(numeros.has(3));

// Eliminar un número
numeros.delete(2);
console.log("Set despues de eliminar 2");
console.log(numeros);

// Recorrer el Set
console.log("Recorriendo el Set");

for (const numero of numeros) {

    console.log(numero);

}

// Creamos un Map
const categorias = new Map();


// Agregamos categorías y productos
categorias.set("Tecnología", "Laptop");

categorias.set("Accesorios", "Mouse");

categorias.set("Periféricos", "Teclado");


// Mostrar Map
console.log("Map de Categorias");

console.log(categorias);

console.log("FOR...IN EN OBJETOS");

for (const index in productos) {

    console.log(productos[index]);

}

console.log("OBJECT.KEYS");

productos.forEach(producto => {

    console.log(Object.keys(producto));

});

console.log("OBJECT.VALUES");

productos.forEach(producto => {

    console.log(Object.values(producto));

});

console.log("OBJECT.ENTRIES");

productos.forEach(producto => {

    console.log(Object.entries(producto));

});

console.log("Recorriendo Map");

categorias.forEach((valor, clave) => {

    console.log(`Categoría: ${clave}`);

    console.log(`Producto: ${valor}`);

});



console.log("Validaciones");

productos.forEach(producto => {

    // Verificar id
    if (!producto.id) {

        console.log("Error Producto sin ID");

    }

    if (!producto.nombre) {

        console.log("Error Producto sin nombre");

    }

    if (producto.precio <= 0) {

        console.log("Error Precio inválido");

    }

});

console.log("================================");
console.log("Pruebas Finales");
console.log("================================");
// Lista completa
console.log("PRODUCTOS");
console.log(productos);
// Productos únicos
console.log("SET");
console.log(numeros);
// Categorías
console.log("MAP");
console.log(categorias);
