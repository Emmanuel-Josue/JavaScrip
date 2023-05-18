/* 
    El tipo de dato Strig es un objeto esto quiere decir que como todo objeto tiene sus atributos y sus métodos. En 
    el video relacionado a este tema vemos espesificamente el metodo length y como podemos acceder a cada caracter 
    del string, esto se hace muy similarmente a un arreglo con la excepción de que no podemos modificar el String 
    es decir que una vez inicializado un String no podemos modificarlo, no creo comprender del todo esto porque creo 
    que es posible formar un String nuevo apartir del ultimo pero esto se haria en otra variable.     
*/

// Método lenght 

let cadena = "Hola-Emmanuel";

// Podemos acceder a sus propiedades apartir de colocar un punto 

let largoDeCadena = cadena.length;

console.log(largoDeCadena);

console.log(cadena[5]);

// El método typeof muestra el tipo de dato que tenemos. 

/* 
    Existen dos formas de crear una cadena en donde una de ellas le dara un tipo de dato String y la otra 
    la reconocera como objeto, por lo que entiendo no hay diferencias porque con ambas formas podemos acceder a las
    propiedades y métodos que tiene dicha clase. 
    
    *   Los String son inmutables 
*/

// Primera forma para declarar un objeto de tipo String 
let cadenaDos = 'Hormiga';
console.log(typeof cadenaDos);

// Segunda forma: Esta forma tiene que ver con crear un objeto, esto al parecer es igual que en 
// java en donde la palabra reservada indica que se creará un objeoto y se le asigna al apuntador (variable) en 
// este caso cadenaTres. Hay algo que cambia al crear este tipo de String y es que el método typeof en la primera forma
// reconoce al Strig como un String y en la segunda reconoce al String como un objeto. 

let cadenaTres = new String('Pantera');
console.log(typeof cadenaTres);

let a = 'abc';

a = a[0];
let mcadena = a[2]; //Se pierde conexión con la cadena original "abc" el apuntador a ahora apunta a un lugar nuevo "a"
console.log(mcadena);

console.log(a);

// *** Las funciones que se crean dentro de una clase toman por nombre MÉTODOS basicamente son funciones pero 
//      por regla si estan dentro de una clase se llamarán métodos. 


// Para convertir el texto del String a minusculas podemos ocupar 

// Esta es la primera diferencia que he encontrado y es que este método no lo tiene la cadena que se inicializo como objeto 
cadena.toLocaleLowerCase();
// Convierte las letras a mayusculas 
cadena.toUpperCase();

// Nos da el valor de la letra que tiene el lugar que le indiquemos 
cadena.charAt(0);
