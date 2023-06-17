
class Persona {
    constructor(nombre){
        this._nombre = nombre;
    }
    // hola() {
    //  console.log('hola simplemente')   
    // }
    hola(nombre){
        console.log('hola, ' + nombre);
    }

    // El método que regrese o que utilice será del elemento que lo ha llamado o del tipo de objeto que lo ha 
    // invocado. 
    polimorfismo(nombre){
        this.hola(nombre);
    }
}

let uno = new Persona('Emmanuel ');

uno.hola('Jos');

/*
    La sobrescritura funciona diferente en javaScrip ya que esto solo se puede hacer en clases hijas, se sobreescribe
    el contenido de un método y cuando se llame al método que tiene el mismo nombre en las distintas clasees se 
    invocara al método que le pertenece a la calse del objeto del que se llama. 
*/


// ------------------------------------ Funciona de la siguiente manera -------------------------------

// Solo fuinciona en combinación con la herencia 

class Empleado extends Persona {
    constructor(nombre, sueldo){
        super(nombre);
        this._sueldo = sueldo;
    }

    // La sobrescritura se realiza con un método heradado, al mimo tiempo se esta aplicando el polimorfismo, la forma
    // del método 
    hola(nombre){
        console.log('Buenos dias !! (Empleado)' + nombre);
    }
}

let primerEmpleado = new Empleado('Alberto', 558899);

primerEmpleado.polimorfismo('Toño');
uno.polimorfismo('Zara');