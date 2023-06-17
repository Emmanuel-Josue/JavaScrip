/*
    ---------------------- Prototype (prototipo) --------------------

    Por como yo lo entieno el propotipo es la clase padre de la que se hereda, nos muestra de qué clases 
    estamos heredando, podemos, aunque no se recomienda, sobrescribir funciones de las clases padres. Podemos 
    ver qué métodos tiene cada clase. 

    Todas las clases decienden o son hijas de una clase llamada objet.     

    bibliografia https://youtu.be/kv4O_w1RolA?list=PLpJ0pHgIwPoHeOw6_yRERfEF5pXjyAIcK
*/

class Persona {
    constructor(nombre){
        this._nombre = nombre;
    }       
    primerMetodo(){
        console.log('Soy el primer método');
    }
    
}

// Clase heredera 

class Empleado extends Persona{
    constructor(nombre, id){
        super(nombre);
        this._id = id;
    }
    metodoUno(){
        console.log('Soy de: Clase: Empleado, Método: metodUno')
    }
}

// Ejemplos
let cadena = '1 cadena'
let cadena2 = new String('Oso');
let primerEmpleado = new Empleado('Alberto', 52314);
let primeraPersona = new Persona('Suzana');
console.log(cadena);
console.log(cadena2);
console.log(primerEmpleado);

// Es posible ingresar un método nuevo a alguna clase utilizando la siguiente sintaxis 

Persona.prototype.comer = function comer() {
    console.log('Come con su cuchara');
}

console.log(primeraPersona);

primeraPersona.comer();

//console.log(Empleado);