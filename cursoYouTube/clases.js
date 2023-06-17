
class Persona {

    constructor(nombre, apellido) 
    {
        this.nombre = nombre;
        // Se puede indicar el nombre de la variable de esta manera para poder diferenciarla del método 
        // get 
        this._apellido = apellido;
    }

    //No se aconseja tener un método get con el mismo nombre de 
    // un atributo 
    get getNombre() {
        return this.nombre;
     }

     // Otra forma de colocar un método get es la siguiente
     get apellido(){
        return this._apellido;
     }

    set setNombre(nombre) { 
        this.nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    /*
        Notas 

        Con los métodos get y set no es necesario utilizar los parentesis para invocarlos, para cambiar el valor de las
        variables debemos utilizar los métodos get y set 
    *   Las clases no gozan de hoisting 
    */
}
