//arreglos - Listas     

let carrito = ["pizza", "Gaseosa", "Helado", "Dulces", "Cerveza"];

console.log(carrito);  // Muestra todo el arreglo
console.log(carrito[0]); // Muestra el primer elemento del arreglo (PIZZA)
console.log(carrito[1]); // Muestra el segundo elemento del arreglo (GASEOSA)
console.log(carrito[2]); // Muestra el tercer elemento del arreglo (HELADO)


// Operaciones: agregar, eliminar, cambiar

let carrito2 = ["pizza", "Gaseosa", "Helado", "Dulces", "Cerveza"];

carrito2.push("Chocolates"); // Agrega un elemento al final del arreglo
console.log(carrito2);

carrito2.pop(); // Elimina el último elemento del arreglo
console.log(carrito2);

carrito2[0] = "Hamburguesa"; // Cambia el primer elemento del arreglo
console.log(carrito2);


// Arreglos de objetos
let carrito3 = [
    { nombre: "pizza", precio: 10 },
    { nombre: "Gaseosa", precio: 5 },
    { nombre: "Helado", precio: 8 }
];
console.log(carrito3);

// Operaciones: agregar, eliminar, cambiar  

let clientes = {nombre: "Juan", edad: 30, ciudad: "Madrid"};

clientes.pais = "España"; // Agrega un nuevo atributo al cliente
console.log(clientes);

clientes.edad = 31; // Cambia la edad del cliente
console.log(clientes);

clientes.ciudad = "Barcelona"; // Cambia la ciudad del cliente
console.log(clientes);

delete clientes.edad; // Elimina el atributo edad del cliente
console.log(clientes);





