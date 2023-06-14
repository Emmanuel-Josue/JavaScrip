/*
    --------------------------------------------- This parte dos ---------------------------------------

    Bibliografia : https://youtu.be/mBfJU-xsyv4?list=PLpJ0pHgIwPoHeOw6_yRERfEF5pXjyAIcK

    Lo que comprendi de la explicación es que el objeto toma de contexto o de objeto según el lugar desde donde es 
    llamado, es decir que si se llama desde el scope global el objeto this toma de referencia al objeto window y 
    si se llama desde un objeto que se ha creado el objeot this toma de contexto a dicho objeto, veamos el siguiente 
    ejemplo 

*/

objeto = {
    uno : 1,

    // Métodos 

    ubicacion(){
        // Imprimira el objeto
        console.log(this);
    },
    getUno(){
        //Para utilizar propiedades dentro del mismo objeto hay que utilizar this para que de esta forma 
        // podamos evitar un error de sintaxis o de semantica. 
        console.log(this.uno);
    }
}

function imprimirObjeto() {
    console.log(this);
}

// Se le asigna un método al objeto de forma externa, la función pasa a ser parte de él.
objeto.imprimirObjeto = imprimirObjeto;

//Al llamar al método desde el objeto debe de imprimir a este.

objeto.imprimirObjeto();

// En esta parte estoy invocando a la función que existe en el scope global no al método que le he asignado al objeto 
// entonces deberia imprimir al objeto global 
imprimirObjeto();


//  ----------------------------- Ejercicios dados en el video ----------------------------- 

const objetoDos = {

    nombre : 'Emmanuel',
    apellido : 'Hernandez',

    // Métodos 
    nombreCompleto(){
        // Para no escribir muchas veces this podemos utilizar la tecnica de destructurin para esto 
        const {nombre, apellido} = this;

        //Devolvemos un String. 
        return nombre + ' ' + apellido;
    },
    imprimir(){
        // Pasa utilizar métodos del propio objeto en el objeto hay que utilizar this 
        console.log(this.nombreCompleto);
    },
    imprimirDos(){
        console.log('Soy el metodo imprimirDOs');
        console.log(this);
    }
}

// Le asignaremos una función al objeto dos 

objetoDos.nuevaFuncion = function () {
    console.log('Nueva función !!  This hace referencia a: ');
    console.log(this);
}

objetoDos.nuevaFuncion();

// Si creamos una constante o una variable y le asignamos el método que contiene el objeto objeto Dos, lo que 
// estamos haciendo es pasarle la referencia por lo cual ahora vamos a acceder a la función atravez de let o const que 
// forman parte del objeto global aunque no sea de la forma en que lo hace var, sí forman parte de él.  

const aConstante = objetoDos.nuevaFuncion;

// Debe de imprimir el objeto global 
aConstante();

// Asignaremos un método que se creo adentro de un objeto a una constante que pertenece al scope global, al momento 
// de ejecutar la función por meedio de la contante el contexto que debe de tener o tomar es el de el scope global 
// osea del objeto global. 

const variableGlobal = objetoDos.imprimirDos;

variableGlobal();
