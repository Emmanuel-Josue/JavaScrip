/* 
   Al igual que existe un orden en como se resuelven las operaciones matematicas también existe un orden 
   en como se evaluan las sentencias en los operadores logicos, el orden es el siguiente 

   1.- ! (NOT o negación)
   2.- && (Y)
   3.- || (o)

*/

// Ejemplo 

// Aplicando la sintaxis por defecto el resultado es true 
let a = 5;
let boleano = a == 5 || a == 2 && a < 1;
console.log(boleano);

// Si existe un caso en donde necesites cambiar el orden de como se ejecuta la sentencia podemos aplicar
// parentesis para que esto suceda. 

let m = 5;
let boleanoDos = (m == 5 || m == 2) && m < 1;
console.log(boleanoDos)