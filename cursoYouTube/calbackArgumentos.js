
// ----------------------------- Calback con funciones anonimas ----------------------------------

/*
    Uno siempre esta haciendo calback cuando pasa una función como argumento o establece una función como 
    parametro, hasta el momento entendemos que para pasar una función como argumento debemos pasar la referencia 
    a esa función, pero existe otra manera y es la más común en donde en el mismo espacio del argumento podemos 
    crear una función anonima y esta será enviada a la función, en este punto me surge una pregunta, ¿Qué pasa 
    si se le da como argumento una función declarativa?
*/

function ejecutar(funcion){
    funcion();// En este punto llamamos a la función que recivimos (la llamamos)
}

ejecutar(function(){
    console.log('Me ejecuto !!');
});

ejecutar(function hola(){
    console.log('Se ejecuta la función hola !!');
});


// NO hay problema si se le da una funcion declarativa 

// Por ultimo replicare un ejemplo similar al realizado en el video que es crear una función y pasar la referencia 
// de esa unción como parametro.

const despedida = function(){
    console.log('adios !!');
}

ejecutar(despedida);