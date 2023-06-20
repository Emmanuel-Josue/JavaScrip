/*
  ---------------------------------------------- Call stack ---------------------------------------------

  Cuando realizamos un call back estamos llamando a una función dentro de otra función, puede que dentro de esa 
  función que llamamos se este llamando a tra función a este proceso se le llama call stack y consiste en ir apilando 
  las cosas que se estan llamando, entendemos que las lineas de código se ejecutan de arriba hacia abajo de izquierda
  a derecha, pero este orden puede ser "interrumpido" si se ejecuta el call stack.
  Lo podemos ver con una metafora, digamos que estamos en el supermercado en la caja como clientes, queremos saber 
  el precio de una lata de tomaque que estan exibiendo, le preguntamos al cajero, pero este no sabe la respuesta, 
  le pregunta al supervisor, pero este tampoco sabe la respuesta, va por con el gerente y le pregunta, cuando este 
  le responde el supervisor le dice al cajero y el cajero a nosotros se puede visualizar algo así. 

  Gerente           
  Supervisor       Supervisor            
  Empleado          Empleado        Empleado
  Cliente           cliente         Cliente         Cliente

  En cuanto el objeto (persona) cumple su cometido desaparece. 


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
