
/*
    Por lo que entendi este método solo retornara un valor del array que tenga, esta función necesita que le 
    brindemos una función callbak a la cual le podra dar dos parametros, el primero es una varaible en la cual 
    colocara el valor que se va a devolver y el segundo es una variable en donde con cada iteración colocara el 
    valor actual del elemento del array.
*/

// Experimento 

let lista = [1, 8, 9,7,10,25,43,166,87,9,4];
/*
let numeroMayor = lista.reduce((respuesta, elementoActual) => {
    if (respuesta < elementoActual) {
        respuesta = elementoActual;
        return respuesta;
    } 
    return respuesta;  
});
*/

// El código de arriba se puede simplificar de la siguiente manera 
let numeroMayor = lista.reduce((respuesta, elementoActual) => {
    if (respuesta < elementoActual) return elementoActual;
    return respuesta;  
});


// Como no estoy inicializando a la variable respuesta, ¿Qué valor se le asigna? 
// Mi hipotesis dice que se aplica un for que recorre todo el arreglo

console.log('El numero mayo es: ' + numeroMayor);

// Me falta comprender bien por qué es que se le debe de agregar un return y si al parametro respuesta se le asigna 
// el valor de la posición [0] o por lo que yo dedusco se le debe de asignar un valor 0 o undefine, esto lo puedo 
// comprobar con el ejercicio de multiplicación. 

/*
    ¿Por qué colocar el return ? 

    Síntesis 1:

    Para explicar el retorno de una variable puedo imaginar que como esta función se le aplica a cada elemento 
    y luego para a plicarle la misma función al elemetno siguiente, como ya no puede asignarle un valor a la 
    variable respuesta debe de tomar el valor retornado de la función anterior y darselo a la variable respuesta 
    y de esta forma puede suceder la acumulación. 

    Síntesis 2: 

    La función reduce tomara a la función callbak y la aplicara a cada elemento del array, la función callbak tiene
    dos parametros, respuesta o acumulador y elemento del array, en cada iteración se tiene que extraer un resultado 
    el cual será la variable respuesta o acumulador y se le asignara como valor a la siguiente iteración de la aplicación
    de la función  callbak a su parametro respuesta o acumulador y el segundo parametro (elemento del array) será cada 
    posición del array, es importante saber que el la primera iteración el varor que tendra el primer parametro será el +
    elemento [0] del array y el segundo parametro sera el elemento [1] del array. 

    Hoy 07-06-2023;

    Termine de ver el video y comprendi que se le puede dar un sesgundo argumento el cual servira para darle un 
    valor inical a la variable que funje como acumulador.

    Entendiendo esto nos brindan un ejercicio de como podemos utilizar este segundo parametro y nos deja claro 
    que puede tomar cualquier tipo de dato. 

*/

let votos = ['i','m','no','si'];

let conteo = votos.reduce(function(conteo, votoActual){
    if (conteo[votoActual]) {//Se pregunta si existe el atributo, si existe le suma una unidad
        conteo[votoActual]++;// Se obtiene el valor que tiene el atributo y se le suma una unidad
    }
    else{
        conteo[votoActual] = 1;// Se crea el atributo y se le asigna el valor de uno porque es el primer voto
    }
}, {});// El dato con el que se inicializa es un objeto


console.log(conteo);