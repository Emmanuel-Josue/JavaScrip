/*
    ------------------------ Métodos estaticos --------------------------

    Estos métodos se heredan entre clases y para acceder a ellos solo es posible utilizando el nombre que 
    tiene la clase, no se puede accesar a ellos atravez de objetos. 

    Pertenecen a las clases no a los objetos. 
*/
class Persona {
    constructor(nombre){
        this._nombre = nombre;
    }

    hola(nombre){
        console.log('hola, ' + nombre);
    }

    polimorfismo(nombre){
        this.hola(nombre);
    }

    // Método estatico
    // Para crearlo se utiliza la palabra reservada static
    static regresarNombreDelObjeto(objeto){
        return objeto._nombre;
    }
    static correr(){
        console.log('Estoy corriendo');
    }
}

let uno = new Persona('Emmanuel ');

uno.hola('Jos');


class Empleado extends Persona {
    constructor(nombre, sueldo){
        super(nombre);
        this._sueldo = sueldo;
    }

    hola(nombre){
        console.log('Buenos dias !! (Empleado)' + nombre);
    }
}

let primerEmpleado = new Empleado('Alberto', 558899);

primerEmpleado.polimorfismo('Toño');
uno.polimorfismo('Zara');

// Accederemos a los métodos estaticos atravez del nombre de las clases 

console.log(Empleado.regresarNombreDelObjeto(uno));

Empleado.correr();


/*
    Por un experemiento que he realizado entiendo que los métodos estaticos serán accesibles por la clases que 
    los crea y por los hijos que lo hereden, pero no para los padres de la clase que ha creado el método estatico.
    
*/