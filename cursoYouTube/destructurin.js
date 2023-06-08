/*
--------------------------------------------------- Destructurin aplicado a arrays ---------------------------------------

    Es una tecnica para inicializar variables con los valores de un array de una manera simplificada.

*/

let numeros = [1, 2, 3, 4, 5, 6];

// Una forma de tener cada valor por separado en una variable del array numeros seria la siguiente 

let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno, dos, tres);

// La siguiente forma es aplicar el concepto de destructurin 

let  [primero, segundo, tercero] = numeros;

console.log(primero, segundo, tercero);

// Podemos combinar la tecnica Spread con destructurin de la siguiente manera 

let [uno1, dos1, tres1, ...restoDelArray] = numeros;
console.log(uno1, dos1, tres1, restoDelArray);

// Si queremos saltarnos algun valor, es decir no obtener una copia con refernecia de un elemento del array dejamos comas en un espacio vacio 
let [uno2, dos2, ,...resto] = numeros;
console.log(uno2, dos2, resto);

// Es un valor nuevo que existe en otra parte de la memoria.
primero = 55;

console.log(primero, segundo, tercero);
console.log(numeros);// El valor original en el array no cambia 