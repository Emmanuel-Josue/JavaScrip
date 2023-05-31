

// ------------------------------------- Funciones expresivas --------------------------

/*
    Las funciones expresivas son funciones anonimas que se guardan o a las que se les asigna una variable const o let,
    funciona con ambas, estas se pueden accedar atraves de dichas variables.

    Lo que aún no comprendo es por qué o para qué se utilizan estas funciones, en el video se dio un ejemplo de que 
    se pude utilizar las variables en los objetos, crear propiedades con variables que hagan referencia a funciones,
    pero creo que esto se puede lograr con el simple echo de utilizar POO aunque creo que no es así porque al 
    inicio de JavaScrip no se podia aplicar la POO 

*/

//console.log(suma(1, 1));  
console.log(division(6, 3));

const suma = function (x, y){
    return x + y;
}
const resta = function(x, y){
    return x - y;
}

// las funciones a las cuales no se nombran se conocen como funciones anonimas, es posible crear funciones expresivas 
// utilizando funciones con nombre pero no se podra acceder a ellas por medio de ese nombre sino que solo por medio de 
// la referencia (variable)

const multiplicacion = function mul(x, y){
    return x * y;
}

function division(x, y){
    return x / y;
}

// Una gran diferencia es que las funciones declarativas tienen hoisting mientras que las expresivas no lo tienen,
// deben de esperar a que se inicialicen en tiempo de ejecución. 


// podemos asignar las referencias a las funiones en array y en objetos 

let array = [suma, resta, multiplicacion, division];

let objetoOperaciones = {
    sumaLlave: suma,
    restaLave: resta,
    multiplicacionLlave: multiplicacion,
    divisionLlave: division    
}

console.log(objetoOperaciones.sumaLlave(1,1));

let objetoDos = {
    llaveSuma: function(){

    }
}


// Creo que las funciones expresivas se crearon con el fin de poder colocarle funciones a los objetos. 



















