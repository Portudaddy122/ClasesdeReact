//Saludo de Alumnos 

function Saludo(nombre){
    console.log('hola a todos');
    console.log(`Soy ${nombre}`);
}

Saludo("Jose");




console.log(`Rosa: el precio es de ${precioRosa}, la cantidad es de ${cantidadRosa}, el precio es de ${totalRosa}`);
console.log(`Rosa: el precio es de ${precioLirio}, la cantidad es de ${cantidadLirio}, el precio es de ${totalLirio}`);
console.log(`Rosa: el precio es de ${precioTulipan}, la cantidad es de ${cantidadTulipan}, el precio es de ${totalTulipan}`);

console.log(`El total es de  ${total}`);

let total = 0;

function flores(nombre, precio, cantidad){
    let precioFlores = cantidad * precio;
    console.log(`${nombre}: el precio es de ${precio}, la cantidad es de ${cantidad}, el valor es de ${precioFlores}`);  
    total = total + precioFlores;
}

flores ("ROSA", 8, 70)
flores ("LIRIO", 10, 50)
flores ("TULIPAN", 2, 120)
console.log(`El total es de ${total}`);


//TAREA MRO 2

/*Modifica el código del ejemplo anterior. Supón que los precios de las flores serán constantes
(no cambiarán). Declara e inicializa las variables restantes de la misma manera que en el ejemplo 
anterior. Muestra toda la información recopilada en la consola. Ahora disminuye el número de rosas 
en 20 y el de lirios en 30. Vuelve a mostrar toda la información recopilada en la consola.*/


const precioRosa = 8;
const precioLirio = 10;
const precioTulipan = 2;

let cantidadRosa = 70;
let cantidadLirio = 50;
let cantidadTulipan = 120;

let totalRosa = precioRosa * cantidadRosa;
let totalLirio = precioLirio* cantidadLirio;
let totalTulipan = precioTulipan * cantidadTulipan;

let total1 = totalRosa + totalLirio + totalTulipan;

console.log(`Rosa: el precio es de ${precioRosa}, la cantidad es de ${cantidadRosa}, el precio es de ${totalRosa}`);
console.log(`Rosa: el precio es de ${precioLirio}, la cantidad es de ${cantidadLirio}, el precio es de ${totalLirio}`);
console.log(`Rosa: el precio es de ${precioTulipan}, la cantidad es de ${cantidadTulipan}, el precio es de ${totalTulipan}`);

console.log(`El total es de  ${total}`);

