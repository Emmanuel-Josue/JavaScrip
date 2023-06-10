/*
    ------------------------- Computed properties (traducción: propiedades caolculadas) ---------------

    Resumen: 
    El proposito de esta tecnica es agregarle propiedades a un objeto, consiste en colocar el nombre del objeto y al 
    lado de este colocar entre corchetes la referencia vel valor que queremos colocar como llave, hay que entender 
    que lo que este entre corchetes javaScrip lo va a resolver, es decir va a extrael el valor de la variable o va 
    a resolver la operación que este entre corchetes, al extraer el valor de uan variable también es una forma de 
    resolver, y asignara este valor como una llave del objeto. 

    Una cosa que quiero expresar que no se toca en el video pero me di cuenta tratando de replicar lo que hizo en el 
    video es que si uno solo coloca el objeto con los corchetes indicando el valor que se le quiere agregar como llave 
    no lo agregara al objeto hasta que le demos un valor que le pueda establecer a la llave(atributo)


    Bibliografia: https://youtu.be/CaO8Mp1mtzQ?list=PLpJ0pHgIwPoHeOw6_yRERfEF5pXjyAIcK
*/

let objeto = {
    primeraPropiedad : 1,
    segundaPropiedad : 2,
    terceraPropiedad :3
}


let quintaPorpiedad = 5;
let nombre = 'cinco';
objeto['cuartaPropiedad'] = 4;
objeto[quintaPorpiedad] = nombre;
console.log(objeto);

// Un valor practico que he visto que se le puede dar a esta tecnica es tomar un objeto, copiarlo y agregarle propiedades
// esto se puede hacer con ayuda de una función que realice especificamente esto. 

// Quiero evocar el proceso con el cual se puede copiar un objeto utiliando la tectica de propietes en objetos el cual 
// consiste en crear un objeto y dentro de este agregar la sintexis de ...objetoACopiar 


// Crear la copia de un objeto y agregarle llaves utilizando una función y la tecnica computerpropieties

// Lo que se busca con este ejercicio es crear un objeto nuevo con las misma propiedades más alguanas otras. 

let objetoOriginal = {
    a : 1,
    b : 2,
    c :3
}

function agregarPropiedad(objeto, nombreKey, valorKey){    
    // Pirmero se copia el objeto en el objeto que se regresara, luego se establece el nombre de la llave 
    // utilizando la tecnica computed properties y por ultimo se le asigna un valor a esta llave. 
    return {...objeto, [nombreKey] : valorKey}
}

let objetoExtendido = agregarPropiedad(objetoOriginal, 'nombre', 'Emmanuel Josue Hernandez Velazco' );

console.log(objetoExtendido);

// Otra forma de utilizar esta tecnica es la siguiente 

let a = 'nombre';
let b = 'edad';
let c = 'telefono';

let persona = {
    [a] : 'Emmanuel',
    [b] : 25,
    [c] : '5523594946',
}

console.log(persona);