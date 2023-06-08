/*
    ---------------------------------------------- Spread ---------------------------------

    Es una forma de juntar dos array diferentes, nos devolvera un arry nuevo, podemos copiar un array y también 
    podemos combertir una cadena en un array, funciona de la siguiente manera
*/

let uno = ['oso', 'cangrejo', 'morza', 'delfin'];
let dos = [1, 2, 3, 4, 5, 6, 7];
let cadena = 'cadena normal';

// La sintaxis es simple, le indicamos que agrege todo el array colocando los tres puntos delante del nombre del array
// colocamos la coma y hacemos lo mismo con el segundo y así sucesivamente 
let fucionDeArray = [...uno, ...dos];

// Existe un método que nos ayuda a hacer esto, es el siguiente 

let nuevoArrayUtilizandoFuncion = uno.concat(dos);

console.log(fucionDeArray);
console.log(nuevoArrayUtilizandoFuncion);

nuevoArrayUtilizandoFuncion.push('ormiga');// Solo modifica a el array que acaba de crear 

console.log(nuevoArrayUtilizandoFuncion);
console.log(fucionDeArray);


// Para utilizar Spred con cadenas podemos hacer lo siguiente 

let convercionAArray = [...cadena];
console.log(convercionAArray);

let fucionCadenaArray = [...cadena, ...nuevoArrayUtilizandoFuncion];

console.log(fucionCadenaArray);

// Otra forma de convertir una cadena a un array es con la función split 

let convercionConFuncion = cadena.split('');// Hay que colocar las comillas. 

console.log(convercionConFuncion);


/*
------------------------------------------- spread con objetos no iterables -----------------------------

    bibliografia:  https://youtu.be/yKc8GlyxEiI?list=PLpJ0pHgIwPoHeOw6_yRERfEF5pXjyAIcK

    Para entender esto hay debo de comprender qué es un objeto no iterable, primero explicare lo que entiendo 
    por un objeto iterable, un objeto iterable puede ser un objeto array o una cadena, no sé que otro objeto 
    se pueda considerar iterable. Por lo que he visto hasta este momento spread toma a un objeto, array o cadena y lo 
    desconpone en "piezas". Con las cadenas toma cada letra que las compone y los introduce en un array, con los array
    toma a cada elemento y los coloca dentro de un nuevo array es aquí en donde podemos utilizar esta propiedad para 
    fusionar array diferentes en uno nuevo, pero el comportamiento de hacer spread cambia cuando lo utilizamos con 
    objetos que no son array, si tomamos un objeto con x propiedades y estando dentro de otro objeto le aplicamos 
    spread al primer objeto lo que sucedera es que copiara las propiedades con lo valores de estas propiedades dentro 
    del segundo objeto, si estando dentro del segundo objeto aplicamos un spread a un tercer objeto que tiene exactamete 
    las mismas propiedades que el primer objeto lo que sucedera es que solo reescribira los valores de dichas propiedades 

    
    *   Spread solo funciona en el primer nivel 
    *   Spread en españo significa extención 
    
*/

let a = [1, 2, 3, ['a', 'b', 'c', 'd'], 4, 5];

let b =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

console.log(a);

let c = [...a, ...b, ...a[3]];

console.log(c);

let objetoA = {
    primeraPropiedad : 'Oso',
    segundaPropiedad : 22.3,
    terceraPropiedad : 'Negro'
}

// Podemos utilizar spread para copiar un objeto 

let objetoB = {
    ...objetoA

    //Si queremos podemos agregar propiedades extra
    // Hay que saber que este objeto es diferente al objeoto objetoA, si modificamos este, no le sucedera nada 
    // al objeto objetoA.
}

console.log(objetoB);

    objetoB.primeraPropiedad = 'Hormiga';
    console.log(objetoB);
    console.log(objetoA);







