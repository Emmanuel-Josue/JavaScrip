// Todas las funciones automaticamente se colocan en memoria, hoisting se elevan hasta arriba para que de esta forma 
//se inicialicen primero. 

/* Existen dos tipo de funciones */

// Declarativas 

function correr()
{
    console.log("Estoy corriendo");
}

// Expresivas 

// Consisten en guardar una función adentro de una variable, a estas funciones no se les aplica el hoisting. Se 
// deben de declarar primero antes de utilizarlas ya que de lo contrario se presentaria un error 
    
let primerFuncion = function()
{
    console.log("Caminar");
}


// ---------------------- FUNCIONES PARTE TRES  -------------------

// La palabra return es la que marca el termino de la función, es la ultima 
// linea que se ejecuta.  



// ---------------------- FUNCIONES CUARTA PARTE --------------------

/*
    *   Lo que explican en esta video es que los parametros de una función al no recibir algún argumento lo que hacen es 
        asignarle a ese parametro un valor predeterminado el cual es undefine
    *   Si colocamos en alguna parte la palabra return, al ejecutarse el código y encontrarse con dicha palabra 
        lo que pasará es que retornara lo que tenga que retornar y ahi en ese instante se terminara de ejecutar el código.

*/
        

