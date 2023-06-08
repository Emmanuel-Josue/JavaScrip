
/*
    Lo que hace la función sort es ordenar un conjunto, arreglo, lista de números, de mayor a menor o de 
    menor a mayor, se le da una función como argumento en la cual existen dos tipos de parametros (a, b), la función 
    tomara o aplicara la función que le dimos a los elementos del array, dentro de la función callbak se da una resta,
    segun el orden de los elementos en esta resta se ordenara de menor a mayor o de mayor a menor. 

    * El método sort sin parametros y con un array de String realizara los cambios en el array original, lo que hac
      es ordenarlos alfabeticamente 

*/

let desordenado = [5, 7,1,9,3,10,4,22,55,13,89,2];
console.log(desordenado);
let ordenAcendente = desordenado.sort((a, b) => a - b);

// Como la función trabaja sobre el mismo array la variable desordenado apunta al mismo lugar que la variable ordenAcendente
console.log(desordenado);
console.log('------------------------------------');
console.log(ordenAcendente);

// Tomaremos el mismo arreglo que en este punto ya esta ordenado de manera acendente y lo ordenaremos de manera desendente

let ordenDesendente = desordenado.sort((a, b) => b - a);
console.log(ordenDesendente);

/*
    Entiendo que es lo que hace la función, pero no como funciona en su interior, creo que será un buen 
    ejercicio replicarlo cuando estudie denuevo las estructuras de datos. 
*/