// Funciones actualizadas 

// Estas funciones tampocon se les puede aplicar el hoisting

let funcionFlecha = (parametros) => {
    return "Escribir";
}

console.log(funcionFlecha("oso"));


/*  Comunmente este tipo de funciones y las expresivas se guardan adentro de variables constantes con esto solo se 
asegura que no se vuelvan a declarar a lo largo del código  */

/* Algo que quiero parafracear para poder entender mejor es que cuando asignamos un valor a una variable que es 
cosntante lo que estamos haciendo es apuntar ese nombre "constante" a una dirección espesifica de memoria  */

const uno = 1; // la dirección a al que apuntara es 226599, esto ya no se puede cambiar a lo largo del código 
console.log(uno);

// El apuntador estará ligado especificamente a un espacio de memoria el dato que hay aquí se puede modificar solamente 
// en el lugar donde se esta inicializando la constante. 

//Normalmente nos encontraremos funciones que inicializan constantes

const funcionUnoFlecha = (parametro) => {
    return "Correr";
}

// Recuerdo que al principio cuando entendia el concepto de método no comprendia como es que se asimilava una acción 
// con poner como ejemplo en el interior del método lo que se debia hacer, decia algo así como "Solo es la palabra escrita, 
// no es como si algo se puciera a correr fisicamente" no podia comprender la similitud quese queria expresar. 

// ----------------------------- Formas de expresar las funciones flecha --------------------------------------

// Se puede reducir a una sola linea el código si no es muy grande 

const primeraFuncion = () => console.log("Hola, Emmanuel !!");
primeraFuncion();

//Si la función solo va a recibir un unico parametro no es necesario colocar los  parentesis 
const segundaFuncion = parametroA => console.log(parametroA);
segundaFuncion("Hormiga");
console.log(segundaFuncion());

// Si la función necesita ser más compleja se deben de utilizar las llaves y utilizar el la palabra recervada 
//return 

const terceraFuncion = (numeroUno, numeroDos, numeroTres) => {
    let resultado,
        almacenTemporal;
    almacenTemporal = numeroUno + numeroDos;
    resultado = almacenTemporal / numeroTres;
    return resultado;
}
console.log(terceraFuncion(5, 5, 2));

// Cuando se reduce el código a una sola linea se retorna automaticamente un valor 

const cuartaFuncion = () => 2+2;
console.log(cuartaFuncion());

// Con estas funciones hay que ser especificos al momento de querer regresar un objeto ya que sino puede presentar 
// errores 
// Colocando los parentesis sonmos más precisos e indicamos que queremos devolver un objeto. 
const quintaFuncion = () => ( {nombre: "Taza", apellido: "Roja"});
console.log(quintaFuncion());