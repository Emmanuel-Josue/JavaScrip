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
