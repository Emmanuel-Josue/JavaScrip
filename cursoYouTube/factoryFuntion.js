/*
 ------------------- Factory Funtion (Fabrica de funciones) -----------------------------------

 Es el predecesor de las clases, se utiliza apara asignarle operaciones a un objeto, antiguamente cuando no existian 
 las clases se utilizaban estas funciones 
    * Es una función que devuelve un objeto 
*/

function fabrica(a, b){
    // Creamos un objeto 
    const objeto  =  {};

    objeto.a = a;
    objeto.b = b;

    objeto.suma = function(a,b){
        return a + b;
    }

    return objeto;
}

const objeto01 = fabrica(5, 2);
const objeto02 = fabrica(1, 1);

console.log(objeto01.a);
console.log(objeto01.b);
console.log(objeto01.suma);

/*
    El problema con esta forma de crear objetos es que los métodos son duplicados siempre que se crea un nuevo método.
    Esto quiere decir las direcciones de memoria a los métodos son diferentes, lo podemos ver en la siguiente demos-
    treación 
*/

// Me sorprende que lo que devuelve es la referencia al objeto 
console.log(objeto01.suma === objeto02.suma);// Como no es la misma referencia, nos da un false

/*
    Para resolver el problema mejoramos la clase cosstructuro colocando todos los métodos externamente a prototype
    para que de esta manera todos los objetos que se creen utilizen el mismo método y no se gasten recursos inecesa.
    riamente

    Es importante mencionar que este tema se ver para entender de donde vienen las clase o por qué son mejores ya que
    esto se utilizava cuando no existian y fue una buena solución en su momento pero ya no se utilizan. 

*/

// Crearemos otra clase
// Se colocaba de igual forma en mayusculas 
function FabricaPersona(nombre) {
    this._nombre = nombre;
}

FabricaPersona.prototype.correr = function (nombre) {
    console.log(nombre + 'esta corriendo');
}


// Se utiliza la palabra reservada ( new ) para no tener que colocar el retorno de valor 
let persona03 = new FabricaPersona('Luis');

console.log(persona03);