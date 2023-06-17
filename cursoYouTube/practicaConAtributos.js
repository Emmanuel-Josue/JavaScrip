class Persona {
  // Atruto estatico
  static contadorDeObjetos = 0;

  // Crearemos un atributo que se puede acceder desde cualquier objeto, el formato 
  // es similar a como se crea una variable 
  valor = 1;
  constructor(nombre) {
    this._nombre = nombre;
    this._id = ++Persona.contadorDeObjetos;
  }

  hola(nombre) {
    console.log("hola, " + nombre);
  }

  polimorfismo(nombre) {
    this.hola(nombre);
  }

  // Método estatico
  // Para crearlo se utiliza la palabra reservada static
  static regresarNombreDelObjeto(objeto) {
    return objeto._nombre;
  }
  static correr() {
    console.log("Estoy corriendo");
  }

  // Utilizando los métodos estaticos podemos simular una contante (atributo que no cambia)
  // siempre que creeems un método get lo podremos utilizar o acceder a él como si fuera un atributo
  // esto quiere decir que no será necesario colocar los parentesis
  static get PI() {
    return 3.1416;
  }
}

let uno = new Persona("Emmanuel ");

uno.hola("Jos");

class Empleado extends Persona {
  constructor(nombre, sueldo) {
    super(nombre);
    this._sueldo = sueldo;
  }

  hola(nombre) {
    console.log("Buenos dias !! (Empleado)" + nombre);
  }
}

let empleadoUno = new Empleado("Oso", 55);
let empleadoDos = new Empleado();

// Todos los objetos de las clases heredadas tendran el atributo que se creo en la clase.
console.log(empleadoUno.valor);

// para crear un atributo o método en particular para un objeto podemos realizar lo siguiente

empleadoDos.contrasenia = "abcd"; // En este punto solo este objeto tiene la propiedad o atributo contrasela

console.log(empleadoDos.contrasenia);
console.log(empleadoUno.contrasenia);

// De esta forma podemos crear atributos estaticos, esto quiere decir que solo utilizando el nombre de las
// clases hijas y de la clase en donde se crea el atributo o método se podra acceder a dicho atributo.
Persona.fNacimiento = "00-00-00";
Empleado.tres = 3;
console.log(Empleado.fNacimiento);
empleadoUno.valor = 11;

console.log(empleadoUno.valor);
console.log(empleadoDos._id);

/*
    ¿Qué diferencia existe en crear un atributo para los objetos en el constructor utilizando this. a 
    crear un atributo fuera del constructor en la clase sin utilizar static ? 

  */

//Accederemos al método get que se creo con la intención de utilizarlo como constante
console.log(Empleado.PI);

Empleado.PI = 68;

// NO puedo cambiar el valor porque no existe un método set
console.log(Empleado.PI)

console.log(empleadoDos)
