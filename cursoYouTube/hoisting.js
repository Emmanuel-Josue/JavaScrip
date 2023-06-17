

// -------------------------- Hoisting (elevación) ---------------------------------


/*
    Hoisting significa que tomara siertos elementos del código y los declarará o inicializara primero antes que 
    todo lo demás. 
    Si utilizamos var, esta tiene hoisting, solamente se declarara, pero no se inicializara se le asignara predetermi-
    nadamente el valor undefine. Let y const no tienen hoisting asi que primero que nada hay que declarar e inicializar 
    por nuestra cuenta los valores que queramos utilizar utilizando let y const. Si creamos una función expresiva 
    utilizando var esta aplicara el hoisting, pero solo la declarara, no inicializara la función mientras que con let 
    y conts nisiquiera las declarara hasta llegar a ellas en el flujo natural que se ejecuta el código. 

    *   Las funciones expresivas como las de flecha siempre deben de ser declaradas antes de utilizarlas. 
*/

// Función expresiva: no se carga en memoria 

let primeraFuncion = function(){
    console.log('No se puede utilizar hasta que naturalmente la ejecución llegue hasta este punto ');
}

function funcionDeclarativa(){
    console.log('Se puede llamar antes de que naturalmente se llegue hasta este punto en la ejecución ');
}

// Nota:

// No hay necesidad de indicarle al lenguaje que vamos a crear una variable ya que puede interpretarlo por él mismo

//variableDos = 'dos';
// Si se declara y en algun punto se elimina pero se conserva una variable o referencia se tendra forma de llegar a la 
// información. 
console.log(variableDos);

