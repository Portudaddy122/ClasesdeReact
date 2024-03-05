let usuario1 = {
    name: "Sebastian",
    lastName: "Torres",
    age: 21
}
usuario1.name = "Ale";
console.log(usuario1.name);


// arreglos
let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

dias.push("marzo")
console.log(dias);


//TAREAS

//2.3.1.18

//!         Pimera parte
let ticket = {
    from: "Estacion Inicial: Transilvania",
    to: "Estacion final: Pensilvania",
    price: `Precio ${5}$` 
}

console.log("Datos del Ticket:");
console.log(`${ticket.from}, | ${ticket.to}, | ${ticket.price}`);

//! B AGREGAR NOMBRE Y APELLIDO AL ARREGLO VACIO
let person = {}
person.firstName = "Alejandro";
person.lastName = "Portugal";

console.log(`Nombre: ${person.firstName}`);
console.log(`Apellido: ${person.lastName}`);


//!         Segunda Parte

let Biblioteca = [
    {
        titulo: "Speaking JavaScript",
        autor: "Axel Rauschmayer",
        numeroPaginas: 460
    },

    {
        titulo: "Programming JavaScript Applications",
        autor: "Eric Elliott",
        numeroPaginas: 254
    },
    {
        titulo: "Understanding ECMAScript 6",
        autor: "Nicholas C. Zakas",
        numeroPaginas: 352
    }
]
//! B AGREGAR UN NUEVO LIBRO
let nuevoLibro = {
        titulo: "Learning JavaScript Design Patterns",
        autor: "Addy Osmani",
        numeroPaginas: 254
}
Biblioteca.push(nuevoLibro);

console.log(Biblioteca);
console.log(`Longitud del arreglo: ${Biblioteca.length}`);
console.log("-------------------------------------------------------------------");
console.log("Nombres de los libros");
console.log(`${Biblioteca[0].titulo}, ${Biblioteca[1].titulo}, ${Biblioteca[2].titulo}. ${Biblioteca[3].titulo}`);

//! C COPIAR LOS DOS ULTIMOS LIBROS

console.log("-----------------------SIGUIENTE INCISO------------------------");
let nuevoArreglo = Biblioteca.slice(2);
console.log(nuevoArreglo);


//! D BORRAR EL PRIMER LIBRO 

console.log("-----------------------SIGUIENTE INCISO------------------------");
Biblioteca.shift();
console.log(Biblioteca);
console.log(`Longitud del arreglo actualizado: ${Biblioteca.length}`);
console.log("Nombres de los libros");
console.log(`${Biblioteca[0].titulo}, ${Biblioteca[1].titulo}, ${Biblioteca[2].titulo}`);

//! E SUMA DE PAGINAS

console.log(`Suma de las paginas ${Biblioteca[0].numeroPaginas + Biblioteca[1].numeroPaginas + Biblioteca[2].numeroPaginas}`);

