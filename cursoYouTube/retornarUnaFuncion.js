

// ----------------------------- RETORNAR FUNCIONES ---------------------------------------

/*
    Yo entiendo esto como la forma de poder crear una función que en su interior cambie el valor de sus variables 
    atravez de parametros, esto se maneja como una función expresiva ya que nos retornara una función anonima la cual 
    deberemos referenciar a una variable para poder acceder a esta función. 

    tratando de simplificar para qué sirve creo que es para crear una función con distintos valores en su interior y 
    poder utilizarla.


*/

function retornarFuncion(x,y){
    return function(parametro){
        return parametro + x + y;
    }
}

// En el la siguiente linea aplique un experimento en donde utilice la función me retorno la función que llame
// primero, esto lo deduci pensando en que me esta devolviendo una función, si es así es porque debe de estar 
// ahí y la puedo activar con los parentesis, ahora esto solose puede hacer una vez ya que no se esta guardando 
// dicha función en aguna parte, para hacer esto abria que asignarle una referencia osea una variable let o const, 
// también utilice el conocimiento de que las lineas de código se ejecutan de izquierda a derecha. 
console.log(retornarFuncion(1, 1)(1));

const funcionconValoresDistintosEnSuInterior = retornarFuncion(1,3);

console.log(funcionconValoresDistintosEnSuInterior(1));


