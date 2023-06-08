/*
    -------------------------------------------- Destructurin aplicado a objetos ----------------------------------

    Esta tecnica también funciona con objetos, hay que recordar que esta tecnica se utiliza para poder en este caso 
    obtener algun dato de una llave del objeto y copiarla a una variable externa al objeto, la sintaxis es la sigiente 
*/

const primerObjeto = {
    primera : 1,
    segunda : 2,
    tercera : 3,
    cuarta : 4
}

// Extraer los valores de las propiedades de una manera larga seria esta 

let uno = primerObjeto.primera;
let dos = primerObjeto.segunda;

console.log(uno, dos);

// Aplicando el destructurin 
// En este caso se extrae el valor invocando el nombre de la llave, no importa la posición en la que se realice 
// En este caso también aplicamos un sprea, lo que realiza es crear un objeto con el esto de las propiedades 
const {primera, segunda, ...otrosDatos} = primerObjeto;

console.log(primera, segunda, otrosDatos);

// Si queremos asignarle un nombre diferente al valor que extraemos lo hacemos de la siguiente manera 

const{primera : a, cuarta : b} = primerObjeto;

console.log(a, b);


// ------------------ Ejercicio de como creo que funciona el destructurin con un array de objetos 


let arraA = [{nombre : 'Oso', color : 'negro'}, {nombre : 'Hormiga', color : 'Rojo'}];

const[{color : c}, objetoDos] = arraA;

console.log(objetoDos)

console.log(c);


// Es posible recupera el valor de un objeto que esta en un array combinando las sintaxis de destructurin de array 
// y de objetos. 