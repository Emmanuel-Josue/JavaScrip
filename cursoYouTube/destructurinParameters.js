/*
    -------------------------------- Destructurin aplicado a los parametros -----------------------------

    Esto se utiliza para poder limitar los accesos de un objeto, para presicar las propiedades que se van a utilizar, 
    esto se hace utilizando el destructurin de objetos solo que se indica en los parametros 
*/

// Si tengo una función que utilizara un método y en el interior quiero utilizar ciertas propiedades del objeto 
// se puede hacer de la siguiente manera 

let objetoUno = {
    uno : 1,
    dos : 2,
    tres : 3,
    cuatro : 4,
    cinco : 5
}

function utilizarObjeto(objeto) {
    console.log(objeto.uno);
    console.log(objeto.dos);
    console.log(objeto.tres);
}

// Pero la función aparte de poder utilizar las propiedades que le indicamos tiene acceso a las otras 
// propiedades del objeto, es por eso que existe la siguiente tecnica que garantiza solo tener acceso 
// a las propiedades que  nosostros establescamos.

function utilizarPropiedades({dos, tres, cuatro}){
    console.log(dos);
    console.log(tres);
    console.log(cuatro);
}

utilizarObjeto(objetoUno);
utilizarPropiedades(objetoUno);


/* ------------------------------ Se puede hacer lo mismo con los array ---------------------------- */

let array = ['a', 'b', 'c', 'd', 'e'];

function print([a, , c, , e]){
    console.log(a);
    console.log(c);
    console.log(e);

}

print(array);

// Bibliografia 
// https://youtu.be/4N5lw21c3wQ?list=PLpJ0pHgIwPoHeOw6_yRERfEF5pXjyAIcK