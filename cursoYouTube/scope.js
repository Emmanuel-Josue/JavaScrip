// ------------------------------- Scope ---------------------------------------------------------------

/*
            Esto se refiere a la accesibilidad o visibilidad que tendra una variable, si en una función 
            declaramos alguna variable esta será invisible o no accesible para el código que esta afuera de 
            esta función, pero si declaramos variables afuera de esta función y las queremos utilizar adentro 
            o estando dentro de la función esto sí se va a poder, no hay necesidad de declararla simplemente 
            se utiliza, se invocal, por que si se declara una variable con el mismo nombre lo que estará 
            pasando es que se estará creando una variable totalmente diferente. 
        */

let aVariable = 1; // Nunca tocamos su valor en la función, solo declaramos una nueva variable con el mismo nombre.
let bVariable = 2; // Cambiamos su valor en la función.
function segundaFuncion() {
  let aVariable = 3;
  bVariable = 4;
  console.log(
    "variable local: " + aVariable + ", varible global: " + bVariable
  );
}
segundaFuncion();
console.log(bVariable + ", " + aVariable);


//------------------------------------------- Block scope ---------------------------


/*
    Para entender esto hay que comprender qué es un bloque o qué es lo que lo define, un bloque se refiere al 
    código que esta encerrado en llaves, es diferente a crear un objeto ya que este debe de tener una llave y 
    el valor de esa llave. Un bloque normalmente es aquel que tendra una condicional o una función. 

    Una vez que entendamos lo que es un bloque hay que entender que las variables son accesible a nivel de bloque, 
    esto se le llama scope (inactivo) cada variable tiene scope. En versiones anteriores de js las variables se 
    creavan utilizando la palabra resservada " var " solo que esta forma de crearlas presentavan ciertos problemas 
    que se han arreglado utilizando ahora let y const para crear variables. Los problemas que presentaba el trabajar
    con var es que a nivel de bloque no se respetaba el scope, se podian incializar o declarar multiples veces las
    variables y al crear bucles for las varialbes que funcionaban como iteradores no se destruian al finalizar el 
    bucle es por estas razones que se recomienda utilizar let y const los cuales no presentan estos problemas. 

    Aunque var sí respeta el scope a nivel de función no lo hace a nivel de bloque. 

*/

if(true){
    // Bloque 
    var cVariable = 1;
    let dVariable = 2;
}
function terceraFuncion(){
    var eVariable = 'hola';
}
console.log(cVariable);
// Estas lineas no se pueden acceder por el scope 
// console.log(dVariable);
// console.log(eVariable);
function nombre(){
    //Bloque
}

var oso = 'un oso';
var oso = 'otro oso';
let castor = 'Un castor';

//let castor = 'no es posible volver a inicializarla';

//video en donde se explica este tema.

//  https://youtu.be/Dn8L1h8JZys?list=PLpJ0pHgIwPoHeOw6_yRERfEF5pXjyAIcK























