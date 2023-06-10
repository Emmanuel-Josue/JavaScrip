/*
    ----------------------------------- Colocar métodos en objetos ------------------------
    
    Una función es un bloque de código que hace algo, cuando esta función se crea adentro de un objeto toma por 
    nombre método. Existen diferentes tipos de crear métodos en un objeto, los veremos a continuación.

*/

// Contenedor
let objeto = {
    // Propiedades 
    nombre : 'Emmanuel',
    edad : 22,

    // Métodos 

    // Priemra forma, no es muy usual
    suamar: sumar,
    // Se puede utilizar la tecnica de Shorthan propertier y solo colocar el nombre de la función 
    restar,

    // La forma más usual de crear métodos es crearlos dentro del objeto, podemos utilizar todos los tipos de 
    // funciones: expresivas, declartivas, anonimas

    multiplicar : function (x, y) {
        return x * y;
    },

    dividir : (x, y) => { x / y},

    /*
        ------------------------------------- Method shorthan sintax -------------------------------------

        Una forma de abreviar la sintaxis de los métodos en los objetos es la siguiente
    */

    sumarDos(x,y){
        return x + y;
    }



}


// Funciones 

function sumar(x, y){
    return x + y;
}

function restar(x, y){
    return x- y;
}

console.log(objeto);

