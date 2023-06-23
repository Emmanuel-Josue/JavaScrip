/*
  ---------------------------------------------- Call stack ( PRACTICA )--------------------------------------------- 

*/

// Ejemplo 

function gerente(pregunta){
    if(pregunta === '¿Cúanto cuesta la lata de tomates?'){
        return '50 Pesos'
    }
    return 'Ya ha caducado !!'
}

function supervisor(pregunta){
    let respuesta = gerente(pregunta)

    return respuesta;
}

function empleadoUno(pregunta){
    let respuesta = supervisor(pregunta)

    return respuesta;
}

function empleadoDos(pregunta){
    let respuesta = empleadoUno(pregunta)

    return respuesta;
}
function cliente(pregunta){
    let respuesta = empleadoDos(pregunta)

    return respuesta;
}

let respuestaParaCliente = cliente('¿Cúanto cuesta la lata de tomates?');


console.log(respuestaParaCliente);
